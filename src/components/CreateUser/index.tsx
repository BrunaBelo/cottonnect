import React, { useState } from 'react';
import FormAddress from './FormAddress';
import FormPhone from './FormPhone';
import FormPersonalInformation from './FormPersonalInformation';
import FormSuccess from './Success';
import { Container, ButtonNavigation, SubContainer } from './styles';

import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import * as Yup from "yup";
import { IconButton } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

export default function CreateUser () {
  return (
    <Container>
      <SubContainer>
        <FormikStepper 
          initialValues = {{
            name: "",
            email: "",
            phone: "",
            personalNumber: "",
            password: "",
            additionalInf: "",
          }} onSubmit={() => {}}
        >
          <FormikStep label="1"
            validationSchema = {
              Yup.object().shape({
                name: Yup.string().required('Nome deve ser informado'),
                email: Yup.string().required('Email deve ser informado'),
                phone: Yup.string().required('Telefone deve ser informado'),
                personalNumber: Yup.string().required('CPF deve ser informado'),
                password: Yup.string().required('Senha deve ser informada'),
              })
            }>
            <FormPersonalInformation />
          </FormikStep>

          <FormikStep label="2"
            validationSchema = {
              Yup.object({
                state: Yup.string().required('Estado deve ser informado'),
                city: Yup.string().required('Cidade deve ser informada'),
              })
            }>
            <FormAddress />
          </FormikStep>

          <FormikStep label="3"
            validationSchema = {
              Yup.object({
                code: Yup.number(),
              })
            }>
            <FormPhone />
          </FormikStep>

          <FormikStep label="4">
            <FormSuccess />
          </FormikStep>

        </FormikStepper>
      </SubContainer>
    </Container>
  );
};
export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props } : FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step] as React.ReactElement<FormikStepProps>[];
  // const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  
  return (
    <Formik {...props} onSubmit = {async (values, helpers) => {
      if (isLastStep()) {
        await props.onSubmit(values, helpers);
        // setCompleted(true);
      } else {  
        setStep(s => s + 1);
      }
    }} >
      
      <Form autoComplete="off">
        {currentChild}
        
        <ButtonNavigation>
          {step > 0 && !isLastStep() ? <IconButton className="button-navigation" onClick={() => setStep(s => s-1)}><NavigateBefore/></IconButton> : null }
          {!isLastStep() ? <IconButton type="submit" className="button-navigation"> <NavigateNext/></IconButton> : null }
        </ButtonNavigation>
      </Form>
    </Formik>
  )
}
