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