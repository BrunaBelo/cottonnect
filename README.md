# Cottonnect
CottonNect é um projeto que esta sendo desenvolvido como trabalho de conclusão de curso (TCC). É uma aplicação web que permite a doação de objetos entre usuários com a gratificação via moedas digitais, denomidas flocos de algodão, que simbolizão o ato de gratidão ao receber uma doação, de onde também deriva o nome da aplicação, em que é originado da junção das palavras Cotton (Algodão) e Connect (Conectar), trazendo o significado da aplicação ser uma comunidade de doações que uni os indivíduos e os conecta pelos flocos de algodão, pois é por meio deles que as doações são possíveis.

As doações são adquiridas por um formato de leilão as cegas, onde os usuários dão lances aos objetos e no final do leilão, o sistema irá definir o ganhador. A escolha do modelo de leilão se deu pela quantificação do valor que o objeto possui para o usuário que demostra interesse nele. Assim, segundo a análise do participante, ele irá definir o preço que julga mais justo para adquirir o produto e recompensar o doador sem a visualização dos lances dos adversários. Esta omissão evita influência na definição do valor do lance.

O projeto tem como justificativa principal a crescente evidência do impacto causado ao meio ambiente, originados das práticas sociais exercidas, como o ato de consumir. Desta forma, a intenção é estimular nos indivíduos de diferentes comunidades uma relação mais ampla de troca de produtos, fomentando a concepção do consumo consciente a fim de contribuir com a redução da degradção gradual do meio ambiente.

# Passos
- [Preparando o seu sistema operacional](#preparando-o-seu-sistema-operacional)
- [Configurando o seu repositório local](#configurando-o-seu-repositório-local)
- [Iniciar a aplicação](#iniciar-a-aplicação)
- [Usando a aplicação](#usando-a-aplicação)

## Preparando o seu sistema operacional
### Você precisára instalar as seguintes dependências: 
#### Instalar o gerenciador de pacotes Yarn (https://classic.yarnpkg.com/en/docs/install#debian-stable)

## Configurando o seu repositório local
### 1. Clonando o projeto
```bash
git clone git@github.com:BrunaBelo/cottonnect.git
cd api-cottonnect
```

Crie o arquivo das variáveis:

```bash
cp .env.exemple .env
```
E configure as variaveis de ambiente necessárias

### 2. Instalando as dependências
```bash
yarn install
```

### 3. Iniciando a aplicação
```bash
yarn start-dev
```

### 4. Usando a aplicação
```bash
  localhost:3000
```
