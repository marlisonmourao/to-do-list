import { TouchableOpacityProps } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
};

export function ButtonAdd({ icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
    </Container>
  );
}
