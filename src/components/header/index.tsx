import { View } from "react-native";
import Logo from "../../assets/logo.svg";
import { headerStyles } from "./styles";

export function Header() {
  return (
    <View style={headerStyles.container}>
      <Logo />
    </View>
  );
}
