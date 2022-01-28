import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, FlatList ,ScrollView} from 'react-native'
import { useTheme } from '@/Hooks'
import Data from './Data'

import ChatBoxData from "../Assets/Jsondata/Data"
import User from './User'

const chatBox1 =ChatBoxData[0];
const chatBox2 =ChatBoxData[1];
const chatBox3 =ChatBoxData[2];
const chatBox4 =ChatBoxData[3];
const chatBox5 =ChatBoxData[4];
const chatBox6 =ChatBoxData[5];
const chatBox7 =ChatBoxData[6];
const chatBox8 =ChatBoxData[7];
const chatBox9=ChatBoxData[8];


const Message= ({ height, width, mode }) => {
  const { Layout, Images ,Common , Fonts } = useTheme()

  return (
    <ScrollView style={Common.page}>
   
       <User ChatBox={chatBox1}/>
       <User ChatBox={chatBox2}/>
       <User ChatBox={chatBox3}/>
       <User ChatBox={chatBox4}/>
       <User ChatBox={chatBox5}/>
       <User ChatBox={chatBox6}/>
       <User ChatBox={chatBox7}/>
       <User ChatBox={chatBox8}/>
       <User ChatBox={chatBox9}/>
    </ScrollView>

 
  )
}

Message.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

Message.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Message