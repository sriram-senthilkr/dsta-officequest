import { StyleSheet, Text, View, Image, TouchableOpacity, Animated} from 'react-native';
import React, { useRef, useState, useEffect } from "react";
import LongButton from '../../components/LongButton';


export default function StartScreen({ navigation }) {

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    minWidth: 330,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Arial",
  },
  pageLogin: {
    width: "90%",
    height: "90%",
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "column",
    
  },
  text: {
    fontSize: 17,
    fontWeight: 700,
    fontFamily: "Arial",
  },

  textLink: {
    fontWeight: "700",
    color: 'black'
  },

  defaultButton: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    width: "100%",
    maxWidth: 400,
    height: 40,
    borderRadius: 14,

    cursor: "pointer"
  },
  buttonText: {
    fontFamily: "Arial",
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 700,
  }
});

  return (
    <View style={styles.page}>
      <View style={styles.pageLogin}>

        <View style={{alignItems: 'center', justifyContent: 'center', height: "85%"}}>
          <Image 
          style={{width: 200, height: 200}}
          source={require('../../assets/officequest_logo.png')}
          resizeMode={'contain'}
          />
        </View>

        <View style={{width: "100%", height: "15%", alignItems: 'center',justifyContent: 'center'}}>
          <LongButton text="Login" onPress={()=>navigation.navigate("LoginScreen")} />
          <View style={{flexDirection: "row" , paddingTop: 20}}>
            <Text > Don't have an account?</Text>
            <Text style={styles.textLink} onPress={() => navigation.navigate("RegistrationScreen")}> Sign up here</Text>
          </View>
        </View>

      </View>
    </View>
    
  )
}


