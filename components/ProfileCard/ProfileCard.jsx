import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { styles } from "../../ProfileCard.styles";

export function ProfileCard() {
  return (
    <View style={styles.container}>
      <Text>Codiku TheDev</Text>
      <Text>Hi I'm a react native Developer</Text>
    </View>
  );
}
