import React from 'react';
import { 
  createSwitchNavigator, 
  createStackNavigator,
  createBottomTabNavigator, 
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthLoading from './screens/AuthLoading';
import AccountTypeScreen from './screens/AccountTypeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import GallerySample from './screens/GallerySample';
import UpdateAccInfo from './screens/UpdateAccInfo';
import Appointments from './screens/Appointments';
import ImageUpload from './screens/ImageUpload';
import ArtistHomeScreen from './screens/Artist/ArtistHomeScreen';
import CustomerHomeScreen from './screens/Customer/CustomerHomeScreen';

const CustomerAppStack = createBottomTabNavigator(
  { 
    Home: CustomerHomeScreen, 
    Gallery: GallerySample,
    Appointments: Appointments,
    Settings: UpdateAccInfo
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const ArtistAppStack = createBottomTabNavigator(
  { 
    Home: ArtistHomeScreen, 
    Gallery: GallerySample,
    ImageUpload: ImageUpload,
    Settings: UpdateAccInfo
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const AuthStack = createStackNavigator({
  AccountType: AccountTypeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      CustomerApp: CustomerAppStack,
      ArtistApp: ArtistAppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
