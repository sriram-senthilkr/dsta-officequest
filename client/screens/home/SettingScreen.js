import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React from 'react'
import { Ionicons } from "react-native-vector-icons";
import useAuth from '../../hooks/useAuth';
import LongButton from '../../components/LongButton';
import LongInput from '../../components/LongInput';

const SettingScreen = () => {
    const { user, logoutUser } = useAuth()
    const handleLogout = () => {
        console.log("logout")
        logoutUser()
    }
  return (
    <View style={styles.page}>
        <View style={styles.topBar}>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigation.goBack()}>
            <View style={styles.backButton}>
                <Text><Ionicons name="chevron-back-outline" color="#444"/></Text>
            </View>
            </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'start', width:'100%'}}>
            <Text style={{ fontSize: 35, fontWeight: 900}}>Settings</Text>
        </View>
        <View style={{ width:'100%', alignItems:'start', marginTop:10, gap:5}}>
            <Text style={styles.mediumText}>Profile</Text>
            <View style={{ width:'90%', alignSelf:'center', gap:5}}>
                <Text style={styles.bodyText}>Username: {user.username}</Text>
                <Text style={styles.bodyText}>Email: {user.email}</Text>
            </View>
        </View>
        <LongInput 
            label="Change Username" 
            placeholder="username" 
            value={user.username} 
            onChangeText={()=>{console.log("onchange")}}

        />
        <LongButton text="Save" onPress={()=>{console.log("save username")}}/>
        <LongButton text="Logout" onPress={()=>{handleLogout()}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        height: "100%",
        width: "100%",
        minWidth: 330,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'start',
        fontFamily: "Arial",
        paddingTop: 40,
        padding: 20
    },
    topBar: {
        height: "10%",
        width:"100%",
        alignItems: "center",
        flexDirection: "row",
        
    },
    mediumText: {
        fontSize: 30,
        fontWeight: 500,
        color: "#6A6A6A",
        fontFamily: "Arial",
    },
    bodyText: {
        width:"100%",
        fontSize: 18,
        fontFamily: "Arial",
    },
    backButton: {
        fontFamily: "Arial",
        backgroundColor: "#D9D9D9",
        border: "none",
    
        alignItems: 'center',
        justifyContent: 'center',
        
        width: 40,
        height: 40,
        borderRadius: 14,
    
        cursor: "pointer"
    },
})

export default SettingScreen