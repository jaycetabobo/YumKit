
import { View, StyleSheet, Text, Image } from "react-native";

export default function Favorites() {
    return(
        <View style={styles.container}>
            <View style={styles.bubbleTextContainer}>
                <View style={styles.bubbleimage}>
                    <Image
                        source={require("../../assets/bubble.png")}
                        style={styles.bubbleImage2}
                    />
                    <Image
                        source={require("../../assets/bubble.png")}
                        style={styles.bubbleImage2}
                    />
                    <Image
                        source={require("../../assets/bubble.png")}
                        style={styles.bubbleImage2}
                    />
                </View>
                
                <Text style={styles.bubbleText}>
                    No Favorites Listed
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white'
    },
    bubbleTextContainer:{
        alignItems: "center"
    },
    bubbleimage:{
        flexDirection: "row",
    },
    bubbleImage2:{
        borderRadius: 50,
        marginHorizontal: 16,
        width: 43,
        height: 40
    },
    bubbleText:{
        marginTop: 12,
        fontFamily: 'glacialindibold',
        fontSize: 20
    }

})