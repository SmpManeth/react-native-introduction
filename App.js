import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.styles";
import { View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={ styles.box1  }></View>
        <View style={ styles.box2  }></View>
        <View style={ styles.box3  }></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
