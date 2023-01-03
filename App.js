import {View, Text, TouchableOpacity} from 'react-native';
import codePush from 'react-native-code-push';
function App() {
  function onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }
  return (
    <View>
      <Text>Hello</Text>
      <TouchableOpacity onPress={onButtonPress}>
        <Text>Check for updates</Text>
      </TouchableOpacity>
    </View>
  );
}
export default App;
