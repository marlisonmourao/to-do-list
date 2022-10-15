import { Container, Icon, Title, SubTitle } from "./styles";

export function ListEmpty() {
  return (
    <Container>
      <Icon name="clipboard-list" />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <SubTitle>Crie tarefas e organize seus itens a fazer</SubTitle>
    </Container>
  );
}
