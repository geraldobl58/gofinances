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

type CategoryProps = {
  name: string
  icon: string
}

export type TransactionCardPropsData = {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: CategoryProps
  date: string
}

type TransactionCardProps = {
  data: TransactionCardPropsData
}

export function TransactionCard({  data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Ammount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Ammount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}