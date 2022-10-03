import { 
  Container, 
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon 
} from "./styles";

export function Dashboard() {
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
    </Container>
  )
}