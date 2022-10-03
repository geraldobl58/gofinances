import { 
  Container,
  Title,
  Ammount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from "./styles";

export function TransactionCard() {
  return (
    <Container>
      <Title>Mobile</Title>

      <Ammount>R$ 12.000,00</Ammount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  )
}