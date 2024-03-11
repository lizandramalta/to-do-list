import { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { Task } from "../../@types/task";
import emptyView from "../../../assets/empty-view.png";
import CustomizedText from "../text";
import { tasksStyles } from "./styles";
import { TaskItem } from "./taskItem";

type TasksProps = {
  tasks: Task[];
  onCheckTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

export function Tasks({ tasks, onCheckTask, onDeleteTask }: TasksProps) {
  const [doneTasks, setDoneTasks] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.done).length;
    setDoneTasks(completedTasks);
  }, [tasks]);

  function renderEmptyView() {
    return (
      <View style={tasksStyles.emptyView}>
        <Image source={emptyView} style={tasksStyles.emptyViewImage} />
        <CustomizedText style={tasksStyles.emptyViewText} weight="bold">
          Você ainda não tem tarefas cadastradas
        </CustomizedText>
        <CustomizedText style={tasksStyles.emptyViewText}>
          Crie tarefas e organize seus itens a fazer
        </CustomizedText>
      </View>
    );
  }

  function renderCount(value: number) {
    return (
      <View style={tasksStyles.countView}>
        <CustomizedText style={tasksStyles.countText} weight="bold">
          {value}
        </CustomizedText>
      </View>
    );
  }

  function renderListHeader() {
    return (
      <>
        <View style={tasksStyles.tasksHeaderTextView}>
          <CustomizedText
            style={[tasksStyles.createdTasksText, tasksStyles.createdTasksText]}
            weight="bold"
          >
            Criadas
          </CustomizedText>
          {renderCount(tasks.length)}
        </View>
        <View style={tasksStyles.tasksHeaderTextView}>
          <CustomizedText
            style={[tasksStyles.createdTasksText, tasksStyles.doneTasksText]}
            weight="bold"
          >
            Concluídas
          </CustomizedText>
          {renderCount(doneTasks)}
        </View>
      </>
    );
  }

  return (
    <View style={tasksStyles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            tasks={tasks}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
          />
        )}
        contentContainerStyle={tasksStyles.tasksView}
        ListEmptyComponent={renderEmptyView}
        ListHeaderComponent={renderListHeader}
        ListHeaderComponentStyle={tasksStyles.tasksHeaderView}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets
        contentInset={{ bottom: 200 }}
      />
    </View>
  );
}
