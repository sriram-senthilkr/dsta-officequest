import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import QuestsStack from './QuestsStack';
import PalsStack from './PalsStack';
import LeaderboardStack from './LeaderboardStack';
import TabBar from '../components/TabBar';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route)
        if (routeName === 'Settings' || routeName === 'PasswordModal' || routeName === 'QuizModal' || routeName === 'AddQuest') {
            return false;
        }
        return true
    }
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
                // tabBarActiveTintColor: 'gray',
            }}
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeStack}
                options={({route}) => ({
                    tabBarVisible: getTabBarVisibility(route),
                })}
            />

            <Tab.Screen name="Quests" component={QuestsStack}
                options={({route}) => ({
                    tabBarVisible: getTabBarVisibility(route),
                })}
            />

            <Tab.Screen name="Pals" component={PalsStack}
                // options={{
                //     tabBarIcon: ({focused, color, size})=>(
                //         <Ionicons name={focused ? "people" : "people-outline"} color={color} size={size}/>
                //     ),
                // }}
            />

            <Tab.Screen name="Leaderboards" component={LeaderboardStack}
                // options={{
                //     tabBarIcon: ({focused, color, size})=>(
                //         <Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} color={color} size={size}/>
                //     ),
                // }}
            />


        </Tab.Navigator>
    )
}

export default BottomTabNavigator