import { Text, View } from "react-native";
import { Profile } from "./components/Profile/Profile";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.styles";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Welcome to React Native!</Text>
        <View style={styles.square}>
          <Text style={styles.innerText}>Super !</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
