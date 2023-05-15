import React from "react";
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenCamera, Screenperfil } from "../screens"
import { colors } from "../styles/colors"
import { Ionicons, Feather } from "@expo/vector-icons";
type DrawerParamList = {
    Perfil: undefined
    Camera: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, "Perfil">
export type TabParamList = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>();
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: colors.primary
            },
            drawerActiveTintColor: colors.white
        }}  >

            <Drawer.Screen name="Perfil" component={Screenperfil}
                options={{

                    drawerIcon: () => (
                        <Feather name="camera" size={24} color="black" />

                    )
                }
                }
            />

            <Drawer.Screen name="Camera" component={ScreenCamera} />
        </Drawer.Navigator>
    );
}