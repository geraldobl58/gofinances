import { useCallback, useEffect, useState } from "react";

import { useFocusEffect } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'

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
  const [data, setData] = useState<DataListProps[]>([])

  async function loadTransaction() {
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey)
    const transactions = response ? JSON.parse(response) : []

    const transactionsFormatted: DataListProps[] = transactions
      .map((item: DataListProps) => {
        const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })

          const date = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          }).format(new Date(item.date))
          
          return {
            id: item.id,
            name: item.name,
            amount,
            type: item.type,
            category: item.category,
            date
          }
      })

      setData(transactionsFormatted)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  useFocusEffect(useCallback(() => {
    loadTransaction()
  }, []))

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