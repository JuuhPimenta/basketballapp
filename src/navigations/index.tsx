import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {LoginNavigation} from "./login.navigation";
import { useAuth } from "../hooks/auth";
import { TabNavigation } from './tab.navigations';
export function Navigation() {
  const {user} = useAuth();
  console.log(user)
  return (
    <NavigationContainer>
      {user?.token ? <TabNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  )
}

