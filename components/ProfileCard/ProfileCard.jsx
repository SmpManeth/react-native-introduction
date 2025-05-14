import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { styles } from "../../ProfileCard.styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function ProfileCard() {
  return (
    <View style={styles.container}>
      {/* Profile Card  */}
      <View style={styles.header}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={styles.texts}>
          <Text style={styles.name}>Codiku TheDev</Text>
          <Text style={styles.description}>
            Hi I'm a react native Developer
          </Text>
        </View>
      </View>

      {/* Socials  */}
      <View style={styles.social}>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2"  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="linkedin" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
