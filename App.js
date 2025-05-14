import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./App.styles";
import { View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", padding: "20" , gap: 20}}
      >
        <ProfileCard firstName={"Maneth"} lastName={"Ovindu"} age={28} description={"I'm a react native Developer. I love Coding"} />
        <ProfileCard firstName={"Vinuth"} lastName={"Thejan"} age={24} description={"I'm a react native Developer. I love Coding"} />
        <ProfileCard firstName={"Thimath"} lastName={"Sethika"} age={20} description={"I'm a react native Developer. I love Coding"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
