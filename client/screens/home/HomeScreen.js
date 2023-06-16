import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect, useState} from "react";
import useAuth from '../../hooks/useAuth';
import BottomNavigator from '../../components/BottomNavigation';

export default function HomeScreen({ navigation }) {

  const styles = StyleSheet.create({
    page: {
      height: "100%",
      width: "100%",
      minWidth: 330,
      backgroundColor: '#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "Arial",
    },
    pageHome: {
      width: "100%",
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: "column",
    },
    bottomNavigation: {
      width:'100%',
      height: 90

    },
    topTab: {
      borderWidth:1,
      backgroundColor:'#D9D9D9',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:100
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

        <View style={styles.topTab}>
          <Text onPress={()=>handleLogout()} style={styles.text}>Logout</Text>
        </View>

        <View style={{width:'100%', flexGrow:1, backgroundColor:'#D9D9D9', borderWidth:1}}>

        </View>

      </View>
      <View style={styles.bottomNavigation}>
      <BottomNavigator navigation={navigation} />
      </View>
    </View>
    

  );
}


