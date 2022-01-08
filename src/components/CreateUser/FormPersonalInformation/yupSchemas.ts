import * as yup from "yup";
import '../../../shared/yupConfigs/locales'

export const schemaUserInfos = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  phone: yup.string().required().min(11).max(11, "Telefone inválido"),
  cpf: yup.string().required().min(11).max(11, "CPF inválido"),
  password: yup.string().required().min(8).max(30),
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null]),
  moreInfo: yup.string().max(280)
})