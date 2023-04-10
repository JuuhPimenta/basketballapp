import React from "react";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastrar, ScreenLogin } from "../screens"
type LoginStackParamList = {
  login: undefined
  Cadastrar: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, "login">
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
    </Stack.Navigator>
  );
}