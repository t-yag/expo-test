import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

export default function Button(props: {
  onPress: any;
  title?: string | undefined;
}) {
  const { onPress, title = "Save" } = props;
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#7289da",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
