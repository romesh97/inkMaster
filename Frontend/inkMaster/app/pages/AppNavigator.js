import React from 'react';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

import AuthLoading from './screens/AuthLoading';
import AccountTypeScreen from './screens/AccountTypeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import GallerySample from './screens/GallerySample';
import UpdateAccInfo from './screens/UpdateAccInfo';

const AppStack = createStackNavigator(
  { 
    Home: HomeScreen, 
    Gallery: GallerySample,
    UpdateAccInfo: UpdateAccInfo 
  }
);

const AuthStack = createStackNavigator(
  {
    AccountType : AccountTypeScreen, 
    SignIn: SignInScreen, 
    SignUp :  SignUpScreen 
  }
);

export default createAppContainer(

  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )

);