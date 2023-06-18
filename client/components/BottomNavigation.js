import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Animated } from 'react-native'
import { Ionicons } from "react-native-vector-icons";
import React, {useRef, useState, useEffect} from 'react'



export default function BottomNavigaton({navigation}) {

    
    const styles = StyleSheet.create({
        spaceGiven: {
            height: "100%",
            width: "100%",
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
            borderRadius:30,
            borderColor:'#D9D9D9',
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
        },
        iconContainer: {
            width:"25%",
            height:"100%",
            alignItems:'center',
            justifyContent:'center',
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
        },
        iconDescription: {
            fontSize:11,
            // shadowColor: '#000',
            // shadowOffset: { width: 1, height: 1 },
            // shadowOpacity: 0.5,
            // shadowRadius: 1,
            // elevation: 1,
        }

    
      });
    
    return(
        <View style={styles.spaceGiven}>
        <View style={styles.navigationBar}>
        <View style={{width:'100%', height:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
        <View style={{width:300, height:"100%", flexDirection:'row', alignItems:'center', justifyContent:'space-around'}} onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)}>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeStack') } >
                <Ionicons name="home-outline" color="#444" size={25}/>
                <Text style={styles.iconDescription}>Home</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuestsStack')} >
                <Ionicons name="rocket-outline" color="#444" size={25}/>
                <Text style={styles.iconDescription}>Quests</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PalsStack')} >
                <Ionicons name="people-outline" color="#444" size={25}/>
                <Text style={styles.iconDescription}>Pals</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LeaderboardStack')} >
                <Ionicons name="stats-chart-outline" color="#444" size={25}/>
                <Text style={styles.iconDescription}>Leaderboard</Text>
            </TouchableOpacity>
            </View>

        </View>
        </View>
        </View>  
        </View>
    )

}


