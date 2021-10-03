import React from 'react';
import FormStep1 from './FormStep1';
import StatusProgressBar from './StatusProgressBar';
import { Container } from './styles';

const CreateUser: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar/>
      <FormStep1/>
    </Container>
  );
};

export default CreateUser;
