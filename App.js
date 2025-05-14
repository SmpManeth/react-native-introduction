import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.styles";
import { View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
        <View style={{ backgroundColor: "blue", flex: 1 }}>
          <View style={{ backgroundColor: "yellow", flex: 2 }}></View>
          <View style={{ backgroundColor: "pink", flex: 3 }}></View>
        </View>
        <View style={{ backgroundColor: "green", flex: 3 }}></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
