import { View , Text, StyleSheet, Image, ScrollView, ImageBackground, SafeAreaView} from "react-native";
import Carousel from "../../components/Carousel";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home () {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.TextContainer}>
                <Text style={styles.Text}>
                    Your Course Matter!!
                </Text>
            </View>
            <Image
                source={require("../../assets/course.jpg")}
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
            <SafeAreaView>
				<Carousel />
			</SafeAreaView>
            <View style={styles.schoolText}>
                <Text style={styles.schoolTextDesign2}>
                    School
                </Text>
                <TouchableOpacity>
                    <Text style={styles.schoolTextDesign}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.schoolContentScroll} horizontal={true}>
                <View style={styles.schoolContent}>
                    <ImageBackground
                        source={require("../../assets/ustp.jpg")}
                        style={styles.schoolContentImageBG}
                    >
                        <Image
                            source={require("../../assets/ustplogo.png")}
                            style={styles.schoolContentUnderImageBG}
                        />
                    </ImageBackground>
                    <View style={styles.schoolContentText}>
                        <Text style={styles.schoolContentText2}>
                            USTP
                        </Text>
                    </View>
                </View>
            </ScrollView>
             <View style={styles.schoolText}>
                <Text style={styles.schoolTextDesign2}>
                    General Subjects
                </Text>
                <TouchableOpacity>
                    <Text style={styles.schoolTextDesign}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.schoolContentScroll} horizontal={true}>
                <View style={styles.schoolContent}>
                    <Image
                        source={require("../../assets/programming.jpg")}
                        style={styles.generalSubjectImage}
                    />
                    <View style={styles.schoolContentText}>
                        <Text style={styles.schoolContentText2}>
                            USTP
                        </Text>
                    </View>
                </View>
                
            </ScrollView>






            <View style={styles.bottomSpace}>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    TextContainer:{
        alignItems: "center",
    },
    Text:{
        fontFamily: 'glacialindibold',
        fontSize: 30,
        marginTop: 30
    },
    bannerImage:{
        width: 'auto',
        height: 247,
        marginTop: 20
    },
    bannerImage2:{
        alignItems: "center",
        width: 'auto',
        marginTop: 20,
        marginBottom: 5
    },
    bannerText:{
        paddingHorizontal:20,
        paddingVertical: 40,
        fontFamily: 'boorsok',
        fontSize: 30,
    },
    schoolText:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 20,
    },
    schoolTextDesign:{
        borderBottomWidth: 1,
        fontFamily: 'glacialindi',
        fontSize: 15
    },
    schoolTextDesign2:{
        fontFamily: 'glacialindibold',
        fontSize: 18
    },
    schoolContentScroll:{
        flexDirection: "row"
    },
    schoolContent:{
        borderWidth: 1,
        borderColor: 'black',
        height: 196,
        width: 166,
        borderRadius: 10,
        marginHorizontal: 10
    },
    schoolContentImageBG:{
        margin: 7.5,
        width: 149.4,
        height: 133.219,
    },
    schoolContentUnderImageBG:{
        borderRadius: 100,
        width: 48.291,
        height: 50.531
    },
    schoolContentText:{
        flex: 1,
        alignItems: "center"
    },
    schoolContentText2:{
        fontFamily: 'boorsok',
        fontSize: 30
    },
    generalSubjectImage:{
        height: 69,
        width: 'auto'
    },


    bottomSpace:{
        marginVertical: 60
    }
    
})