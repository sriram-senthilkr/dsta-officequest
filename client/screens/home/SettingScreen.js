import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import useAuth from '../../hooks/useAuth';
import LongButton from '../../components/LongButton';
import LongInput from '../../components/LongInput';
import BackButton from '../../components/BackButton';

// eslint-disable-next-line no-unused-vars
const SettingScreen = ({ navigation }) => {
    const { user, logoutUser } = useAuth()
    const handleLogout = () => {
        console.log("logout")
        logoutUser()
    }
    return (
        <View style={styles.page}>
            <View style={styles.topBar}>
                <BackButton/>
            </View>
            <View style={{ alignItems: 'start', width:'100%'}}>
                <Text style={{ fontSize: 35, fontWeight: 900}}>Settings</Text>
            </View>
            <View style={{ width:'100%', alignItems:'start', marginTop:10, gap:5}}>
                <Text style={styles.mediumText}>Profile</Text>
                <View style={{ width:'90%', alignSelf:'center', gap:5}}>
                    <Text style={styles.bodyText}>Username: {user.username}</Text>
                    <Text style={styles.bodyText}>Email: {user.email}</Text>
                    <Text style={styles.bodyText}>UserID: {user._id}</Text>
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
})

export default SettingScreen