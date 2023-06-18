import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList, TextInput} from 'react-native';
import React, { useEffect, useState} from "react";
import useAuth from '../../hooks/useAuth';
import BottomNavigator from '../../components/BottomNavigation';
import { Ionicons } from "react-native-vector-icons";

export default function PalsScreen({ navigation }) {

  const [username, setUsername] = useState('')

  const data = [
    {
      level: 1,
      total: 200,
      current: 200,
      isClaimed: true,
      prize:'Pal'
    },
    {
      level: 2,
      total: 200,
      current: 200,
      isClaimed: true,
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
      current: 400,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 6,
      total: 700,
      current: 0,
      isClaimed: false,
      prize:'Pal'
    },
    {
      level: 7,
      total: 1000,
      current: 0,
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
      height:60
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
    },
    textInput: {
      height: 45,
      color: "#6A6A6A",
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 12,
      padding: 10,
      borderColor: "#DADADA",
    },

  });


  function handleClaimPrize () {

  }

  const Item = ({percentageString, level, total, isClaimed, onPress}) => (
    <View style={{width:'100%', height:55,alignItems:'center', flexDirection:'row'}}>
      <View style={{width:'10%', alignItems:'center'}}>
        <Text style={{fontSize:15, fontWeight:600}}>
          {level}
        </Text>
      </View>
      <View style={{ width:'65%', height:'100%', justifyContent:'center', alignItems:'center'}}>
        <View style={{position:'absolute', width:'80%', flexDirection:'row-reverse', paddingBottom:20}}>
          <Text style={{fontSize:10}}>
            {total}
          </Text>
        </View>
        <View style={{backgroundColor:'#ECECEC', width:'95%', height:10, borderRadius:5}}>
          <View style={{backgroundColor:'#4F60FF', width:percentageString, height:'100%', borderRadius:5, position:'absolute'}}>
          </View>
        </View>
      </View>
      <View style={{width:'25%', height:'100%', justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={onPress} style={{borderRadius:12, height:'80%', width:'90%', backgroundColor:'#ECECEC', alignItems:'center', justifyContent:'center'}}>
          {isClaimed ? (
            <Text>
              Claimed
            </Text>
          ):(
            <Text>
              Claim
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );


  const renderItem = ({item}) => {

    const percentage = item.current / item.total * 100
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

  return (
    <View style={styles.page}>
      <View style={styles.pageHome}>

        <View style={styles.topTab}>
        </View>

        <View style={{width:'100%', flexGrow:1, backgroundColor:'#D9D9D9', alignItems:'center', justifyContent:'center'}}>
          <View style={{width:'100%', height:'100%', position:'absolute'}}>
            <View style={{flexGrow:1, justifyContent:'center', alignItems:'center'}}>
              <View style={[styles.defaultCard, {position:'absolute', width:'90%', height:'100%',backgroundColor:'#ECECEC'}]}>
                <View style={{height:60, width:'85%',justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                  <Text style={{fontSize:30, fontWeight:700}}>
                    The Breakroom
                  </Text>
                  <TouchableOpacity style={{height:30, width:60, backgroundColor:'#A7A7A7', borderRadius:9, justifyContent:'center', alignItems:'center'}}>
                    <Text>
                      Prize
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexGrow:1, width:'100%', alignItems:'center'}}>
                  <View style={{height:'97%', width:'90%', position:'absolute', justifyContent:'center', alignItems:'center',}}>
                    <View style={{flexGrow:1, width:'100%', borderWidth:1}}>
                      
                    </View>
                    <View style={{width:'90%', height:130, justifyContent:'space-around'}}>
                      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <View style={{width:'63%'}}>
                          <Text style={{paddingLeft:5}}>
                            Send Pals to:
                          </Text>
                          <TextInput style={styles.textInput}
                            placeholder="username" 
                            onChangeText={(val) => setUsername(val)} 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                          />
                        </View>
                        <View style={{width:'33%'}}>
                          <Text style={{paddingLeft:5}}>
                            Select Pal:
                          </Text>
                          <TextInput style={styles.textInput}
                            placeholder="username" 
                            onChangeText={(val) => setUsername(val)} 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                          />
                        </View>
                      </View>
                      <TouchableOpacity style={{ height:45, width:'100%', borderRadius:12, backgroundColor:'#A7A7A7', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:16, fontWeight:600}}>
                          Send
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{height:75, paddingVertical:15, justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity style={{ height:'100%', width:'70%', borderRadius:18, backgroundColor:'#A7A7A7', justifyContent:'center', alignItems:'center', shadowColor: '#000', shadowColor: '#000', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 1, elevation: 1,}}>
                <Text style={{fontSize:16, fontWeight:600}}>
                  Redeem Prize
                </Text>
              </TouchableOpacity>
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


