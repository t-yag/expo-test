import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
// import {SafeAreaView} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

export default function TabLayout() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.background }}
      forceInset={{ bottom: "never" }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.tint,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.tabBarBackGround,
            borderTopColor: Colors.tabBarBackGround,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "ホーム",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "設定",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "settings" : "settings-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
