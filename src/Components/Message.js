import React from 'react'
import { View, FlatList} from 'react-native'
import ChatBoxData from "../Assets/Jsondata/Data"
import User from './User'
const Message= () => {
 

  return (
    <View >
    <FlatList
    data={ChatBoxData}
    renderItem={({ item }) =>  <User ChatBox={item} />}
    showsVerticalScrollIndicator={false}
   
     />
    </View>

 
  )
}



export default Message