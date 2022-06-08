import react from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { Main, Container, TextInfo, HomeImage, Image } from './styles'

export default function Home() {
  return(
    <Main>
      <Navbar/>
      <Container>
        <TextInfo>
          <h1>Doe e ganhe!</h1>
          <p>Com o cottonnect você doa e em troca ganha flocos de algodão, que poderão ser usados para
             trocar por outras doações na plataforma!<a href='/sobre-nos'> Saiba mais!</a></p>
          <Link to="/create-account">
            <button>Cadastre-se</button>
          </Link>
        </TextInfo>
        <HomeImage>
          <Image src="/images/main_image_home.png"/>
        </HomeImage>
      </Container>
    </Main>
  )
}
