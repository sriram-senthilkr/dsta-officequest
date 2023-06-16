import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import QuestsScreen from '../screens/quests/QuestsScreen';

const Stack = createStackNavigator();


export default function QuestsStack() {

    return (
        <Stack.Navigator initialRouteName="QuestsScreen">
            <Stack.Screen name="QuestsScreen" component={QuestsScreen} options={{headerShown: false}}/> 
        </Stack.Navigator>
    );
}
