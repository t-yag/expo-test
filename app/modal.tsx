import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";
import { router } from "expo-router";
import { StyledText } from "@/components/StyledText";
import Button from "@/components/Button";

export default function ModalScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, padding: 10 }}>
      <View style={styles.titleContainer}>
        <StyledText type="title">Modal window</StyledText>
      </View>
      <StyledText>This is modal window!</StyledText>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => router.back()} title="Close" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
