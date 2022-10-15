import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
 
import { Container } from "./styles";

type Props = TextInputProps & {}

export function Input({...rest }: Props) {
  const [ isFocused, setIsFocused ] = useState(false);
  const { COLORS } = useTheme();

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }


  return <Container 
  placeholderTextColor={COLORS.GRAY_300} 
  isFocused={isFocused}
  onBlur={handleBlur}
  onFocus={handleFocus}
  placeholder="Adicione uma nova tarefa"
  {...rest} 
  />;
}
