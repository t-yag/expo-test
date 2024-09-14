import { StyleSheet, View, Text } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { StyledText } from "@/components/StyledText";
import { Colors } from "@/constants/Colors";
import { type Href, Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, padding: 10 }}>
      <View style={styles.titleContainer}>
        <StyledText type="title">Welcome!</StyledText>
        <HelloWave />
      </View>
      <View style={{ margin: 20 }} />
      {[
        { path: "/animation", title: "AnimationPage" },
        { path: "/push", title: "PushNotificationPage" },
        { path: "/modal", title: "ModalWindow" },
      ].map((link) => (
        <Link
          key={link.title}
          style={{ marginVertical: 10 }}
          href={link.path as Href<string | object>}
          asChild
        >
          <Text style={{ fontSize: 18, color: "#0a7ea4" }}>{link.title}</Text>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
