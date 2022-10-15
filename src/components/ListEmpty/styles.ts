import styled, { css } from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GRAY_300,
}))``;

export const Title = styled.Text`
  margin-top: 16px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;
