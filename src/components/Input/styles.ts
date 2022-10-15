import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export interface InputProps {
  isFocused: boolean;
}

export const Container = styled(TextInput)<InputProps>`
  flex: 1;
  min-height: 54px;
  max-height: 54px;
  border: 1px solid;

  ${({ theme, isFocused }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border-color: ${isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_500};
  `}

  border-radius: 6px;
  padding: 16px;
`;
