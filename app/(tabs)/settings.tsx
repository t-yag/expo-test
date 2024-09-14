import {StyleSheet, TextInput, View} from 'react-native';
import { StyledText } from '@/components/StyledText';
import {Colors} from "@/constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from "react";
import Button from "@/components/Button";

export default function SettingsScreen(this: any) {
  const [inputUserName, setInputUserName] = useState<string>('');
  const [userName, setUserName] = useState<string | null>(null);
  useEffect(() => {
    (async() => {
      setUserName(await AsyncStorage.getItem('userName'))
    })()
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Colors.background, padding: 10}}>
      <View style={styles.titleContainer}>
        <StyledText type="title">Settings</StyledText>
      </View>
      <View style={{margin: 10}} />
      <StyledText>UserName: {userName}</StyledText>
      <TextInput
        ref={input => { this.textInput = input }}
        style={styles.inputs}
        placeholder='ここに文字を入力してください'
        value={inputUserName}
        onChangeText={(text) => setInputUserName(text)}
        clearButtonMode="always"
      />
      <View style={{ alignItems: "center"}}>
        <Button onPress={async () => {
          await AsyncStorage.setItem('userName', inputUserName)
          setUserName(inputUserName)
          this.textInput.clear()
        }} title="UserNameを更新" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  inputs: {
    margin: 50,
    padding: 5,
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
  },
});
