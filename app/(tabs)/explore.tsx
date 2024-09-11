import {StyleSheet, View} from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import { StyledText } from '@/components/StyledText';
import {Colors} from "@/constants/Colors";

export default function TabTwoScreen() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View style={styles.titleContainer}>
        <StyledText type="title">Explore</StyledText>
      </View>
      <StyledText>This app includes example code to help you get started.</StyledText>
      <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
        <StyledText type="link">Learn more</StyledText>
      </ExternalLink>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
