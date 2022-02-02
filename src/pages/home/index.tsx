import react from 'react'
import Navbar from '../../components/Navbar'
import { Main, Container, TextInfo, HomeImage, Image } from './styles'

export default function Home() {
  return(
    <Main>
      <Navbar/>
      <Container>
        <TextInfo>
          <h1>Doe e ganhe!</h1>
          <p>Com a gente você doa e em troca ganha flocos de algodão, que poderam ser usados para
             trocar por outras doações na plataforma!<a> Saiba mais!</a></p>
          <button>Cadastre-se</button>
        </TextInfo>
        <HomeImage>
          <Image src="/images/main_image_home.png"/>
        </HomeImage>
      </Container>
    </Main>
  )
}
