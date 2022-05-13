import react from "react";
import Navbar from "../../components/navbar";
import { Container, Main, CardInfo } from "./styles";

export default function About() {
  return(
    <Container>
      <Navbar/>
      <Main>
        <CardInfo>
          <h2>O que é o Cottonnect?</h2>
          <p>
            Cottonnect é uma plataforma que facilita e estimula doações de objetos entre usuários de uma mesma cidade,
            gratificando o doador com moedinhas digitais, que são chamadas flocos de algodão.
          </p>
          <p>
            Os flocos de algodão simbolizam o ato de gratidão ao receber uma doação, e é também de onde deriva o nome da aplicação,
            originado da junção das palavras Cotton (Algodão) e Connect (Conectar), trazendo o significado da aplicação
            ser uma comunidade de doações que une os indivíduos e os conecta pelos flocos de algodão, pois é por meio deles que
            as doações são possíveis.
          </p>
          <p>
            As doações são adquiridas por um formato de leilão às cegas, onde, você não conseguirá ver as gratificações (lances)
            dos outros participantes, então você pode dar uma gratificação em uma doação e no final do leilão o sistema irá
            definir o ganhador, que será o participante que deu a maior gratificação.
          </p>
          <p>
            A plataforma surgiu da com a justificativa principal a crescente evidência do impacto causado ao meio ambiente,
            através do ato de consumir. Desta forma, a intenção é estimular nos indivíduos de diferentes
            comunidades uma relação mais ampla de troca de produtos, fomentando a concepção do consumo consciente a fim
            de contribuir com a redução da degradação gradual do meio ambiente. 💚
          </p>
        </CardInfo>

        <CardInfo>
          <h2>Como me cadastrar?</h2>
          <p><b>1. </b> Crie sua conta com todas suas informações pessoais. Uma dica é você preencher o campo de informações
          adicionais, com algumas informações extras. Esse campo ficará disponível quando você ganhar uma doação e assim
          o doador poderá entrar em contato mais facilmente.</p>
          <p><b>2. </b> Adicione a cidade em que você está para que o sistema busque doações próximas a você.</p>
          <p>
            <b>3. </b>
            Confirme seu número de celular através de um <b>SMS</b> que será enviado
            para o número que você informou no cadastro.
          </p>
          <p><b>4. </b> Acesse seu <b>email</b>, clique no link enviado e confirme sua conta.</p>
          <p>
            <b>* </b>
            É muito importante que você conclua os passos <b>2</b> e <b>3</b>.
            Só assim você conseguirá doar e receber doações. Fazemos
            isso para manter nosso sistema mais seguro para você e também evitar fraudes. 😉
          </p>
        </CardInfo>

        <CardInfo>
          <h2>Como faço para doar?</h2>
          <p>Para doar você precisa criar um leilão, clicando na aba "Doar", e então precisará preencher as
            informações da doação e definir a data do fechamento do leilão.
            A data de fechamento é o dia em que o sistema irá sortear o ganhador do seu leilão, o qual estará apto para receber
            a doação. Os leilões sempre são fechados às 00:00 do dia escolhido por você.
          </p>
        </CardInfo>

        <CardInfo>
          <h2>Como faço para ganhar uma doação?</h2>
          <p>Para ganhar uma doação você precisa dar uma gratificação em forma de flocos de algodão. É importante você ter moedinhas
            suficientes para poder dar o valor informado, pois quando você ganhar o leilão, para receber a doação terá que transferir
            o valor da sua gratificação ao doador.
          </p>
          <p>Quando o leilão em que você deu uma gratificação fechar e você for o ganhador, você será notificado via email, e
            também poderá vê-lo na aba "Meus recebidos". Lá poderá visualizar os meios para entrar em contato
            com o doador e combinar um dia e local para poder ver a doação.
          </p>
          <p>
            Ao ver o objeto doado e quiser ficar com ele, você precisa acessar a aba de "Meus recebidos", encontrar o leilão desejado
            e clicar em aceitar doação, fazendo isso as moedinhas serão transferidas da sua conta para a conta do doador.
          </p>
          <p>
            Caso você decida não ficar com o objeto doado, você deve acessar a aba de "Meus recebidos", encontrar o leilão desejado
            e clicar em rejeitar a doação. É muito importante você sinalizar isso, pois assim que você rejeita uma
            doação outro ganhador será gerado para aquele leilão.
          </p>
        </CardInfo>
      </Main>
    </Container>
  )
}

