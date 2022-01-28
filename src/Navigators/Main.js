import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChatRoom, ExampleContainer, StartupContainer } from '@/Containers'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
   const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
  
    <Tab.Navigator>
     <Tab.Screen
        name="Messages"
        component={ExampleContainer}
        options={{
          tabBarLabel: '',
         tabBarIcon: ({ color }) => (
                <Icon name="message-outline"  size={26} />
              ),
        }}
        />
         <Tab.Screen
        name="Phone"
        component={StartupContainer}
        options={{
          tabBarLabel: '',
         tabBarIcon: ({ color }) => (
                <Icon name="phone" color={color} size={26} />
              ),
        }}
        />
         <Tab.Screen
        name="Data"
        component={ChatRoom}
        options={{
          tabBarLabel: '',
         tabBarIcon: ({ color }) => (
                <Icon name="book-plus-multiple-outline" color={color} size={26} />
              ),
        }}
        />
         <Tab.Screen
        name="folder"
        component={ExampleContainer}
        options={{
          tabBarLabel: '',
         tabBarIcon: ({ color }) => (
                <Icon name="folder-outline" color={color} size={26} />
              ),
        }}
        />
        
    </Tab.Navigator>
  
  )
}

export default MainNavigator
