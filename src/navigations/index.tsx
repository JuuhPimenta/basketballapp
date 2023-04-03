import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {LoginNavigation} from "./login.navigation"

export function Navigations() {
  return (
    <NavigationContainer>
      <LoginNavigation/>
    </NavigationContainer>
  );
}