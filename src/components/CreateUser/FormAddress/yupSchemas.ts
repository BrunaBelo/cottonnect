import * as yup from "yup";
import '../../../shared/yupConfigs/locales'

export const schemaUserAddress = yup.object().shape({
  city: yup.string().required(),
  state: yup.string().required()
})