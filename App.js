import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/welcomeScreen/welcomeScreen';
import SignupScreen from './screens/signUpScreen.js/signUpScreen';
import ForgotPasswordScreen from './screens/forgotPassword/forgotPassword';
import HomeScreen from './screens/homeScreen/homeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack Navigator for screens
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Sign Up" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// App Component
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login/ Sign Up" component={MyStack} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: 'Home' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;