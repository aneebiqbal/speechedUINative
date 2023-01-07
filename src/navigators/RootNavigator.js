import * as React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationStyles} from '../theme';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from '../containers/screens/DrawerScreen/DrawerScreen';
import SigninScreen from '../containers/screens/AuthScreens/SigninScreen/SigninScreen';
import SignUpScreen from '../containers/screens/AuthScreens/SignUpScreen/index';
import HomeScreen from '../containers/screens/HomeScreen';

import {connect} from 'react-redux';
import CreateSpeechScreen from '../containers/screens/CreateSpeechScreen';
import FactsScreen from '../containers/screens/FactsScreen';
import SpeechToneScreen from '../containers/screens/SpeechToneScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode={'screen'}
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SigninScreen"
      headerMode={'screen'}
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateSpeechScreen"
        component={CreateSpeechScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="FactsScreen"
        component={FactsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpeechToneScreen"
        component={SpeechToneScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={props => <DrawerScreen {...props} />}>
    <Drawer.Screen
      name="drawer"
      component={AppStack}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

const AppNav = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: false,
      }}>
      <Stack.Screen name="modal" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const RootNavigator = ({loggedIn}) => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={ApplicationStyles.appbar.barStyle}
        backgroundColor={ApplicationStyles.appbar.statusBarColor}
      />
      <NavigationContainer>
        {loggedIn ? <AppNav /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = ({AccountState}) => {
  return {
    loggedIn: AccountState.loggedIn,
  };
};

export default connect(mapStateToProps, null)(RootNavigator);
