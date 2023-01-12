import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Images, Fonts, Colors, ApplicationStyles} from '../../../../theme';
import {Image, View, Text, SafeAreaView} from 'react-native';

import {
  FullwidthButton,
  InputField,
} from '../../../../components/common';

import Strings from '../../../../constants/strings';
import {styles} from '../styles';
import {signIn} from '../../../../actions/AccountActions';
import {useDispatch, useSelector} from 'react-redux';
import Status from '../../../../constants/status';
import { Formik } from 'formik';
import {signInValidation} from './Validation';
import strings from '../../../../constants/strings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

const propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};



const defaultProps = {};

const SigninScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const {status, user} = useSelector(({AccountState}) => AccountState);
 
  const handleSubmitEvent = values => {  
    setError('');
    dispatch(
      signIn(
        {
          username: values.username,
          password: values.password,
        },
        setError,
      ),
    );
  };

  return (
     <SafeAreaView >
      <Image
         source={Images.background}
         style={styles.image}
      />
      <Image
         source={Images.background2}
         style={styles.image2}
      />

      <View style={{alignItems:'center', marginTop: 20, flexDirection:'column'}}>
        <Text style={{fontWeight:'600', fontSize: 30}}>{strings.start}</Text>
        <Text style={{fontWeight:'400', fontSize: 22, color: '#556062', marginTop: 15}}>{strings.loginText}</Text>
      </View>

      <Formik
          validationSchema={signInValidation}
          validateOnChange={false}
          initialValues={{username: '', password: ''}}
          onSubmit={values => {
            handleSubmitEvent(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <View style={[styles.inputFieldContainer, ApplicationStyles.shadow]}>
                <InputField
                  placeholder={Strings.emailPlaceholder}
                  text={values.username}
                  setText={handleChange('username')}
                  error={errors.username && errors.username}
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

              <TouchableOpacity>
                <Text style={[Fonts.weight3, styles.forgotPassword, {color: Colors.black, marginBottom:5}]}> {strings.forgotPassword}</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={()=> navigation.navigate('PasswordConfirmationScreen')}>
                <Text style={[Fonts.extraSmall, styles.forgotPassword]}>
                  {strings.forgotConfermation}
                </Text>
              </TouchableOpacity> */}

                <FullwidthButton
                  labelStyle
                  label={Strings.login}
                  onPress={handleSubmit}
                  loading={status === Status.LOADING}
                />
            </>
          )}
        </Formik>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Divider style={{width: 100, marginLeft: 20, marginRight: 20}} />
          <Text style={{color: Colors.lightBlack2}}>Or continue with</Text>
          <Divider style={{width: 100,marginLeft: 20, marginRight: 20}} />
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin: 30}}>
              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 4,
                padding: 18,
                position:'relative',
              }} 
              onPress={()=> navigation.navigate('HomeScreen')}>
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
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"center"}}>
          <Text style={{fontWeight:"600"}}>Not a member?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SignUpScreen')}>
          <Text style={{color:Colors.primary, fontWeight:"600"}}> Register now</Text>
          </TouchableOpacity>
        </View>

     </SafeAreaView>
     
  )
};

SigninScreen.propTypes = propTypes;
SigninScreen.defaultProps = defaultProps;

export default SigninScreen;
