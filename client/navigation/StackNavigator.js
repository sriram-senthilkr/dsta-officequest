import React,{useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStack from './AuthenticationStack';
import HomeStack from './HomeStack';
import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();

export default function StackNavigator() {
    const {isLoggedIn} = useAuth()
    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/> 
            ):(
                <Stack.Screen name="AuthenticationStack" component={AuthenticationStack} options={{headerShown: false}}/> 
            )}
        </Stack.Navigator>
    );
    
};
