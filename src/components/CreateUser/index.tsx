import React from 'react';
import FormInfoAddress from './FormInfoAddress';
import FormPersonalInformation from './FormPersonalInformation';
import StatusProgressBar from './StatusProgressBar';
import { Container } from './styles';

const CreateUser: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar/>
      <FormInfoAddress />
      <FormPersonalInformation/>
    </Container>
  );
};

export default CreateUser;
