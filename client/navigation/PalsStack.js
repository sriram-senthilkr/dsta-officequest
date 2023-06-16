import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PalsScreen from '../screens/pals/PalsScreen';

const Stack = createStackNavigator();


export default function PalsStack() {

    return (
        <Stack.Navigator initialRouteName="PalsScreen">
            <Stack.Screen name="PalsScreen" component={PalsScreen} options={{headerShown: false}}/> 
        </Stack.Navigator>
    );
}
