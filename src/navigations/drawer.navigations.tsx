import React from "react";
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Screenperfil } from "../screens"
import { colors } from "../styles/colors"
import { Ionicons } from "@expo/vector-icons";
type DrawerParamList = {
    Perfil: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, "Perfil">
export type TabParamList = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>();
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle :{
                backgroundColor: colors.primary
            },
            drawerActiveTintColor: colors.white
        }}  >

            <Drawer.Screen name="Perfil" component={Screenperfil}
                options={{
                
                }}
            />
        </Drawer.Navigator>
    );
}