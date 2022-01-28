import React  from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text,ScrollView ,Button,TouchableOpacity,} from 'react-native'
import { useTheme } from '@/Hooks'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useEffect } from 'react'

const Brand = ({ navigation }) => {
  const { Layout, Images ,Common , Fonts } = useTheme()

 

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

 
  return ( 
 

    
    <View style={[Layout.fill,Layout.fullSize,Common.backgroundPrimary,Common.screen]}>
      <Image style={Common.img} source={Images.logos}  />
      
      <Text style={Common.title}>A new Way to stay connected with us</Text>
      <Text style={Common.talk}>
        Let's talk about more stuff with the people  you're clostest to 
      </Text>
     <View style={Common.btn}>
     <TouchableOpacity onPress={() => navigation.navigate('Main')}
>
  <View style={{
      backgroundColor: 'white',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 15,
      marginLeft:50,
      height:50,
      width:300,
    }}
  >
    <Text style={{ color: 'black' }}>Create an Account</Text>
  </View>
</TouchableOpacity>
                
     </View>
     
  
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
