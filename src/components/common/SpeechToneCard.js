import { View, Text, Image } from 'react-native'
import React from 'react'
import { ApplicationStyles, Colors, Images } from '../../theme'

const SpeechToneCard = () => {
  return (
    <View style={[ApplicationStyles.shadow,{
      height: 120,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"space-between",
      margin: 20,
      borderRadius: 10,
      borderColor:"#E0E0E0",
      paddingHorizontal: 20,
      backgroundColor:'white'
  }]}>
      <Text style={{fontSize: 18, fontWeight: '500', color: '#313638'}}>Poetic</Text>
      <Image
        source={Images.poetic2}
        style={{
          height: 90,
          width: 90,
          bottom: 5
        }}
      />
    </View>
  )
}

export default SpeechToneCard