import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastrar } from '../screens';
import { TabNavigation } from './tab.navigations'
import { DrawerNavigation } from './drawer.navigations';
import { CameraScreen } from '../screens/Camera';
type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
  Tab: undefined;
  Drawer: undefined;
  Camera: undefined;
};

type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigation
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
      <Stack.Screen name="Camera" component={CameraScreen}/>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation}/>
      
    </Stack.Navigator>
  );
}