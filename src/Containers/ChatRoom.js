import React from 'react'
import { useTheme } from '@/Hooks'

import { View,Text,FlatList} from 'react-native'
import ChatScreen from '@/Components/ChatScreen'
import { Common } from '@/Theme'
import  ChatData from "../Assets/Jsondata/Chat"
import { MessageInput } from '@/Components'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChatRoom = () => {
  const { Layout, Gutters, Fonts,Common } = useTheme()
  return (
    <View style={[Common.page,Layout.fill]}>
    <FlatList 
      data={ChatData.messages}
      renderItem={({ item }) => <ChatScreen message={item} />}
 

    />
    <MessageInput />
    </View>
  )
}

export default ChatRoom
