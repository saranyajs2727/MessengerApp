import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { Message } from '@/Components'
import { navigationRef } from './utils'
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
            
            }}
          />
      {/* <Stack.Screen
        name="Messagasae"
          component={Message}
          options={{
            title: 'Telegram',
            headerLeft: () => (
              <Icon
                name="menu"
                size={31}
                color="#000"
                style={{marginRight: 10}}
              />
            ),
            headerRight: () => (
              <Icon
                name="search"
                size={25}
                style={{marginRight: 10}}
              />
            ),
          }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
