import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCardPropsData, TransactionCard } from "../../components/TransactionCard";

import { 
  Container, 
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from "./styles";

export interface DataListProps extends TransactionCardPropsData {
  id: string
}

export function Dashboard() {

  const data: DataListProps[] = [
    {
      id: '1', 
      type: 'positive',
      title: "Desenvolvimento Mobile",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign"
      },
      date: "13/04/2020"
    },
    {
      id: '2', 
      type: 'negative',
      title: "Pizza e Refri",
      amount: "R$ 99,90",
      category: {
        name: "Alimentação",
        icon: "coffee"
      },
      date: "13/04/2020"
    },
    {
      id: '3',
      type: 'negative',
      title: "Apartamento",
      amount: "R$ 2.800,00",
      category: {
        name: "Casa",
        icon: "shopping-bag"
      },
      date: "13/04/2020"
    }
  ]

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/22802518?v=4' }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>John Doe</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserContainer>
      </Header>

      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down" 
          title="Saídas"
          amount="R$ 2.559,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total" 
          title="Total"
          amount="R$ 17.400,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transactions>
    </Container>
  )
}