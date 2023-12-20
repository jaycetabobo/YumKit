import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Coursecontent() {
  return (
    <View>
        <View style={{width: 375, alignItems: 'center'}}> 
        <ImageBackground source={require("../../assets/bannerimage2.png")}
        style={{width:270, height: 120, alignItems:'center', justifyContent: 'center'}}> 
        <Text style={{fontFamily:"glacialindibold", fontSize: 50}}>Java</Text>
        </ImageBackground>
        </View>
        <View style={{width:375, alignItems:'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{width:125, backgroundColor: "#D9D9D9", alignItems: 'center', padding: 12,
        borderRadius: 25}}>
                <Text>Add Favorites</Text>
            </TouchableOpacity>
        </View>
        <Image  style={{width:375, height: 180, alignItems:'center', justifyContent: 'center', backgroundColor: "black", marginTop: 20}}
        source={require("../../assets/java2.jpg")}>

        </Image>
        <ScrollView>
            <Text style={{width: 375, padding: 5, fontSize: 20}}>
            What is Java?
Java is a popular programming language, created in 1995.
It is owned by Oracle, and more than 3 billion devices run Java.
It is used for:</Text>
<View style={{ marginLeft: 20}}>
        <Text style={{fontSize: 20, fontFamily: "glacialindi"}}>
          - Mobile applications (specially Android apps)
        </Text>
        <Text style={{fontSize: 20, fontFamily: "glacialindi"}}>
          - Desktop applications
        </Text>
        <Text>
          - Web applications
        </Text>
        <Text style={{fontSize: 20, fontFamily: "glacialindi"}}>
          - Web servers and application servers
        </Text>
        <Text style={{fontSize: 20, fontFamily: "glacialindi"}}>
          - Games
        </Text>
        <Text style={{fontSize: 20, fontFamily: "glacialindi"}}>
          - Database connection
        </Text>
        <Text style={{fontSize: 20, fontFamily: "glacialindi"}}>
          - And much, much more!
        </Text>
      </View>

      <Text style={{fontSize: 20, fontFamily: "glacialindi"}}>
Why Use Java?
Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
It is one of the most popular programming language in the world
It has a large demand in the current job market
It is easy to learn and simple to use
It is open-source and free
It is secure, fast and powerful
It has a huge community support (tens of millions of developers)
Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs
As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa

            </Text>
        </ScrollView>
    </View>
  )
}
