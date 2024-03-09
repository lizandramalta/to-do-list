import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { newTaskInputStyles } from "./styles";
import { AddIcon } from "../../icons";

type NewTaskInputProps = {
  onAddTask: (task: string) => void;
};

export function NewTaskInput({ onAddTask }: NewTaskInputProps) {
  const [task, setTask] = useState("");
  const [inputOnFocus, isInputOnFocus] = useState(false);
  const [buttonOnHover, isButtonOnHover] = useState(false);

  function handleInputFocus() {
    isInputOnFocus(true);
  }

  function handleInputBlur() {
    isInputOnFocus(false);
  }

  function handleButtonPressIn() {
    isButtonOnHover(true);
  }

  function handleButtonPressOut() {
    isButtonOnHover(false);
  }

  function handleAddTask() {
    if (task !== "") {
      onAddTask(task);
      setTask("");
    }
  }

  function renderAddButton() {
    return (
      <TouchableOpacity
        style={[
          newTaskInputStyles.button,
          buttonOnHover && newTaskInputStyles.buttonOnHover,
        ]}
        activeOpacity={100}
        onPressIn={handleButtonPressIn}
        onPressOut={handleButtonPressOut}
        onPress={handleAddTask}
      >
        <AddIcon />
      </TouchableOpacity>
    );
  }

  return (
    <View style={newTaskInputStyles.container}>
      <View style={newTaskInputStyles.barView}>
        <TextInput
          style={[
            newTaskInputStyles.input,
            inputOnFocus && newTaskInputStyles.inputOnFocus,
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={setTask}
          value={task}
        ></TextInput>
        {renderAddButton()}
      </View>
    </View>
  );
}
