import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  width: 52px;
  height: 54px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};

  border-radius: 8px;
  margin-left: 6px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_100,
}))``;
