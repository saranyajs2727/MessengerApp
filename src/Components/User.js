import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, FlatList } from 'react-native'
import { useTheme } from '@/Hooks'
import Data from './Data'
import { loadResources } from 'i18next'


const User= ( {ChatBox }) => {
  const { Layout, Images ,Common , Fonts } = useTheme()
//  console.log(ChatBox);
 const user=ChatBox.users[1]
  return (
   
    <View style={[Layout.row,Common.container]}>
   <Image style={Common.image} source={{uri:user.imageUri}}  />
   <View style={[Common.rightCointainer,Layout.fill]}>
     <View style={[Common.row,Layout.row,Layout.justifyContentBetween]}>
       <Text style={Common.name}>
         {user.name}
       </Text>
       <Text style={Common.text}>9.50 AM   </Text>
    </View>
    <View style={[Common.row,Layout.row,Layout.justifyContentBetween]}>
    <Text  numberOfLines={1}  style={Common.text}>{ChatBox.lastMessage.content}</Text>

   {ChatBox.newMessages ? <View style={Common.notify}>
    <Text style={Common.badgeText} >{ChatBox.newMessages}</Text>
    </View>  : null }

    </View>
  
   </View>
      
     
    </View>

   


 
  )
}

export default User