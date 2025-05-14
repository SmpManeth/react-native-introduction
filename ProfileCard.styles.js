import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({

  container:{
    backgroundColor: "white",
    elevation: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    padding: 20,
  },

  header:{
    backgroundColor: "#f8f8f8",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  social:{
    // flexDirection: "row",
    // justifyContent: "space-around",
    // padding: 10,
  },
  avatar:{
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  name:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description:{
    fontSize: 14,
    color: "#666",
  },
  texts:{
    flex: 1,
    paddingLeft:15,
  },


  })
  