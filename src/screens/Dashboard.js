import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Calls, Camera, Chats, Status } from './MaterialTopTabs';
import { COLORS } from '../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

export default function Dashboard() {
    return (
        <Tab.Navigator
            initialRouteName='Chats'

            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: COLORS.white, height: 3 },
                tabBarLabelStyle: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
                tabBarStyle: { backgroundColor: COLORS.primary, paddingVertical: 10 },
            }
            }>
            <Tab.Screen
                name='Camera'
                component={Camera}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => (<MaterialCommunityIcons name="camera" size={26} color={COLORS.white} />),
                }} />
            <Tab.Screen name='Chats' component={Chats} />
            <Tab.Screen name='Status' component={Status} />
            <Tab.Screen name='Calls' component={Calls} />
        </Tab.Navigator>
    )
}