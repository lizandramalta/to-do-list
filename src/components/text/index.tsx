import React from "react";
import { Text, TextProps } from "react-native";
import { textStyles } from "./styles";

interface CustomizedTextProps {
  weight?: "regular" | "bold";
}

export default function CustomizedText({
  children,
  style,
  weight = "regular",
  testID,
}: TextProps & CustomizedTextProps) {
  return (
    <Text style={[style, textStyles[weight]]} testID={testID}>
      {children}
    </Text>
  );
}
