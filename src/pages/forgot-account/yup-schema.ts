import * as yup from "yup";
import '../../shared/yup-configs/locales'

export const ForgotAccountSchema = yup.object().shape({
  email: yup.string().email().required()
});
