import { 
  Container,
  Title,
  Ammount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
  TransactionList
} from "./styles";

type CategoryProps = {
  name: string
  icon: string
}

type CategoryData = {
  title: string
  amount: string
  category: CategoryProps
  date: string
}

type TransactionCardProps = {
  data: CategoryData
}

export function TransactionCard({  data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Ammount>{data.amount}</Ammount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}