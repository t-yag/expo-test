import { useState, useEffect, useRef } from 'react';
import { View, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import {StyledText} from "@/components/StyledText";
import {Colors} from "@/constants/Colors";
import Button from "@/components/Button";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function PushScreen() {
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.current &&
      Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <StyledText>Webでは動作しないページです！</StyledText>
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Button
        title="2秒後に通知"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <StyledText>Title: {notification && notification.request.content.title} </StyledText>
        <StyledText>Body: {notification && notification.request.content.body}</StyledText>
        <StyledText>Data: {notification && JSON.stringify(notification.request.content.data)}</StyledText>
      </View>
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "通知タイトル🐬",
      body: '通知内容🦄',
      data: { data: 'goes here', test: { test1: 'more data' } },
    },
    trigger: { seconds: 2 },
  });
}