import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Login/SplashScreen'
import LoginScreen from './src/Login/Login'
import RegistrationScreen from './src/Login/RegistrationScreen'
import { FontFix } from './src/Utils/FontFix'
FontFix()

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
        
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />

        {/* <Stack.Screen name='Registration' component={RegistrationScreen}
        options={{
          title: 'Registration',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: Color.Header,
          },
          headerTintColor: Color.White,
        }}/> */}

        
      </Stack.Navigator>
    </NavigationContainer>);
}

export default App;