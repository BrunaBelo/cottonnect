import React from 'react';
import FormPersonalInformation from './FormPersonalInformation';
import StatusProgressBar from './StatusProgressBar';
import { Container } from './styles';

const CreateUser: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar/>
      <FormPersonalInformation/>
    </Container>
  );
};

export default CreateUser;
