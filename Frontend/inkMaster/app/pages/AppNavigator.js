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
// import HomeScreen from './screens/HomeScreen';
import GallerySample from './screens/GallerySample';
import UpdateAccInfo from './screens/UpdateAccInfo';
import Appointments from './screens/Appointments';
import ImageUpload from './screens/ImageUpload';
import ArtistHomeScreen from './screens/Artist/ArtistHomeScreen';
import CustomerHomeScreen from './screens/Customer/CustomerHomeScreen';

//stack navigator
// const CustomerAppStack = createStackNavigator(
//   { 
//     CustomerHome: CustomerHomeScreen, 
//     Gallery: GallerySample,
//     Settings: UpdateAccInfo
//   }
// );

// const ArtistAppStack = createStackNavigator(
//   { 
//     ArtistHome: ArtistHomeScreen, 
//     Gallery: GallerySample,
//     Settings: UpdateAccInfo
//   }
// );

//tab navigator
const CustomerAppStack = createBottomTabNavigator(
  { 
    Home: CustomerHomeScreen, 
    Gallery: GallerySample,
    UpdateAccInfo: UpdateAccInfo,
    Appointments: Appointments,
    Settings: UpdateAccInfo
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        // if (routeName === 'Home') {
        //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        //   // Sometimes we want to add badges to some icons. 
        //   // You can check the implementation below.
        //   IconComponent = HomeIconWithBadge; 
        // } else if (routeName === 'Settings') {
        //   iconName = `ios-options`;
        // }

        // // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
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
        // if (routeName === 'Home') {
        //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        //   // Sometimes we want to add badges to some icons. 
        //   // You can check the implementation below.
        //   IconComponent = HomeIconWithBadge; 
        // } else if (routeName === 'Settings') {
        //   iconName = `ios-options`;
        // }

        // // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

//drawer navigator
// const CustomerAppStack = createDrawerNavigator(
//   { 
//     Home: CustomerHomeScreen, 
//     Gallery: GallerySample,
//     UpdateAccInfo: UpdateAccInfo,
//     Appointments: Appointments,
//     Settings: UpdateAccInfo
//   }
// );

// const ArtistAppStack = createDrawerNavigator(
//   { 
//     Home: ArtistHomeScreen, 
//     Gallery: GallerySample,
//     ImageUpload: ImageUpload,
//     Settings: UpdateAccInfo
//   }
// );

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
