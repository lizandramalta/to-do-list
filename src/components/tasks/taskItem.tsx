import React, { useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { Task } from "../../@types/task";
import { CheckIcon, TrashIcon } from "../../icons";
import CustomizedText from "../text";
import { tasksStyles } from "./styles";

type TaskItemProps = {
  task: Task;
  tasks: Task[];
  onCheckTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

const ARRAY_LAST_INDEX = 1;

export function TaskItem({
  task,
  tasks,
  onCheckTask,
  onDeleteTask,
}: TaskItemProps) {
  const [deleteButtonOnHover, setDeleteButtonOnHover] = useState(false);
  const [checkButtonOnHover, setCheckButtonOnHover] = useState(false);

  function handleDeleteButtonPressIn() {
    setDeleteButtonOnHover(true);
  }

  function handleDeleteButtonPressOut() {
    setDeleteButtonOnHover(false);
  }

  function handleCheckButtonPressIn() {
    setCheckButtonOnHover(true);
  }

  function handleCheckButtonPressOut() {
    setCheckButtonOnHover(false);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleCheckTask() {
    onCheckTask(task);
  }

  function isTaskLastItem() {
    return task.id === tasks[tasks.length - ARRAY_LAST_INDEX].id;
  }

  function renderDeleteButton() {
    return (
      <TouchableOpacity
        activeOpacity={100}
        onPress={handleDeleteTask}
        onPressIn={handleDeleteButtonPressIn}
        onPressOut={handleDeleteButtonPressOut}
        style={deleteButtonOnHover && tasksStyles.deleteButtonOnHover}
      >
        <TrashIcon
          style={
            deleteButtonOnHover
              ? tasksStyles.deleteButtonOnHoverIcon
              : tasksStyles.deleteButtonIcon
          }
        />
      </TouchableOpacity>
    );
  }

  function renderCheckButton(taskDone: boolean) {
    const stylesOnHover = taskDone
      ? {
          ...tasksStyles.checkButtonDoneTaskOnHover,
        }
      : {
          ...tasksStyles.checkButtonOnHover,
        };
    return (
      <TouchableOpacity
        onPress={handleCheckTask}
        onPressIn={handleCheckButtonPressIn}
        onPressOut={handleCheckButtonPressOut}
        style={[
          tasksStyles.checkButton,
          taskDone && tasksStyles.checkButtonDoneTask,
          checkButtonOnHover && stylesOnHover,
        ]}
        activeOpacity={100}
      >
        {taskDone && <CheckIcon />}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[
        tasksStyles.taskItemView,
        isTaskLastItem() &&
          Platform.OS === "android" &&
          tasksStyles.taskLastItem,
      ]}
    >
      {renderCheckButton(task.done)}
      <CustomizedText
        style={[
          tasksStyles.taskItemText,
          task.done && tasksStyles.taskItemTextDone,
        ]}
      >
        {task.text}
      </CustomizedText>
      {renderDeleteButton()}
    </View>
  );
}
