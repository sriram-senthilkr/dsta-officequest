import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList} from 'react-native';
import React, { useEffect, useState} from "react";
import useAuth from '../../hooks/useAuth';
import BottomNavigator from '../../components/BottomNavigation';
import { Ionicons } from "react-native-vector-icons";

export default function HomeScreen({ navigation }) {

  const data = [
    {
      level: 1,
      total: 200,
      current: 200,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 2,
      total: 200,
      current: 200,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 3,
      total: 500,
      current: 500,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 4,
      total: 500,
      current: 500,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 5,
      total: 700,
      current: 700,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 6,
      total: 700,
      current: 700,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 7,
      total: 1000,
      current: 1000,
      isClaimed: false,
      prize:'Pal'
    },
  ]; 
    

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


  function handleClaimPrize () {

  }

  const Item = ({percentageString}) => (
    <View style={{width:'100%'}}>
      <Text>hello</Text>
      <View style={{width:'100%', borderWidth:1, height:40}}>

      </View>
    </View>
  );


  const renderItem = ({item}) => {

    const percentage = item.current / item.level * 100
    const percentageString = percentage.toString()+'%'
    
    return (
      <Item 
        level={item.level} 
        total={item.total}
        current={item.current}
        isClaimed={item.isClaimed}
        percentageString={percentageString}

        onPress={() => handleClaimPrize(item.level)}
      />
    )
  }

/*
                    <FlatList
                    style={{height:"0px", width:'100%'}}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.level}
                  />
                  */


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
              <View style={[styles.defaultCard, {width:'90%', backgroundColor:'#ECECEC'}]}>
                <View style={{height:60, width:'85%',justifyContent:'center'}}>
                  <Text style={{fontSize:30, fontWeight:700}}>
                    The Breakroom
                  </Text>
                </View>
                <View style={{flexGrow:1, width:'100%', alignItems:'center'}}>
                  <View style={{height:'95%', width:'90%', position:'absolute', borderRadius:15, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'95%', width:'90%', borderWidth:1}}>
                      <FlatList
                      style={{height:"0px", width:'100%'}}
                      showsVerticalScrollIndicator={false}
                      data={data}
                      renderItem={renderItem}
                      keyExtractor={item => item.level}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{height:'12%', justifyContent:'center', alignItems:'center'}}>
              <View style={[styles.defaultCard, { width:'60%', flexDirection:'row'}]}>
                <Text style={{fontWeight:500}}>Current Points: </Text>
                <Text style={{fontSize:20 , fontWeight:600}}>1,200</Text>
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

