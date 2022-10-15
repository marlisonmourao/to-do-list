import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

type Props = {
  isChecked?: boolean;
};

export const Container = styled.View`
  width: 100%;
  padding: 12px;
  border: 1px solid;
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  ${({ theme, }) => css`
    background-color: ${theme.COLORS.GRAY_400};
  `}
`;

export const Title = styled.Text<Props>`
  flex: 1;
  margin: 0 15px;

  ${({ theme, isChecked }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    text-decoration: ${isChecked
      ? theme.LINE_THROUGH.line
      : theme.LINE_THROUGH.lines};
  `}
`;

export const ButtonConcluded = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export const ButtonRemove = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

export const IconCheck = styled(MaterialIcons).attrs<Props>(
  ({ theme, isChecked }) => ({
    size: 20,
    color: isChecked ? theme.COLORS.DANGER : theme.COLORS.BLUE,
  })
)`
  align-items: center;
  justify-content: center;
`;

export const IconRemove = styled(Ionicons).attrs<Props>(
  ({ theme, isChecked }) => ({
    size: 20,
    color: isChecked ? theme.COLORS.DANGER : theme.COLORS.BLUE,
  })
)`
  align-items: center;
  justify-content: center;
`;
