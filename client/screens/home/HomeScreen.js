import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect, useState} from "react";
import useAuth from '../../hooks/useAuth';
import BottomNavigator from '../../components/BottomNavigation';
import { Ionicons } from "react-native-vector-icons";

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
      backgroundColor:'#D9D9D9',
      flexDirection:'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width:'100%',
      height:100
    },
    defaultCard:{
      height:'100%',
      backgroundColor:'white',
      borderRadius:30,
      shadowColor: '#000',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,

      justifyContent:'center',
      alignItems:'center'
    },
    headerText:{
      paddingLeft:'7%',
      paddingBottom:'1%',
      fontWeight:800,
      fontSize:28, 
      color:'white',
      shadowColor: '#000',
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 1,
    }
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

          <Text style={styles.headerText}>
            Welcome
          </Text>

          <View style={{paddingRight:'7%', paddingBottom:'1%',}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}} style={{width:40, height:40, borderRadius:20, backgroundColor:'#C2C4CA', alignItems:'center', justifyContent:'center'}}>
              <Ionicons name="person" color="#444" size='30px'/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{width:'100%', flexGrow:1, backgroundColor:'#D9D9D9', alignItems:'center', justifyContent:'center'}}>
          <View style={{width:'100%', height:'100%', position:'absolute', justifyContent:'space-evenly'}}>
            <View style={{height:'84%', justifyContent:'center', alignItems:'center'}}>
              <View style={[styles.defaultCard, {width:'90%'}]}>
                <Text>lol</Text>
              </View>
            </View>
            <View style={{height:'12%', justifyContent:'center', alignItems:'center'}}>
              <View style={[styles.defaultCard, { width:'60%'}]}>
                <Text>lol</Text>
              </View>
            </View>
          </View>
        </View>

      </View>
      <View style={styles.bottomNavigation}>
      <BottomNavigator navigation={navigation} />
      </View>
    </View>
    

  );
}


