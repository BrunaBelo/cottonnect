export function defaultErrorsStep2() {
  return {
    city: {status: false, message: ""},
    state: {status: false, message: ""}
  }
}

export function handleDataAddress(city: string, state: string) {
  return {
    city, state
  }
}