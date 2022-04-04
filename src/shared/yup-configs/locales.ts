import { setLocale } from 'yup';

setLocale({
  string: {
    min: ({ min, path }) => ({ path,  message: `Deve ter no mínimo ${min} caracteres`}),
    max: ({ max, path }) => ({ path,  message: `Deve ter no máximo ${max} caracteres`}),
    email: ({ path }) => ({ path,  message: `Email inválido`})
  },
  date: {
    min: ({ min, path }) => ({ path, message: `Fechamento mínimo do leilão é hoje` }),
  },
  array: {
    min: ({ min, path }) => ({ path, message: `Selecionar no mínimo 1 elemento` }),
  },
  mixed: {
    required: ({ path }) => ({ path, message: 'Campo obrigatório' }),
    oneOf: ({ path }) => ({ path, message: 'Senhas devem ser iguais' }),
  }
});