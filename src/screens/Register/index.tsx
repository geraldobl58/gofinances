import { useState } from 'react'

import { Button } from '../../components/Form/Button'
import { CategorySelect } from '../../components/Form/CategorySelect'
import { Input } from '../../components/Form/Input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { Container, Header, Title, Form, Fields, TransactionsTypes } from './styles'

export function Register() {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome"
          />

          <Input 
            placeholder="Preço"
          />

          <TransactionsTypes>
            <TransactionTypeButton 
              type="up"
              title="Income"
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionsTypeSelect('up')}
            />
            <TransactionTypeButton 
              type="down"
              title="Outcome"
              isActive={transactionType === 'down'}
              onPress={() => handleTransactionsTypeSelect('down')}
            />
          </TransactionsTypes>

          <CategorySelect title="Categoria" />
        </Fields>

        <Button 
          title="Enviar"
        />
      </Form>
    </Container>
  )
}