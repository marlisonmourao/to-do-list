import React, { Dispatch, SetStateAction, useState } from "react";

import {
  Container,
  IconCheck,
  ButtonConcluded,
  ButtonRemove,
  Title,
  IconRemove,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  onRemove: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

export function TaskCard({ title, onRemove, setCount }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleIsChecked = (command: boolean) => {
    if (command) {
      setIsChecked(true);
      setCount((prevState) => prevState + 1);
    } else {
      setIsChecked(false);
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <Container>
      <ButtonConcluded 
        onPress={() => handleIsChecked(!isChecked)}
        activeOpacity={0.7}
      >
        <IconCheck
          name={isChecked ? "check-circle" : "radio-button-unchecked"}
        />
      </ButtonConcluded>

      <Title isChecked={isChecked}>{title}</Title>

      <ButtonRemove activeOpacity={0.7} onPress={onRemove}>
        <IconRemove 
          name="ios-trash-outline"
          isChecked={isChecked}
        />
      </ButtonRemove>
    </Container>
  );
}
