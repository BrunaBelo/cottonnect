import { ReactNode } from 'react';
import { Container, Header } from './styles';

interface HeaderModelProps {
  title: ReactNode;
  linkComponent: ReactNode;
}

const HeaderModel: React.FC<HeaderModelProps> = ({ title, linkComponent }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
      </Header>
    </Container>
  );
};

export default HeaderModel;
