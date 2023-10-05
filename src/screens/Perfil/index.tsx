import React, {useEffect,useState} from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { ComponentButtonInterface } from "../../components";
import { TabTypes } from "../../navigations/tab.navigations";
import { useAuth } from "../../hooks/auth";
import { IAuthenticate } from "../../services/data/User";
import { AxiosError } from "axios"
import * as Notifications from 'expo-notifications';
import {registerForPushNotificationsAsync} from "../../services/data/Push"
import { TouchableOpacity } from "react-native-gesture-handler";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    }),
});

export function Perfil({ navigation }: TabTypes) {
    const { singOut } = useAuth();
    const[isLoading, setIsLoading] = useState(true);
    async function handleSignOut() {
        try {
            setIsLoading(true);
            await singOut();
        } catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading(false);
        }
    } [ singOut ];
    useEffect(() => {
        async function fetchToken() {
            const token = await registerForPushNotificationsAsync()
            console.log(token)
        }
        fetchToken()
    }, []);
    return (
        
        <View style={styles.container}>
            <Text>Perfil</Text>
            <ComponentButtonInterface title="Voltar" type="primary" onPressI={handleSignOut} />
        </View>
    )
}       