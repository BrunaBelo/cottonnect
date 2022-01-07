import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: var(--primary);
  background-color: transparent;
  height: 4em;
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
  background-color: rgba(0,0,0,.2);
  border-width: 0;
  border-radius: 20px;
  padding: 10px 30px;
  color: white;
  box-shadow: rgba(0, 0, 0, .1) 0px 10px 15px;
  font-weight: 500;
  font-size: 14px;
  transition: .3s;
`
