import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, ImagePropTypes } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {styles} from './styles';
import { ButtonIconOrText, FullwidthButton, Header, InputField } from '../../../components/common';
import { ApplicationStyles, Images } from '../../../theme';
import strings from '../../../constants/strings';


const propTypes = {
    navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    }).isRequired,
  };
const SpeechToneScreen = ({navigation}) => {
    const [currentStep, setCurrentStep] = useState(2);

    const onNextPress = () => {
        setCurrentStep((currentStep + 1) % 3);
      };

  return (
    <SafeAreaView style={[styles.container]}>
        <Header
            drawerLeft
            user
            divider
        />
        <ImageBackground
            source={Images.background4}
            style={styles.image}
        />
        <View style={styles.container2}>
            <View style={[styles.dot, currentStep === 0 && styles.highlighted]} />
            <View style={[styles.dot, currentStep === 1 && styles.highlighted]} />
            <View style={[styles.dot, currentStep === 2 && styles.highlighted]} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', marginTop: 15}}>
            <Text style={{fontWeight:'500', fontSize: 14}}>Speech tone</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', marginTop: 30}}>
            <View style={[styles.GeneralInfo,{justifyContent:'center'}]}>
                <Image source={Images.bridalSpeech2} style={styles.image2} resizeMode="contain" />
            </View>
        </View>

        <View style={[styles.inputFieldContainer, ApplicationStyles.shadow]}>
            <ButtonIconOrText
                source={Images.funny}
                imgstyle={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                }}
                label={'Funny'}
                onPress={() => navigation.navigate('DetailConfirmationScreen')}
            />
            <ButtonIconOrText
                source={Images.emotional}
                imgstyle={{
                    width: 35,
                    height: 35,
                    alignSelf: 'center',
                }}
                label={'Emotional'}
                onPress={() => navigation.navigate('DetailConfirmationScreen')}
            />
            <ButtonIconOrText
                source={Images.poetic}
                imgstyle={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                }}
                label={'Poetic'}
                onPress={() => navigation.navigate('DetailConfirmationScreen')}
            />
        </View>

    </SafeAreaView>

  )
}

export default SpeechToneScreen