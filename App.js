import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from './src/constants/themes';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { TopTabBars } from './src/navigations';
import { ChatScreen, Contacts } from './src/screens';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.secondary} />
      <Stack.Navigator
        initialRouteName='TopTabBar'
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: COLORS.white,
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 30, paddingHorizontal: 5 }}>
              <Feather name='camera' size={24} color={COLORS.white} />
              <Octicons name='search' size={24} color={COLORS.white} onPress={() => console.log('Search')} />
              <MaterialCommunityIcons name='dots-vertical' size={24} color={COLORS.white} />
            </View>
          )
        }}>
        <Stack.Screen
          name='TopTabBars'
          component={TopTabBars}
          options={{ title: 'WA Business', headerTitleStyle: { fontSize: 22 } }} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Contacts' component={Contacts} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}