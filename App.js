import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/welcomeScreen/welcomeScreen';
import SignupScreen from './screens/signUpScreen.js/signUpScreen';
import ForgotPasswordScreen from './screens/forgotPassword/forgotPassword';
import HomeScreen from './screens/homeScreen/homeScreen';
import BusinessProfileScreen from './screens/businessProfileScreen/businessProfileScreen';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator for Auth Screens
function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="WelcomeHome" component={WelcomeScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Sign Up" component={SignupScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Forgot Password" component={ForgotPasswordScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}

// Stack Navigator for Main App Screens
function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="Business Profile" component={BusinessProfileScreen} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login/ Sign Up" component={AuthStackNavigator} />
        <Drawer.Screen name="Home" component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
