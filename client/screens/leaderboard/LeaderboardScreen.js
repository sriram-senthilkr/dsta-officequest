import React, { useEffect, useState } from "react";
import {FlatList, StyleSheet, Text, View } from 'react-native';
import BottomNavigator from '../../components/BottomNavigation';
import { getLeaderboard } from "../../api/leaderboard";

export default function LeaderboardScreen({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const leaderboardArray = await getLeaderboard();
                setData(leaderboardArray.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    // Each Individual Level Component
    const Item = ({total, name, level, backgroundColor}) => (
        <View style={{width:'100%', height:55,alignItems:'center', flexDirection:'row'}}>
            <View style={{width:'10%', alignItems:'center'}}>
                <Text style={{fontSize:15, fontWeight:600}}>
                    {level + 1}
                </Text>
            </View>
            
            <View style={{ width: '95%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ borderRadius: 12, height: '80%', width: '90%', backgroundColor: backgroundColor, alignItems: 'center', justifyContent: 'space-between', paddingRight: 10, flexDirection: 'row', paddingLeft: 10}}>
                    <Text style={{fontSize:17, fontWeight:400}}>
                        {name}
                    </Text>
                    <Text style={{fontSize:17, fontWeight:400}}>
                        {total}
                    </Text>
                </View>
            </View>
        </View>
    );    

    // Rendering the list of levels
    const renderItem = ({item, index}) => {
        let backgroundColor = '#e6e4e1'; // Default background color

        // Set the first three rows to green color
        if (index == 0) {
          backgroundColor = '#63db4b';
        } else if (index == 1) {
            backgroundColor = '#8fd980';
        } else if (index == 2) {
            backgroundColor = '#b6e8ac';
        }
        
        return (
            <Item
                level={index}
                total={item.points}
                name={item.username}
                backgroundColor={backgroundColor}
            />
        )
    }

    // Rendering the page
    return (
        
        <View style={styles.page}>
            <View style={styles.pageHome}>
                <View style={{width:'100%', flexGrow:1, backgroundColor:'#D9D9D9', alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:'100%', height:'100%', position:'absolute', justifyContent:'space-evenly'}}>
                        <View style={{height:'95%', justifyContent:'center', alignItems:'center', paddingTop: 25}}>
                            <View style={[styles.defaultCard, {width:'90%', backgroundColor:'#FBE6B8'}]}>
                                <View style={{height:60, width:'85%',justifyContent:'center'}}>
                                    <Text style={{fontSize:30, fontWeight:700, color:"#A27A4E"}}>
                                        Leaderboard
                                    </Text>
                                </View>
                                <View style={{flexGrow:1, width:'100%', alignItems:'center'}}>
                                    <View style={{height:'96%', width:'90%', position:'absolute', borderRadius:15, justifyContent:'center', alignItems:'center', backgroundColor:"white"}}>
                                        <View style={{height:'90%', width:'90%'}}>
                                            <FlatList
                                                style={{ height: 0, width: '100%' }}
                                                keyExtractor={item => item._id}
                                                data={data}
                                                renderItem={renderItem}
                                                showsVerticalScrollIndicator={false}
                                            />
                                        </View>
                                        <View style={{paddingVertical:8}}>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
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
        width: '100%',
        height: 90

    },
    topTab: {
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width:'100%',
        height:100,
    },
    defaultCard: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        paddingLeft:'7%',
        paddingBottom:'1%',
        fontWeight:800,
        fontSize:30, 
        color:'white',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    }
});