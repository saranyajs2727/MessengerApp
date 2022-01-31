import { View, Text } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/Entypo";
import { useTheme } from '@/Hooks'
import { TextInput } from 'react-native-gesture-handler';

const MessageInput = () => {
    const { Layout, Images ,Common , Fonts } = useTheme()
  return (
<View style={[Common.root]}>
  <View style={[Common.inputContainer]}>
 
   <TextInput style={[Layout.fill]} />
 
   <Icon name="attachment"  size={26} />
  </View>
  <View style={[Common.buttonContainer]}>
   <Text style={[Common.buttonText]}> <Icon name="mic"  size={26} /></Text>
  </View>
    </View>
  );
};

export default MessageInput;
