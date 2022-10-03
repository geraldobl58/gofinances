import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Ammount,
  LastTransaction
} from "./styles";

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Ammount>R$ 17.400,00</Ammount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}