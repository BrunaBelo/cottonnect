import ErrorObj from "../../interfaces/errorObj"

export function showErrors(err: ErrorObj[], newErrorObj: any) {
  err.forEach(
    (e: ErrorObj) => { 
      if(!newErrorObj[e.path as keyof typeof newErrorObj].status){
        newErrorObj[e.path as keyof typeof newErrorObj] = {status: true, message: e.message}
      }
    }
  )

  return newErrorObj
}

export async function validateForm(data: object, schema: any): Promise<boolean | ErrorObj[]> {
  const result = await schema.validate((data), { abortEarly: false })
    .then(() => {
      return true
    })
    .catch((err: any) => {
      return err.errors
    })

    return result
}

export function removeInputError(fieldsErrorsStatus: any, element: string) {
  fieldsErrorsStatus[element as keyof typeof fieldsErrorsStatus] = {status: false, message: ""}

  return fieldsErrorsStatus
}

export function changeInputValue(errors: object, e: any, changeElement: React.Dispatch<React.SetStateAction<string>>) {
  changeElement(e.target.value)
  if(e.target.value !== ""){
    removeInputError(errors, e.target.name)
  }
}