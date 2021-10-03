import { IconButton } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { ReactNode } from 'react';
import { Container, Header } from './styles';

interface HeaderModelProps {
  title: ReactNode;
}

const HeaderModel: React.FC<HeaderModelProps> = ({ title }) => {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        <IconButton aria-label="nex-page" className="next-page">
          <ArrowForward/>
        </IconButton>
      </Header>
    </Container>
  );
};

export default HeaderModel;
