import styled from 'styled-components';

export const Container = styled.div`
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0 0 0;
  color: var(--white);
  
  h1{
    margin: 0 0 0 1em;
    font-size: 25px;
  }

  .next-page{
    margin: 0 1.3em 0 0;
    color: white;
  }
`;
