import React from 'react'

import { View, Image, Text,ScrollView } from 'react-native'
import { useTheme } from '@/Hooks'

const blue="#3777f0";
const grey="lightgrey";
 const myId='u1';

const ChatScreen = ( {message}) => {
  const { Layout, Images ,Common , Fonts } = useTheme()
  console.log(message);
  const isMe = message.user.id === myId;
  return ( 
 <View style={[Common.ChatScreen ,isMe ? Common.leftContainer : Common.rightContainer]}>
   <Text style={{ color : isMe ? 'black' : 'white'}}>{message.content}</Text>
 </View>
  )
}


export default ChatScreen