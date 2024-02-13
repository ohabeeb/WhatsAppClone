import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from './src/screens';
import { COLORS } from './src/constants/themes';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.secondary} />
      <Stack.Navigator
        initialRouteName='Dashboard'
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: COLORS.white,
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={{flexDirection: 'row', gap: 30, paddingHorizontal: 15}}>
              <Octicons name='search' size={24} color={'#FFF'} onPress={() => console.log('Search')} />
              <MaterialCommunityIcons name='dots-vertical' size={24} color={'#FFF'} />
            </View>
          )
        }}>
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{ title: 'WhatsApp' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}