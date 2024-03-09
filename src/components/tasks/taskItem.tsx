import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Task } from "../../@types/task";
import CheckIcon from "../../assets/check-icon.svg";
import TrashIcon from "../../assets/trash-icon.svg";
import { tasksStyles } from "./styles";
import CustomizedText from "../text";

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
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

  function renderDeleteButton() {
    return (
      <TouchableOpacity
        activeOpacity={100}
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
    <View style={tasksStyles.taskItemView}>
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
