import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, Animated} from 'react-native';
import React, { useRef, useState } from 'react';
import { Ionicons } from "react-native-vector-icons";
import useAuth from '../../hooks/useAuth';
import LongButton from '../../components/LongButton';


export default function RegistrationScreen({ navigation }) {

  const styles = StyleSheet.create(
    {
      page: {
        height: "100%",
        width: "100%",
        minWidth: 330,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Arial",
      },
      pageLogin: {
        height: "90%",
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Arial",
      },
      topBar: {
        height: "10%",
        width:"90%",
        alignItems: "center",
        flexDirection: "row",
        
      },
      headerBar: {
        height: "10%",
        width:'80%',
        flexWrap:'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
      },
  
      bigText: {
        fontSize: 35,
        fontWeight: 900,
        fontFamily: "Arial",
      },
      mediumText: {
        fontSize: 20,
        fontWeight: 500,
        color: "#6A6A6A",
        fontFamily: "Arial",
      },
      normalBoldText: {
        fontSize: 15,
        fontWeight: 700,
        fontFamily: "Arial",
        paddingVertical:10
      },
      textInput: {
        height: 45,
        color: "#6A6A6A",
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        borderColor: "#DADADA",
      },
  
      inputContainer: {
        paddingVertical:5,
        width:'90%',
        maxWidth: 450
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
      defaultButton: {
        backgroundColor: "#D9D9D9",
        border: "none",
        padding: 10,
        height: 40,
        borderRadius: 14,
    
        cursor: "pointer"
      },
      buttonText: {
        fontFamily: "Arial",
        color: "black",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 700,
      }
  
  
    });

  const { logout, signupUser } = useAuth();
  const [loginDetails, setLoginDetails] = useState({email: null, username: null, password: null, confirmPassword: null})
  const [error, setError] = useState('')

  async function register() {
    try{
      
      if(loginDetails.password != loginDetails.confirmPassword) {
        alert("Passwords do not match");
        throw new Error("Passwords do not match");
        
      } 
      const resp = await signupUser(loginDetails);
      if (resp) {
        setError(resp)
      }
    } catch (error) {
      console.log(error);

    }
  }
  

  return (
    <View style={styles.page}>
      <View style={styles.pageLogin}>
        <View style={styles.topBar}>
          <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigation.goBack()}>
            <View style={styles.backButton}>
              <Text><Ionicons name="chevron-back-outline" color="#444"/></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerBar}>
          <View style={{paddingHorizontal: 7}}>
            <Text style={styles.bigText}>Sign</Text>
          </View>
          <View style={{padding: 7}}>
            <Text style={styles.bigText}>Up</Text>
          </View>
        </View>
        <View style={{height: '70%', width:'100%', justifyContent:'start' ,alignItems:'center', paddingTop:0}}>
          <View style={styles.inputContainer}>
            <Text style={styles.normalBoldText}>Email</Text>
            <TextInput style={styles.textInput}
              placeholder="example@mail.com" 
              value={loginDetails.email} 
              onChangeText={(email) => setLoginDetails({...loginDetails, email: email})} 
              autoCapitalize="none" 
              autoCorrect={false} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.normalBoldText}>Username</Text>
            <TextInput style={styles.textInput}
              placeholder="johndoe" 
              value={loginDetails.username} 
              onChangeText={(username) => setLoginDetails({...loginDetails, username: username})} 
              autoCapitalize="none" 
              autoCorrect={false} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.normalBoldText}>Password</Text>
            <TextInput style={styles.textInput}
              placeholder="......." 
              value={loginDetails.password} 
              onChangeText={(password) => setLoginDetails({...loginDetails, password: password})}
              autoCapitalize="none" 
              autoCorrect={false} 
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.normalBoldText}>Confirm Password</Text>
            <TextInput style={styles.textInput}
              placeholder="......." 
              value={loginDetails.confirmPassword} 
              onChangeText={(confirmPassword) => setLoginDetails({...loginDetails, confirmPassword: confirmPassword})} 
              autoCapitalize="none" 
              autoCorrect={false} 
              secureTextEntry={true}
            />
          </View>
          
        </View>

        <View style={{height: '10%', width: '100%', justifyContent:'center', alignItems: 'center'}}>
          <LongButton text="Register" onPress={() => register()}/>
        </View>
      </View>

    </View>
  );
}



