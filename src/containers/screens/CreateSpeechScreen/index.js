import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, ImagePropTypes } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {styles} from './styles';
import { FullwidthButton, Header, InputField } from '../../../components/common';
import { ApplicationStyles, Images } from '../../../theme';
import strings from '../../../constants/strings';


const propTypes = {
    navigation: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };
const CreateSpeechScreen = ({navigation}) => {
    const [currentStep, setCurrentStep] = useState(-1);
    const [brideName, setBrideName] = useState('');
    const [groomName, setGroomName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');


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
            source={Images.background3}
            style={styles.image}
        />
        <View style={styles.container2}>
            <View style={[styles.dot, currentStep === 0 && styles.highlighted]} />
            <View style={[styles.dot, currentStep === 1 && styles.highlighted]} />
            <View style={[styles.dot, currentStep === 2 && styles.highlighted]} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', marginTop: 15}}>
            <Text style={{fontWeight:'500', fontSize: 14}}>General Info</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', marginTop: 30}}>
            <View style={[styles.GeneralInfo,{justifyContent:'center'}]}>
                <Image source={Images.bridalSpeech2} style={styles.image2} resizeMode="contain" />
            </View>
        </View>

        <View style={[styles.inputFieldContainer, ApplicationStyles.shadow]}>
            <InputField
                placeholder={strings.brideName}
                setText={{setBrideName}}
            />
            <InputField
                placeholder={strings.groomName}
                setText={{setGroomName}}
            />
            <InputField
                placeholder={strings.fatherName}
                setText={{setFatherName}}
            />
            <InputField
                placeholder={strings.motherName}
                setText={{setMotherName}}
            />
        </View>
        <View>
            <FullwidthButton
                labelStyle
                label={strings.next}
                onPress={() => {
                    onNextPress();
                    navigation.navigate('FactsScreen');
                  }}
            />
        </View>

    </SafeAreaView>

  )
}

export default CreateSpeechScreen