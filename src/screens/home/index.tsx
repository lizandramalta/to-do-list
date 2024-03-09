import { randomUUID } from "expo-crypto";
import { useState } from "react";
import { View } from "react-native";
import { Task } from "../../@types/task";
import { Header } from "../../components/header";
import { NewTaskInput } from "../../components/newTaskInput";
import { Tasks } from "../../components/tasks";
import { homeStyles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function onAddTask(taskText: string) {
    setTasks((previousTask) => [
      ...previousTask,
      {
        done: false,
        id: randomUUID(),
        text: taskText,
      },
    ]);
  }

  function onCheckTask(task: Task) {
    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) return { ...task, done: !task.done };
      return item;
    });
    setTasks(updatedTasks);
  }

  function onDeleteTask(task: Task) {
    const updatedTasks = tasks.filter((item) => item.id !== task.id);
    setTasks(updatedTasks);
  }

  return (
    <View style={homeStyles.container}>
      <Header />
      <NewTaskInput onAddTask={onAddTask} />
      <Tasks
        tasks={tasks}
        onCheckTask={onCheckTask}
        onDeleteTask={onDeleteTask}
      />
    </View>
  );
}
