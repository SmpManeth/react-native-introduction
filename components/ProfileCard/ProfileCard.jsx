import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { styles } from "../../ProfileCard.styles";

export function ProfileCard() {
  return (
    <View style={styles.container}>
      {/* Profile Card  */}
      <View style={styles.header}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          ></Image>
        </View>
        <View style={styles.texts}>
          <Text style={styles.name}>Codiku TheDev</Text>
          <Text style={styles.description}>Hi I'm a react native Developer</Text>
        </View>
      </View>

      {/* Socials  */}
      <View style={styles.social}></View>
    </View>
  );
}
