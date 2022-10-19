import { useEffect, useState } from "react";
import { FlatList, Alert, Keyboard } from "react-native";
import { Container, Form, Wrapped, ContainerList, Separator } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { ButtonAdd } from "@components/ButtonAdd";
import { CreatedOrCompleted } from "@components/createdOrCompleted";
import { TaskCard } from "@components/TaskCard";
import { ListEmpty } from "@components/ListEmpty";

import { taskCreate } from "@storage/task/taskCreate";
import { taskGetAll } from "@storage/task/taskGetAll";
import { taskRemove } from "@storage/task/taskRemove";

export function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [count, setCount] = useState<number>(0);

  async function handleNewTask() {
    if (newTask.trim().length === 0) {
      return Alert.alert("Nova Tarefa", "Digite uma nova tarefa");
    }

    await taskCreate(newTask);
    setNewTask("");
    Keyboard.dismiss();
  }

  async function removeTask(item: string) {
    if (count !== 0) {
      setCount(count - 1);
    }
    await taskRemove(item)
  }

  function handleRemoveTask(item: string) {
    Alert.alert("Remover", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        onPress: () => removeTask(item),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  async function fetchTasks() {
    const data = await taskGetAll();
    setTask(data);
  }

  useEffect(() => {
    fetchTasks();
  }, [task]);

  return (
    <Container>
      <Header />

      <Form>
        <Input
          onChangeText={setNewTask}
          value={newTask}
          onSubmitEditing={handleNewTask}
        />
        <ButtonAdd onPress={handleNewTask} icon="plus-circle" />
      </Form>

      <Wrapped>
        <CreatedOrCompleted
          title="Criadas"
          number={task.length}
          type="Created"
        />

        <CreatedOrCompleted
          title="Concluídas"
          number={count}
          type="Completed"
        />
      </Wrapped>

      {task.length === 0 && <Separator />}

      <ContainerList>
        <FlatList
          data={task}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TaskCard
              title={item}
              setCount={setCount}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 250 }]}
        />
      </ContainerList>
    </Container>
  );
}
