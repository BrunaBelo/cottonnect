import * as yup from "yup";
import { validateUser } from "../../../service/user";
import '../../../shared/yup-configs/locales'

export const schemaUserInfos = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().email().required()
    .test("Unique", {path: 'email', message: "Email já existe"}, async (values) => {
    const response = await validateUser("email", values)
    return response
  }),
  phoneNumber: yup.string().required().min(11).max(11, "Telefone inválido")
    .test("Unique", {path: 'phoneNumber', message: "Telefone já existe"}, async (values) => {
    const response = await validateUser("phoneNumber", values)
    return response
  }),
  cpf: yup.string().required().min(11).max(11, "CPF inválido")
    .test("Unique", {path: 'cpf', message: "CPF já existe"}, async (values) => {
    const response = await validateUser("cpf", values)
    return response
  }),
  password: yup.string().required().min(8).max(30),
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null]),
  additionalInformation: yup.string().max(280)
})