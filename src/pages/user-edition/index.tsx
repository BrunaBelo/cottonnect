import react, { useEffect, useState } from "react";
import LeftNavBar from "../../components/left-nav-bar";
import Loading from "../../components/loading";
import { UserData } from "../../interfaces/user-data";
import { getUser, updateUser } from "../../service/user";
import { getStates } from "../../service/state";
import { getCities } from "../../service/cities";
import { defaultErrors } from "./handle-data";
import { changeInputValue, showErrors, validateForm } from "../../shared/form-configs/validate";
import { userSchema } from "./yup-schema";
import ErrorObj from "../../interfaces/error-obj";
import ReactInputMask from "react-input-mask";
import { Main,
  Container,
  EditUserInput,
  UpdateUser,
  LoadingCircle,
  EditIcon,
  Options,
  ErrorMessage,
  Item,
  EditInput,
  FormUpdateUser,
  EditAdditionalInformationInput,
  UserIcon} from "./styles";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { AlertMessage } from "../auction-details/styles";
import { City } from "../../interfaces/city";

interface selectLocation {
  id: string,
  name: string
}

export default function UserEdition() {
  const [user, setUser] = useState({} as UserData);
  const [additionalInformation, setAdditionalInformation] = useState(user.additionalInformation);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [statesList, setStatesList] = useState([] as selectLocation[]);
  const [citiesList, setCitiesList] = useState([] as selectLocation[]);
  const [errors, setErrors] = useState(defaultErrors());
  const [loading, setLoading] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    getCurrentUser();
    getStatesFromApi();

    setTimeout(() => {
      setUpdated(false);
    }, 5000)
  }, [updated]);

  const getCurrentUser = (async () => {
    setLoading(true);

    const userId = localStorage.getItem("user-id");
    const currentUser = await getUser(userId as string);
    setUser(currentUser);
    setEmail(currentUser.email as string);
    setPhoneNumber(currentUser.phoneNumber as string);
    setAdditionalInformation(currentUser.additionalInformation);
    setState(currentUser.city?.stateId as string);

    const city = await getCities(currentUser.city?.stateId as string);
    await populateSelectLocation(city, setCitiesList);

    setCity(currentUser.cityId as string);
    setLoading(false);
  });

  const getStatesFromApi = (async () => {
    const states = await getStates();
    await populateSelectLocation(states, setStatesList);
  });

  async function onChangeState(e: any) {
    changeInputValue(errors, e, setState);

    const city = await getCities(e.target.value);
    setCity("");
    await populateSelectLocation(city, setCitiesList);
  }

  function onChangeCity(e: any) {
    changeInputValue(errors, e, setCity);
  }

  async function populateSelectLocation(data: any, setList: any): Promise<void>{
    let locations: selectLocation[] = [];

    data.forEach((location: selectLocation) => {
      locations.push({ name: location.name, id: location.id })
    });

    setList(locations);
  }

  async function updateCurrentUser(): Promise<void> {
    setErrors(defaultErrors());

    const resultForm = await validateForm(
      { email, phoneNumber, additionalInformation, city, state }, userSchema);
    if(resultForm === true){
      setLoadingSave(true);
      await updateUser(buildUser());
      setUpdated(true);
      setLoadingSave(false);
    }else{
      setErrors(showErrors(resultForm as ErrorObj[], defaultErrors()));
    }
  }

  function buildUser(): UserData {
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.additionalInformation = additionalInformation;
    user.cityId = city;
    user.city = citiesList.find(element => element.id === city) as City;

    return user;
  }

  function buldingMessage() {
    if (updated === true){
      return (<AlertMessage severity="success">{"Sua conta foi atualizada com sucesso."}</AlertMessage>)
    }else {
      return (<AlertMessage severity="error">{"Erro ao atualizar sua conta."}</AlertMessage>)
    }
  };

  return(
    <Container>
      <LeftNavBar/>
      {
        loading
        ?
          <Loading></Loading>
        :
        <Main>
          {
            updated ? buldingMessage(): <></>
          }
          <h2>Meus Dados <UserIcon /></h2>
          <FormUpdateUser>
            <EditInput>
              <EditUserInput
                name="email"
                error={errors.email.status}
                helperText={errors.email.message}
                required
                value={email}
                onChange={(e)=>changeInputValue(errors, e, setEmail)}
                label="Email"
                type="email"
              />
            </EditInput>

            <EditInput>
              <ReactInputMask
                name="phoneNumber"
                mask="(99)99999-9999"
                value={phoneNumber}
                onChange={(e)=>changeInputValue(errors, e, setPhoneNumber)}
              >
                {() =>
                  <EditUserInput
                    error={errors.phoneNumber.status}
                    helperText={errors.phoneNumber.message}
                    required
                    type="text"
                    label="Telefone"
                  />
                }
              </ReactInputMask>
            </EditInput>

            <EditInput>
              <FormControl required fullWidth>
                <InputLabel shrink htmlFor="state">Estado</InputLabel>
                <Options
                  error={errors.state.status}
                  name="state"
                  onChange={(e) => onChangeState(e)}
                  value={state}
                  input={<OutlinedInput notched label="Estado" />}
                >
                  {
                    statesList.map((state) => {
                      return(
                        <Item value={state.id}>{state.name.toLowerCase()}</Item>
                      )
                    })
                  }
                </Options>
                <ErrorMessage>{errors.state.message}</ErrorMessage>
              </FormControl>
            </EditInput>

            <EditInput>
              <FormControl required fullWidth>
                <InputLabel shrink htmlFor="city">Cidade</InputLabel>
                <Options
                  error={errors.city.status}
                  name="city"
                  onChange={(e) => onChangeCity(e)}
                  value={city}
                  input={<OutlinedInput notched label="Cidade" />}
                >
                  {
                    citiesList.map((city) => {
                      return(
                        <Item value={city.id}>{city.name.toLowerCase()}</Item>
                      )
                    })
                  }
                </Options>
                <ErrorMessage>{errors.city.message}</ErrorMessage>
              </FormControl>
            </EditInput>

            <EditAdditionalInformationInput>
              <EditUserInput
                name="additionalInformation"
                error={errors.additionalInformation.status}
                helperText={errors.additionalInformation.message}
                required
                value={additionalInformation}
                multiline
                minRows="3"
                maxRows="6"
                onChange={(e)=>changeInputValue(errors, e, setAdditionalInformation)}
                label="Descrição"
                fullWidth
              />
            </EditAdditionalInformationInput>

            <UpdateUser disabled={loading} onClick={() => updateCurrentUser()}>
              {
                loadingSave ? <>Salvando informações... <LoadingCircle size={20} /></> : <>Salvar <EditIcon /></>
              }
            </UpdateUser>
          </FormUpdateUser>
        </Main>
      }
    </Container>
  );
}