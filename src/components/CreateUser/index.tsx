import React, { useState } from 'react';
import FormAddress from './FormAddress';
import FormPhone from './FormPhone';
import FormPersonalInformation from './FormPersonalInformation';
import FormSuccess from './Success';
import { Container, ButtonNavigation, SubContainer } from './styles';

import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { IconButton, Step, StepLabel, Stepper } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

export default function CreateUser () {
  return (
    <Container>
      <SubContainer>
        <FormikStepper 
          initialValues = {{
            name: '',
            email: '',
            phone: '',
            cpf: '',
            password: '',
            additionalInfs: '',
            state: '',
            city: '',
          }}
          onSubmit={async (values) => {
            console.log('values', values);
          }}
        >
          <FormikStep label="Cadastro">
            <FormPersonalInformation />
          </FormikStep>

          <FormikStep label="Endereço">
            <FormAddress />
          </FormikStep>

          <FormikStep label="Contato">
            <FormPhone />
          </FormikStep>

          <FormikStep label="Concluído">
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
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  
  return (
    <Formik 
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit = { async (values, helpers) => {
        if (step === 1) {
          await props.onSubmit(values, helpers);
        }
        setStep(s => s + 1);
    }} >

      <Form autoComplete="off">
        <Stepper alternativeLabel activeStep={step} className="stepper-style">
          {childrenArray.map((child, index) => (
            <Step key={child.props.label} completed={step > index - 1}>
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {currentChild}
        
        <ButtonNavigation>
          {step > 0 && step < 2 ? <IconButton className="button-navigation" onClick={() => setStep(s => s-1)}><NavigateBefore/></IconButton> : null }
          {step <= 1 ? <IconButton type="submit" className="button-navigation"> <NavigateNext/></IconButton> : null }
        </ButtonNavigation>
      </Form>
    </Formik>
  )
}
