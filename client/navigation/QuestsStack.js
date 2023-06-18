import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import QuestsScreen from '../screens/quests/QuestsScreen';
import QuizModal from '../screens/quests/QuizModal';
import PasswordModal from '../screens/quests/PasswordModal';

const Stack = createStackNavigator();


export default function QuestsStack() {

    return (
        <Stack.Navigator initialRouteName="QuestsScreen">
            <Stack.Group>
                <Stack.Screen name="QuestsScreen" component={QuestsScreen} options={{headerShown: false}}/> 
            </Stack.Group>
            
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="QuizModal" component={QuizModal} options={{headerShown: false}}/> 
                <Stack.Screen name="PasswordModal" component={PasswordModal} options={{headerShown: false}}/> 
            </Stack.Group>
        </Stack.Navigator>
    );
}
