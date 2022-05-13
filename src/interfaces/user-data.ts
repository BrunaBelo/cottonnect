import { City } from "./city"

export interface UserData {
  id?: string,
  name?: string,
  email?: string,
  cpf?: string,
  phoneNumber?: string,
  password?: string,
  additionalInformation?: string,
  stateId?: string,
  isAllowed?: boolean,
  cottonFlakes?: number,
  cityId?: string
  city?: City
}