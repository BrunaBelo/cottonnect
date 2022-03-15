import react from 'react'
import { Toolbar } from '@material-ui/core'
import LeftNavBar from '../../components/LeftNavBar'
import { Container, Main } from './styles'

export default function Explorer() {
  return (
    <Container>
      <LeftNavBar />
      <Main
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% -  240px)` } }}
      >
        <Toolbar />
      </Main>
    </Container>
  )
}

