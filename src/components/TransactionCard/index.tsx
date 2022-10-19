import { categories } from "../../utils/categories";
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

export type TransactionCardPropsData = {
  type: 'positive' | 'negative'
  name: string
  amount: string
  category: string
  date: string
}

type TransactionCardProps = {
  data: TransactionCardPropsData
}

export function TransactionCard({  data }: TransactionCardProps) {
  const category = categories.filter(item => item.key === data.category)[0]

  return (
    <Container>
      <Title>{data.name}</Title>

      <Ammount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Ammount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}