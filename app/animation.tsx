import { View, Platform } from 'react-native';
import { Colors } from "@/constants/Colors";
import React from "react";
import freeConfettiPartyAnimation from'@/assets/lottie/free_confetti_party.json'
import * as Haptics from 'expo-haptics';
import Button from '@/components/Button'
import { LottieAnimation, startAnimation } from '@/components/LottieAnimation';

export default function AnimationScreen() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <LottieAnimation lottieJson={freeConfettiPartyAnimation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Clear!"
          onPress={() => {
            if (Platform.OS !== 'web') {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
            }
            startAnimation()
          }}
        />
      </View>
    </View>
  );
}