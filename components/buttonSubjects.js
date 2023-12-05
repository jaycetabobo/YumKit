import { View,StyleSheet, Text, TouchableOpacity } from "react-native";


export default function ButtonSubjects ({text, onPress, disabled}) {
    return(
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={styles.container}>
                <Text style={styles.buttonText} >{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius: 50,
        backgroundColor: 'black',
        height: 25,
        width: 84,
        alignItems: "center",
        marginTop: 5
    },
    buttonText:{
        fontFamily: 'glacialindi',
        color: "white",
        marginVertical: 3
    }
})