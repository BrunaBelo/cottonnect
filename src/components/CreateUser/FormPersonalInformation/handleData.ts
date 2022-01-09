// Metodo para tratar e formatar as informacoes inputadas pelo usuario
export function handleDataStep1(
  name: string, 
  email: string, 
  phone: string, 
  cpf: string, 
  password: string, 
  confirmPassword: string, 
  moreInfo: string) {
  return {
    name,
    email,
    phone: phone.replace("(", "").replace(")", "").replaceAll("_", "").replace("-", ""),
    cpf: cpf.replaceAll(".", "").replace("-", "").replaceAll("_", ""),
    password,
    confirmPassword,
    moreInfo
  }
}

// Metodo para retornar um objeto default de forma que nenhuma informacao apresente erro
export function defaultErrorsStep1() {
  return {
    name: {status: false, message: ""},
    email: {status: false, message: ""},
    phone: {status: false, message: ""},
    cpf: {status: false, message: ""},
    password: {status: false, message: ""},
    confirmPassword: {status: false, message: ""}
  }
}

