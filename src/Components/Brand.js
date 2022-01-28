import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text,ScrollView } from 'react-native'
import { useTheme } from '@/Hooks'

const Brand = ({ height, width, mode }) => {
  const { Layout, Images ,Common , Fonts } = useTheme()

  return ( 
 

    
    <View style={[Layout.fill,Layout.fullSize,Common.backgroundPrimary]}>
      <Image style={Layout.fullSize} source={Images.logos} resizeMode={mode} />
      
      <Text style={Fonts.titleLarge}>A new Way to stay connect with us</Text>
      
  
    </View>
  )
}

Brand.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Brand
