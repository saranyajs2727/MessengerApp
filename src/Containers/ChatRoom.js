import React from 'react'
import { useTheme } from '@/Hooks'

import { View,Text,FlatList} from 'react-native'
import ChatScreen from '@/Components/ChatScreen'
import { Common } from '@/Theme'
import  ChatData from "../Assets/Jsondata/Chat"

const ChatRoom = () => {
  const { Layout, Gutters, Fonts,Common } = useTheme()
  return (
    <View style={[Common.page]}>
    <FlatList 
      data={ChatData.messages}
      renderItem={({ item }) => <ChatScreen message={item} />}
    />

     {/* <ChatScreen message={ChatData.messages[1]} /> */}
    </View>
  )
}

export default ChatRoom
