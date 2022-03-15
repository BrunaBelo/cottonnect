import styled from 'styled-components';

interface ScreenStyle {
  dark?: boolean
}

export const Main = styled.div`
  width: 100%;
  background-color: transparent;
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 80px;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginButton = styled.button<ScreenStyle>`
  background-color: ${(props) => props.dark ? 'rgba(0,0,0,.2)' : 'var(--primary)'};
  border-radius: 20px;
  padding: 10px 30px;
  color: white;
  box-shadow: rgba(0, 0, 0, .1) 0px 10px 15px;
  font-weight: 500;
  font-size: 14px;
  transition: .3s;
`

export const Options = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 50px;
`

export const PageOption = styled.button<ScreenStyle>`
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  background-color: transparent;
  transition: .5s;
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  color: ${(props) => props.dark ? 'white' : 'var(--text-blue-color)'};


  &:hover {
    border-bottom: 2px solid ${(props) => props.dark ? 'rgba(255,255,255,.75)' : 'var(--text-blue-color-hover)'};
    color: ${(props) => props.dark ? 'rgba(255,255,255,.75)' : 'var(--text-blue-color-hover)'};
  }
`

export const Login = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
