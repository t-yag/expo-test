Node.jsのバージョンはメジャー偶数stableが良さそうで、expoでは2024/09時点で20系が安定.

```bash
mise l nodejs@20.16.0
npx create-expo-app@latest

mv expo-test/* .
mv expo-test/.gitignore .
rmdir expo-test
rm package-lock.json
yarn
```
