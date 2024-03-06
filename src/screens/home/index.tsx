import { View } from "react-native";
import { Header } from "../../components/header";
import { homeStyles } from "./styles";
import { NewTaskInput } from "../../components/newTaskInput";

export function Home() {
  return (
    <View style={homeStyles.container}>
      <Header />
      <NewTaskInput />
    </View>
  );
}
