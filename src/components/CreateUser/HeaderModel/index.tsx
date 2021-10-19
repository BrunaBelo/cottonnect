import { IconButton } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
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
        <IconButton component={Link} to={`${linkComponent}`}>
          <ArrowForward/>
        </IconButton>
      </Header>
    </Container>
  );
};

export default HeaderModel;
