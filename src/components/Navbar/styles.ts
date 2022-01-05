import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: var(--primary);
  background-color: white;
  height: 3em;
  display: flex;
  flex-direction: row;
`;

export const UserInfo = styled.div`
  background-color: transparent;
  width:15%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background-color: transparent;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginButton = styled.button`
  background-color: transparent;
  border-width: 0;
  color: black;
  font-weight: 500;
  font-size: 14px;
  transition: .3s;
  
  :hover{
    cursor: pointer;
    opacity: .7;
  }
`
