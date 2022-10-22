import { Container, Title, Amount } from "./styles";

interface ResumeProps {
  color: string
  title: string
  amount: string
}

export function HistoryCard({ color, title, amount }: ResumeProps) {
  return (
    <Container color={color}>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
    </Container>
  )
}