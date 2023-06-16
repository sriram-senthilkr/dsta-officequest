import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Animated } from 'react-native'
import { Ionicons } from "react-native-vector-icons";
import React, {useRef, useState, useEffect} from 'react'



export default function BottomNavigaton({navigation}) {

    
    const styles = StyleSheet.create({
        spaceGiven: {
            height: "100%",
            width: "100%",
            justifyContent:'center',
            alignItems:'center',
        },
        navigationBar: {
            height: "80%",
            width: "90%",
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "Arial",
            borderWidth:1,
            borderRadius:20,
            borderColor:'#D9D9D9'
        },
        iconContainer: {
            width:60,
            height:50,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:12,
        },
        button: {
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        buttonHover: {
            width:60,
            height:50,
            backgroundColor: 'black',
            opacity:'10%',
            borderRadius:10
        }

    
      });
    
    return(
        <View style={styles.spaceGiven}>
        <View style={styles.navigationBar}>
        <View style={{width:'100%', height:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
        <View style={{width:300, height:50, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}} onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)}>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeStack') } >
                <Ionicons name="home-outline" color="#444" size='25px'/>
            </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuestsStack')} >
                <Ionicons name="rocket-outline" color="#444" size='26px'/>
            </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PalsStack')} >
                <Ionicons name="people-outline" color="#444" size='25px'/>
            </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LeaderboardStack')} >
                <Ionicons name="stats-chart-outline" color="#444" size='25px'/>
            </TouchableOpacity>
            </View>

        </View>
        </View>
        </View>  
        </View>
    )

}


