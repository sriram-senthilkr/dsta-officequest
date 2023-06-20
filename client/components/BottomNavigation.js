import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from "react-native-vector-icons";
import React from 'react'

export default function BottomNavigaton({navigation}) {

    return(
        <View style={styles.spaceGiven}>
            <View style={styles.navigationBar}>
                <View style={{width:'100%', height:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
                    <View style={{width:300, height:"100%", flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

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
        borderRadius:30,
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
    iconDescription: {
        fontSize:11,
    }
});