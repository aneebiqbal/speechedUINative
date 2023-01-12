import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Images, Fonts, Colors, ApplicationStyles} from '../../../../theme';
import {Image, View, Text, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';

import {
  FullwidthButton,
  InputField,
} from '../../../../components/common';

import Strings from '../../../../constants/strings';
import {styles} from '../styles';
import {signIn, signUp} from '../../../../actions/AccountActions';
import {useDispatch, useSelector} from 'react-redux';
import Status from '../../../../constants/status';
import { Formik } from 'formik';
import {signInValidation} from '../SigninScreen/Validation';
import strings from '../../../../constants/strings';
import { Divider } from 'react-native-elements';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};



const defaultProps = {};

const SignUpScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const {status, user} = useSelector(({AccountState}) => AccountState);
 
  const handleSubmitEvent = values => {  
    setError('');
    dispatch(
      signUp(
        {
          username: values.username,
          email: values.email,
          password: values.password,
        },
        setError,
      ),
    );
  };

  return (
    <ScrollView>
     <SafeAreaView >
      <ImageBackground
         source={Images.background}
         style={[styles.image, {position: 'absolute',}]}
      />
      <ImageBackground
         source={Images.background2}
         style={[styles.image2,{position: 'absolute',}]}
      />

      <View style={{alignItems:'center', marginTop: 20, flexDirection:'column'}}>
        <Text style={{fontWeight:'600', fontSize: 30}}>{strings.signupnow}</Text>
        <Text style={{fontWeight:'400', fontSize: 22, color: '#556062', marginTop: 15}}>{strings.signupHeading}</Text>
      </View>

      <Formik
          validationSchema={signInValidation}
          validateOnChange={false}
          initialValues={{username: '',email:'', password: ''}}
          onSubmit={values => {
            handleSubmitEvent(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={[styles.inputFieldContainer, ApplicationStyles.shadow]}>
              <InputField
                  placeholder={Strings.fullname}
                  text={values.username}
                  setText={handleChange('username')}
                  error={errors.username && errors.username}
                  style={{borderRadius: 10}}
                />
                <InputField
                  placeholder={Strings.emailPlaceholder}
                  text={values.email}
                  setText={handleChange('email')}
                  error={errors.email && errors.email}
                  style={{borderRadius: 10}}
                />
                <InputField
                  placeholder={Strings.password}
                  text={values.password}
                  secureTextEntry
                  setText={handleChange('password')}
                  error={errors.password && errors.password}
                />
              </View>
              <View style={styles.errorStyleContainer}>
                <Text style={styles.errorStyle}>{error}</Text>
              </View>

                <FullwidthButton
                  labelStyle
                  label={Strings.signup}
                  onPress={handleSubmit}
                  loading={status === Status.LOADING}
                />
            </>
          )}
        </Formik>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Divider style={{width: 100, marginLeft: 20, marginRight: 20}} />
          <Text style={{color: Colors.lightBlack2}}>Or SignUp with</Text>
          <Divider style={{width: 100,marginLeft: 20, marginRight: 20}} />
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin: 30}}>
              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 4,
                padding: 18,
                position:'relative',
              }}>
                <Image
                  source={Images.google}
                  style={{
                    width: 37,
                    height: 30,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 4,
                padding: 18,
              }}>
                <Image
                  source={Images.facebook}
                  style={{
                    width: 33,
                    height: 32,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 4,
                padding: 18,
              }}>
                <Image
                  source={Images.twitter}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"center", marginBottom: 15}}>
          <Text style={{fontWeight:"600"}}>Already a member?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SigninScreen')}>
          <Text style={{color:Colors.primary, fontWeight:"600"}}> Login now</Text>
          </TouchableOpacity>
        </View>
     </SafeAreaView>
     </ScrollView>
  )
};

SignUpScreen.propTypes = propTypes;
SignUpScreen.defaultProps = defaultProps;

export default SignUpScreen;
