import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);
  height: 100%;
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

export const ButtonNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1em;
  margin: 1em 0;

  .button-navigation{
    background-color: #5969F5;
    color: white;

    &:hover { 
      background-color: #ABB2EB;
      color: grey;
    }
  }
`;
