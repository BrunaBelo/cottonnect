import react, { useEffect, useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { Actions, CoinIcon, Container, Content, Header, StatusIndicator } from './styles'

interface AuctionStatus {
  open: string,
  waiting: string,
  success: string,
}

interface ButtonMessageByProfile {
  owner: {
    confirm: string,
    reject: string
  },
  receiver: {
    confirm: string,
    reject: string
  }
}

interface DonationCardProps {
  profile: string
}

export default function DonationCard({profile}: DonationCardProps) {

  const donationSuccessButtonText = "Ao clicar nesse botão, você confirma o recebimento do produto e transfere o valor do lance para o doador"
  const donationFailedButtonText = "Ao clicar nesse botão, você rejeita a doação"

  const statusColors: AuctionStatus = {
    "open": "#5829a7",
    "waiting": "#fbaf00",
    "success": "#43d375",
  }

  const statusTitle: AuctionStatus = {
    "open": "Aberto",
    "waiting": "Aguardando Troca",
    "success": "Concluído",
  }

  const buttonsMessage: ButtonMessageByProfile = {
    owner: {
      confirm: "Confirmar Entrega",
      reject: "Doação Rejeitada"
    },
    receiver: {
      confirm: "Confirmar Recebimento",
      reject: "Rejeitar Doação"
    }
  }

  const [status, setStatus] = useState("waiting" as keyof AuctionStatus)
  const [statusText, setStatusText] = useState("")
  const [buttonsText, setButtonsText] = useState({confirm: "", reject: ""})

  useEffect(() => {
    getStatusTitle()
    getButtonText()
  }, [statusText])

  const getStatusColor = (): string => {
    return statusColors[status]
  }

  const getStatusTitle = () => {
    setStatusText(statusTitle[status])
  }

  const getButtonText = () => {
    setButtonsText(buttonsMessage[profile as keyof ButtonMessageByProfile])
  }

  return(
    <Container>
      <Header>
        <h1>Nome da doação</h1>
        <div>
          <StatusIndicator backgroundColor={getStatusColor()}>
            <span>{statusText}</span>
            {
              status != "open" ?
              <>
                <span id="number-coin">10</span>
                <CoinIcon/>
              </>
              :
              <></>
            }

          </StatusIndicator>
        </div>
      </Header>
      <Content>
        <p>Descricao da doacao</p>
        {
          status == "waiting" ?
          <Actions>
            <Tooltip title={donationSuccessButtonText}>
              <button id="donation-success">{buttonsText.confirm}</button>
            </Tooltip>
            <Tooltip title={donationFailedButtonText}>
              <button id="donation-failed">{buttonsText.reject}</button>
            </Tooltip>
          </Actions>
          :
          <></>
        }
      </Content>
    </Container>
  )
}

