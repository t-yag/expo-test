import {StyleSheet, View} from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import { StyledText } from '@/components/StyledText';

export default function TabTwoScreen() {
  return (
    <>
      <View style={styles.titleContainer}>
        <StyledText type="title">Explore</StyledText>
      </View>
      <StyledText>This app includes example code to help you get started.</StyledText>
      <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
        <StyledText type="link">Learn more</StyledText>
      </ExternalLink>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
