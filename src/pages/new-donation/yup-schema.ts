import * as yup from "yup";
import '../../shared/yupConfigs/locales'

export const schemaDonation = yup.object().shape({
  title: yup.string().required(),
  closingDate: yup.string().required(),
  categories: yup.array().notRequired(),
  //photos: yup.array().notRequired(),
  description: yup.string().required().max(240)
})