import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);
  height: 100%;

  .stepper-style{
    background-color: var(--primary);
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  width: 65%;
  border-radius: 15px;

  background-color: var(--white);
`;

export const FormHeader = styled.h1`
  margin: 1em 0 0 1em;
  font-size: 28px;
`;

export const StepperStyle = styled.div`
  background-color: red;
`;

export const ButtonNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1em;
  margin: 1em 2em 1em;

  .button-navigation {
    background-color: var(--button-navigation);
    color: white;

    &:hover { 
      background-color: var(--button-navigation2);
      color: grey;
    }
  }
`;
