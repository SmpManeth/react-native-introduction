import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export function AgeCounter(){

    const [age, setAge] = useState(30);


    function increaseAge(){
       setAge((oldAge) => oldAge + 1);
    }

    return<>
    <TouchableOpacity style={{ backgroundColor:"#00A2FF" }}>
        <Text style={{fontSize: 20}} onPress={increaseAge}>Increase age </Text>
    </TouchableOpacity>
    <Text style={{fontSize: 20}}>Ages: {age}</Text>
    </>;
}