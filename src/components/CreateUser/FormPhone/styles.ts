import styled from 'styled-components';

export const Container = styled.div`
`;

export const InfoPhone = styled.h2`
  font-size: 17px;
  margin: 2em 0 0;
`;

export const CodeVerification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 6em 0 4em 0;

  .ReactInputVerificationCode__item{
    background-color: #BECEE7;
    border-radius: 15px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1em;
  margin: 1em 0;
`;

export const TitleButton = styled.div`
  margin: 0 0 0 6px;
  color: var(--title-text-color);
  font-size: 16px;
`;
