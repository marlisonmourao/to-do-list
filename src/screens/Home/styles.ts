import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;

  margin-top: 45px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Wrapped = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 33px;
`;

export const ContainerList = styled.View`
  margin-top: 20px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 21px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
