import React from "react";
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenCamera, Screenperfil, LocationScreen, ScreenAcelerometer} from "../screens"
import { colors } from "../styles/colors"
import { Ionicons, Feather, MaterialIcons, FontAwesome} from "@expo/vector-icons";
type TabParamList = {
    Perfil: undefined
    Camera: undefined
    Location: undefined
    Acelerometer: undefined
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
                        <Ionicons name="person" color={colors.black} size={24} />
                    )
                }}
            />
            <Tab.Screen name="Camera" component={ScreenCamera}
                options={{
                    tabBarIcon: () => (
                        <Feather name="camera" size={24} color="black" />
                    )
                }

                }
            />
            <Tab.Screen name='Location' component={LocationScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="location-pin" size={24} color="black" />
                    )
                }}
            />

            <Tab.Screen name='Acelerometer' component={ScreenAcelerometer}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="car" size={24} color="black" />
                    )
                }}
            />
      
        </Tab.Navigator >

    );
}