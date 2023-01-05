import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Images, Fonts} from '../../../../theme';
import {Image, View, Text} from 'react-native';

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
    // <SafeAreaView style={styles.container}>
    <View style={styles.passwordConfermationContainer}>
      <View style={styles.imagePCViewStyle}>
        <Image
          source={Images.login}
          style={styles.imagePCStyle}
        />
      </View>

      {/* <ScrollView> */}
      <View style={styles.imagePCViewStyle}>
          <Text style={[Fonts.h4, Fonts.weight1]}>
            {strings.start}
          </Text>
          <Text style={[Fonts.small, Fonts.weight4,styles.createPasswordTextMargin]}>
            {strings.loginText}
          </Text>
        

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
              <View style={styles.inputFieldContainer}>
                <InputField
                  leftIcon={'email'}
                  placeholder={Strings.emailPlaceholder}
                  text={values.username}
                  setText={handleChange('username')}
                  error={errors.username && errors.username}
                />
                <InputField
                  leftIcon={'key-variant'}
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

              <TouchableOpacity onPress={()=> navigation.navigate('ResetPasswordScreen')}>
                <Text style={[Fonts.extraSmall, styles.forgotPassword]}>
                  {strings.forgotPassword}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> navigation.navigate('PasswordConfirmationScreen')}>
                <Text style={[Fonts.extraSmall, styles.forgotPassword]}>
                  {strings.forgotConfermation}
                </Text>
              </TouchableOpacity>

                <FullwidthButton
                  labelStyle
                  notApplyMargin
                  label={Strings.login}
                  onPress={handleSubmit}
                  loading={status === Status.LOADING}
                />
            </>
          )}
        </Formik>
        
        </View>
      {/* </ScrollView> */}
    </View>
  )
};

SigninScreen.propTypes = propTypes;
SigninScreen.defaultProps = defaultProps;

export default SigninScreen;
