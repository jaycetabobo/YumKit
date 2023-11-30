import { View , Text, StyleSheet} from "react-native";

export default function Home () {
    return(
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        height: '13%',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#C6C4C4',
        backgroundColor: '#F8F8F8'
    }
})