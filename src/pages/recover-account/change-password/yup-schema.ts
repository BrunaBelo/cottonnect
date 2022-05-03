import * as yup from "yup";
import '../../../shared/yup-configs/locales'

export const ChangePasswordSchema = yup.object().shape({
  password: yup.string().required().min(8).max(30),
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null]),
});

