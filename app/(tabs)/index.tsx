import { StyleSheet, Platform, SafeAreaView, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { StyledText } from '@/components/StyledText';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <StyledText type="title">Welcome!</StyledText>
        <HelloWave />
      </View>
      <View style={styles.stepContainer}>
        <StyledText type="subtitle">Step 1: Try it</StyledText>
        <StyledText>
          Edit <StyledText type="defaultSemiBold">app/(tabs)/index.tsx</StyledText> to see changes.
          Press{' '}
          <StyledText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </StyledText>{' '}
          to open developer tools.
        </StyledText>
      </View>
      <View style={styles.stepContainer}>
        <StyledText type="subtitle">Step 2: Explore</StyledText>
        <StyledText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </StyledText>
      </View>
      <View style={styles.stepContainer}>
        <StyledText type="subtitle">Step 3: Get a fresh start</StyledText>
        <StyledText>
          When you're ready, run{' '}
          <StyledText type="defaultSemiBold">npm run reset-project</StyledText> to get a fresh{' '}
          <StyledText type="defaultSemiBold">app</StyledText> directory. This will move the current{' '}
          <StyledText type="defaultSemiBold">app</StyledText> to{' '}
          <StyledText type="defaultSemiBold">app-example</StyledText>.
        </StyledText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
