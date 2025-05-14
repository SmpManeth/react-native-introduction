import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.styles";
import { View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 , justifyContent:"center"}}>
        <ProfileCard></ProfileCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
