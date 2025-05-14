import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.styles";
import { View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 , backgroundColor:"red"}}>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
