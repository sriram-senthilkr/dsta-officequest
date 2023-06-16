import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LeaderboardScreen from '../screens/leaderboard/LeaderboardScreen';

const Stack = createStackNavigator();


export default function LeaderboardStack() {

    return (
        <Stack.Navigator initialRouteName="LeaderboardScreen">
            <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} options={{headerShown: false}}/> 
        </Stack.Navigator>
    );
}
