// Metodo para tratar e formatar as informacoes inputadas pelo usuario
export function handleDataStep1(
  name: string,
  email: string,
  phoneNumber: string,
  cpf: string,
  password: string,
  confirmPassword: string,
  additionalInformation: string) {
  return {
    name,
    email,
    phoneNumber: formatData.phoneNumber(phoneNumber),
    cpf: formatData.cpf(cpf),
    password,
    confirmPassword,
    additionalInformation
  }
}

// Metodo para retornar um objeto default de forma que nenhuma informacao apresente erro
export function defaultErrorsStep1() {
  return {
    name: {status: false, message: ""},
    email: {status: false, message: ""},
    phoneNumber: {status: false, message: ""},
    cpf: {status: false, message: ""},
    password: {status: false, message: ""},
    confirmPassword: {status: false, message: ""}
  }
}

export const formatData = {
  cpf: (cpf: string): string => {
    return cpf.replaceAll(".", "").replace("-", "").replaceAll("_", "")
  },

  phoneNumber: (phoneNumber: string): string => {
    return phoneNumber.replace("(", "").replace(")", "").replaceAll("_", "").replace("-", "")
  }
}