import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { styles } from './styles';
import { ButtonIconOrText, FullwidthButton, GeneralInfoCard, Header, InputField, SpeechToneCard } from '../../../components/common';
import { ApplicationStyles, Images } from '../../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';


const propTypes = {
    navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    }).isRequired,
  };

const DetailConfirmationScreen = () => {
  return (
    <SafeAreaView style={[styles.container]}>
        <Header
            drawerLeft
            edit
            divider
        />
        <ImageBackground
            source={Images.background4}
            style={styles.image}
        />
        <View style={{
            margin: 20,
            top: 20
            }}>
            <Text style={{color:'#95999C', fontWeight: '500', fontSize: 12}}>GENERAL INFO</Text>
        </View>

        <GeneralInfoCard/>

        <View style={{flexDirection:"row", marginHorizontal: 40, justifyContent: 'space-evenly', right: 30, marginBottom: 20}}>
            <Text>Mother Name:</Text>
            <Text>Sarah Jones</Text>
        </View>

        <View style={{flexDirection:"row", marginHorizontal: 40, justifyContent: 'space-evenly', right: 25}}>
            <Text>Father Name:</Text>
            <Text style={{left: 10}}>Margaret Jones</Text>
        </View>

        <Divider style={styles.dividerMargin} />
        <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal: 20}}>
            <Text style={{color:'#95999C', fontWeight:'500'}}>Speech tone</Text>
            <Text style={{color:'#000'}}>Change Tone</Text>
        </View>

        <SpeechToneCard/>
        <Divider style={styles.dividerMargin} />

        <View style={{marginLeft: 20}}>
            <Text style={{color: '#95999C', fontWeight:"500", fontSize: 14}}>
                PAYMENT METHOD
            </Text>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-evenly', marginTop: 20, marginLeft: 20, marginBottom:35}}>
                <Image
                    source={Images.applePay}
                    style={{height: 20, width:30,right: 65}}
                />
                <Text style={{right: 110}}>Apple Pay</Text>
                <Text style={{fontWeight: '500', fontSize: 18}}>$ 10</Text>
        </View>

        <View>
        <TouchableOpacity style={[styles.buttonContainer]}>
            <View style={[styles.buttonLeft, {backgroundColor: '#E2B65C',borderBottomLeftRadius: 10, borderTopLeftRadius: 10, flexDirection:'row'}]}>
                <Text style={styles.buttonText}>Confirm and Pay</Text>
            </View>
            <View style={[styles.buttonRight, {backgroundColor: 'black',borderBottomRightRadius: 10, borderTopRightRadius: 10, flexDirection:'row'}]}>
                <Text style={styles.buttonText}>$10</Text>
            </View>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default DetailConfirmationScreen