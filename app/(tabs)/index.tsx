import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { StyledText } from '@/components/StyledText';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <StyledText type="title">Welcome!</StyledText>
          <HelloWave />
        </View>
        <View style={styles.stepContainer}>
          <StyledText type="subtitle">Router</StyledText>
          <Link href="/animation" asChild>
            <Text style={{ color: '#0a7ea4' }}>
              AnimationPage
            </Text>
          </Link>
        </View>
      </SafeAreaView>
    </View>
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
});
