import * as yup from "yup";
import '../../shared/yup-configs/locales'

export const schemaAuction = yup.object().shape({
  title: yup.string().required(),
  closingDate: yup.string().required(),
  categories: yup.array().notRequired(),
  photos: yup.array().required().min(1),
  description: yup.string().required().max(240)
})