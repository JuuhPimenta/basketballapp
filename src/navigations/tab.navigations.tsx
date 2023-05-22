import React from "react";
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenCamera, Screenperfil } from "../screens"
import { colors } from "../styles/colors"
import { Ionicons, Feather } from "@expo/vector-icons";
type TabParamList = {
    Perfil: undefined
    Camera: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, "Perfil">
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>();
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: colors.white,
                tabBarActiveBackgroundColor: colors.primary,
                tabBarActiveTintColor: colors.white
            }}
        >

            <Tab.Screen name="Perfil" component={Screenperfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" color={colors.white} size={24} />
                    )
                }}
            />
            <Tab.Screen name="Camera" component={ScreenCamera}
                options={{
                    tabBarIcon: () => (
                        <Feather name="camera" size={24} color="white" />
                    )
                }

                }
            />
        </Tab.Navigator>

    );
}