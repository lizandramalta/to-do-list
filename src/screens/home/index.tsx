import { View } from "react-native";
import { Header } from "../../components/header";
import { homeStyles } from "./styles";
import { NewTaskInput } from "../../components/newTaskInput";
import { useState } from "react";
import { Task } from "../../@types/task";
import { Tasks } from "../../components/tasks";
import { randomUUID } from "expo-crypto";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function onAddTask(taskText: string) {
    setTasks((previousTask) => [
      ...previousTask,
      {
        done: true,
        id: randomUUID(),
        text: taskText,
      },
    ]);
  }
  return (
    <View style={homeStyles.container}>
      <Header />
      <NewTaskInput onAddTask={onAddTask} />
      <Tasks tasks={tasks} />
    </View>
  );
}
