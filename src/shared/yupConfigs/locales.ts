import { setLocale } from 'yup';

setLocale({
  string: {
    min: ({ min, path }) => ({ path,  message: `Deve ter no mínimo ${min} caracteres`}),
    max: ({ max, path }) => ({ path,  message: `Deve ter no máximo ${max} caracteres`}),
    email: ({ path }) => ({ path,  message: `Email inválido`})
  },
  mixed: {
    required: ({ path }) => ({ path, message: 'Campo obrigatório' }),
    oneOf: ({ path }) => ({ path, message: 'Senhas devem ser iguais' })
  }
});