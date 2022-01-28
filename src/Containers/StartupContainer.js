import React, { useEffect } from 'react'
import { View, Image, Text,ScrollView ,Button,TouchableOpacity,} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand, Message } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const StartupContainer = () => {
  const { Layout, Images ,Common , Fonts } = useTheme()
  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 5000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
       
    <View style={[Layout.fill,Layout.fullSize,Common.backgroundPrimary,Common.screen]}>
      <Image style={Common.img} source={Images.logos}  />
      
      <Text style={Common.title}>A new Way to stay connected with us</Text>
      <Text style={Common.talk}>
        Let's talk about more stuff with the people  you're clostest to 
      </Text>
     <View style={Common.btn}>
     <TouchableOpacity>
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
      
    </View>
  )
}

export default StartupContainer
