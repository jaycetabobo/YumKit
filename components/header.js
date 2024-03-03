import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import * as Linking from 'expo-linking';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default Header = ({ navigation }) => {
    return (
        <View style={style.header}>
            <View style={style.imageView}>
                <TouchableOpacity onPress={() => navigation.navigate('specificrecipe')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={style.textContainer}>
                <Text style={style.text}>
                    YUMKIT
                </Text>
                <Text style={style.text2}>
                    Make Cooking Easier
                </Text>
            </View>
            <View style={style.imageView}>
                <Menu>
                    <MenuTrigger>
                        <Image
                            source={require("../assets/yumkit-favicon-color.png")}
                            style={style.image}
                        />
                    </MenuTrigger>
                    <MenuOptions style={{ height: "auto", padding: 20 }}>
                        <MenuOption onSelect={() => alert(`Delete`)} >
                            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Delete</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>

            </View>
        </View>
    );
}

const style = StyleSheet.create({
    header: {
        height: '7.5%',
        width: '100%',
        backgroundColor: '#D3D3D3',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    textContainer: {
        alignItems: "center",
        justifyContent: 'center',
        flex: 8,
    },
    text: {
        fontWeight: "bold",
        fontSize: 30,
        letterSpacing: 3,
    },
    text2: {
        fontSize: 15,
    },
    image: {
        height: 45,
        width: 45,
        backgroundColor: "white",
        borderRadius: 50,
    },
    imageView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: "center",
    },
})