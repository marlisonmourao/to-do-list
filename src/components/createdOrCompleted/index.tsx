import { 
  Container, 
  Title, Wrapped, 
  Number,
  ButtonTypeStyleProps 
} from "./styles";

type Props = {
  title: string;
  number: number;
  type: ButtonTypeStyleProps;
};

export function CreatedOrCompleted({ title, number, type }: Props) {
  return (
    <Container>
      <Title type={type}> {title} </Title>

      <Wrapped>
        <Number>{number}</Number>
      </Wrapped>
    </Container>
  );
}
