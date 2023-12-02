import { View , Text, StyleSheet, Image, ScrollView, ImageBackground} from "react-native";

export default function Home () {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.TextContainer}>
                <Text style={styles.Text}>
                    Your Course Matter!!
                </Text>
            </View>
            <Image
                source={require("../../assets/bannerimage.png")}
                style={styles.bannerImage}
            />
            <View style={styles.bannerImage2}>
                <ImageBackground
                    source={require("../../assets/bannerimage2.png")}
                >
                    <Text style={styles.bannerText}>
                        Explore & Surf
                    </Text>
                </ImageBackground>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    TextContainer:{
        alignItems: "center",
    },
    Text:{
        fontFamily: 'glacialindibold',
        fontSize: 30,
        marginTop: 40
    },
    bannerImage:{
        width: 'auto',
        marginTop: 20
    },
    bannerImage2:{
        alignItems: "center",
        width: 'auto',
        marginTop: 30
    },
    bannerText:{
        paddingHorizontal:20,
        paddingVertical: 40,
        fontFamily: 'boorsok',
        fontSize: 30,
    }
    
})