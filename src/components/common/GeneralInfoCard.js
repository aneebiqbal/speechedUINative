import { View, Text, Image } from 'react-native'
import React from 'react'
import { ApplicationStyles, Images } from '../../theme'

const GeneralInfoCard = () => {
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
        backgroundColor:'white'

    }]}>
        <View style={{
            flexDirection:"column",
            margin: 20,
            alignItems:"center",
            justifyContent:'center',
        }}>
            <Text style={{fontWeight: '400',fontSize: 12, marginBottom: 10, color: '#556062', right: 18}}>Bride Name</Text>
            <Text style={{fontWeight: '500',fontSize: 18, color: '#556062'}}>Susan Smith</Text>
        </View>

        <View>
            <Image
            source={Images.flower}
            style={{
                height: 70,
                width: 50,
            }}
            />
        </View>

        <View style={{
            flexDirection:"column",
            margin: 20,
            alignItems:"center",
            justifyContent:'center',
        }}>
            <Text style={{fontWeight: '400',fontSize: 12, marginBottom: 10, color: '#556062', right: 18 }}>Groom Name</Text>
            <Text style={{fontWeight: '500',fontSize: 18, color: '#556062',right: 5 }}>David Jones</Text>
        </View>
    </View>
  )
}

export default GeneralInfoCard