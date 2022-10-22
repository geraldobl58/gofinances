import { HistoryCard } from "../../components/HistoryCard";

import { 
  Container, 
  Header,
  Title
} from "./styles";

export function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <HistoryCard 
        color="green"
        title="Compras"
        amount="R$ 99,50"
      />
    </Container>
  )
}