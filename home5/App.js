import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Registration } from './screens/RegistrationScreen';
import { Login } from './screens/LoginScreen';
import { useFonts } from 'expo-font';
import { Home } from './screens/HomeScreen';
import { BackButton } from './components/BackButton';
import { CommentsScreen } from './screens/CommentsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  const MainStack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: 'Коментарі',
            headerShown: true,
            headerLeft: () => <BackButton />,
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
