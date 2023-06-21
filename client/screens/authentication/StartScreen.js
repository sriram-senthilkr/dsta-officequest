import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from "react";
import LongButton from '../../components/LongButton';


export default function StartScreen({ navigation }) {

    return (
        <View style={styles.background}>
            <ImageBackground source={require('../../assets/bb.jpg')} style={styles.backgroundImage}/>
            <View style={styles.page}>
                <View style={styles.pageLogin}>

                    <View style={{alignItems: 'center', justifyContent: 'center', height: "100%"}}>
                        <Image 
                            style={{width: 200, height: 200}}
                            source={require('../../assets/office_quest_logo.png')}
                            resizeMode={'contain'}
                        />
                    </View>

                    
                </View>

                
            </View>
            <View style={{width: "100%", height: "15%", alignItems: 'center',justifyContent: 'flex-start',paddingTop:40, backgroundColor:'white', borderRadius:40, position:'absolute', bottom:0}}>
                <LongButton text="Login" onPress={()=>navigation.navigate("LoginScreen")} color="#AF9D5A" textColor="white"/>
                <View style={{flexDirection: "row" , paddingTop: 20}}>
                    <Text > Don't have an account?</Text>
                    <Text style={styles.textLink} onPress={() => navigation.navigate("RegistrationScreen")}> Sign up here</Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: "absolute",
    },
    page: {
        height: "100%",
        width: "100%",
        minWidth: 330,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageLogin: {
        width: "70%",
        height: "30%",
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "column",
        borderRadius:40
      
    },
    textLink: {
        fontWeight: "700",
        color: '#AF9D5A'
    },
});
