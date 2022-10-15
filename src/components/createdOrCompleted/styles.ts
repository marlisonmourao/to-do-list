import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "Created" | "Completed";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};

    color: ${type === "Created" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};

    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Wrapped = styled.View`
  width: 25px;
  height: 19px;
  border-radius: 8px;
  margin-left: 5px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_200};
  `}
`;
