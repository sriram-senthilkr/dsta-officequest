import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import BottomNavigator from '../../components/BottomNavigation';

export default function LeaderboardScreen({ navigation }) {



    return (
        <View style={styles.page}>
            <View style={styles.pageHome}>


                <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#D9D9D9', width:'100%', flexGrow:1}}>
                    <Text style={styles.text}>Leaderboard</Text>
                </View>


            </View>
            <View style={styles.bottomNavigation}>
                {/* <BottomNavigator navigation={navigation} /> */}
            </View>
        </View>
        

    );
}


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
    text: {

    },

});

