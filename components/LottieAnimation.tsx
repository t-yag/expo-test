import React, { useEffect, useRef } from "react";
import { View, Platform, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

let animationRef: { goToAndStop: (arg0: number, arg1: boolean) => void; play: () => void; } | null = null;

export function startAnimation() {
  if (Platform.OS === "web") {
    // Web用のアニメーション制御
    animationRef?.goToAndStop(0, true);
  }
  animationRef?.play();
}

export type LottieAnimationProps = {
  lottieJson: any;
};

export function LottieAnimation({ lottieJson }: LottieAnimationProps) {
  const localAnimationRef = useRef(null);
  useEffect(() => {
    animationRef = localAnimationRef.current;
  }, [localAnimationRef]);
  const LottieWeb = Platform.OS === "web" ? require("lottie-react").default : null;
  const { width: screenWidth } = Dimensions.get('window'); // 画面の横幅

  // @ts-ignore
  return (
    <View
      style={{
        position: "absolute",
        left: screenWidth / 2,
        top: screenWidth / 2,
        transform: [{ translateX: -screenWidth/2 }, { translateY: Platform.select({ web: -screenWidth/2, default: 0 })}],
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      {Platform.OS === 'web' ? (
        <LottieWeb
          lottieRef={localAnimationRef}
          animationData={lottieJson}
          style={{ width: screenWidth, height: screenWidth }}
          loop={false}
          autoplay={false}
        />
      ) : (
        <LottieView
          ref={localAnimationRef}
          source={lottieJson}
          style={{ width: screenWidth, height: screenWidth }}
          loop={false}
          onAnimationFinish={() => {
            // @ts-ignore
            localAnimationRef.current?.reset()
          }}
        />
      )}
    </View>
  );
}