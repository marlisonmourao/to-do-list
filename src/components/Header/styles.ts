import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;
