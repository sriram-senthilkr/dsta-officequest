import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect, useState} from "react";
import useAuth from '../../hooks/useAuth';

export default function HomeScreen({ navigation }) {

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
    pageHome: {
      width: "90%",
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: "column",
    },
    bottomNavigation: {
      width:'100%',
      height: 70

    },
    text: {

    },

  });

  const { logoutUser } = useAuth();
  async function handleLogout() {
    try {
      logoutUser();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.pageHome}>
      <View style={{alignItems: 'center', justifyContent: 'center', flexGrow:1}}>
        <Image 
          style={{width: 200, height: 200}}
          source={require('../../assets/officequest_logo.png')}
          resizeMode={'contain'}  
        />
        <Text onPress={()=>handleLogout()} style={styles.text}>Logout</Text>
        

        </View>
      </View>
      <View style={styles.bottomNavigation}>
      </View>
    </View>
    

  );
}


