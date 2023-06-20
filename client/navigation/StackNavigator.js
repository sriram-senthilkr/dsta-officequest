import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationStack from './AuthenticationStack';
import HomeStack from './HomeStack';
import PalsStack from './PalsStack';
import QuestsStack from './QuestsStack';
import LeaderboardStack from './LeaderboardStack';
import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();

export default function StackNavigator() {
    const { user } = useAuth()
    return (
        <Stack.Navigator>
            {user ? (
                <Stack.Group screenOptions={{ headerShown: false, presentation: 'fullScreenModal', animationEnabled: false}}>
                    <Stack.Screen name="HomeStack" component={HomeStack}/> 
                    <Stack.Screen name="QuestsStack" component={QuestsStack}/> 
                    <Stack.Screen name="LeaderboardStack" component={LeaderboardStack}/> 
                    <Stack.Screen name="PalsStack" component={PalsStack}/> 
                </Stack.Group>
            ):(
                <Stack.Screen name="AuthenticationStack" component={AuthenticationStack} options={{headerShown: false}}/> 
            )}
        </Stack.Navigator>
    );
}
