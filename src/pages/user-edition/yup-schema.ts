import * as yup from "yup";
import '../../shared/yup-configs/locales'
import { validateUser } from "../../service/user";

export const userSchema = yup.object().shape({
  email: yup.string().email().required()
    .test("Unique", { path: 'email', message: "Email já existe" }, async (values) => {
      const response = await validateUser("email", values)
      return response
  }),
  phoneNumber: yup.string().required().min(11).max(11)
    .test("Unique", { path: 'phoneNumber', message: "Celular já existe" }, async (values) => {
    const response = await validateUser("phoneNumber", values)
    return response
  }),
  additionalInformation: yup.string().max(280),
  city: yup.string().required(),
  state: yup.string().required()
})
