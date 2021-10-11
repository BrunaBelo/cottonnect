import React from 'react';
import FormInfoAddress from './FormInfoAddress';
import FormInfoPhone from './FormInfoPhone';
import FormPersonalInformation from './FormPersonalInformation';
import FormSuccess from './FormSuccess';
import StatusProgressBar from './StatusProgressBar';
import { Container } from './styles';

const CreateUser: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar/>
      {/* <FormInfoAddress /> */}
      {/* <FormPersonalInformation/> */}
      {/* <FormInfoPhone/> */}
      <FormSuccess/>
    </Container>
  );
};

export default CreateUser;
