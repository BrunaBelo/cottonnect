import { City } from "./city"

export interface UserData {
  name?: string,
  email?: string,
  cpf?: string,
  phoneNumber?: string,
  password?: string,
  additionalInformation?: string,
  stateId?: string,
  cityId?: string
  city?: City
}