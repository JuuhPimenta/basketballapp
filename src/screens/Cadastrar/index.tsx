import React, { useEffect, useState } from "react"
import { View, KeyboardAvoidingView, Text, Alert } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors"
import { ComponentButtonInterface, ComponentLoading } from "../../components"
import { LoginTypes } from "../../navigations/login.navigation";
import { Navigation } from "../../navigations";
import { IRegister } from "../../services/data/User";
import { AxiosError } from "axios";
import { apiUser } from "../../services/data";


export interface IErrorApi {
  errors: {
    rule: string,
    field: string,
    message: string
  }[]
}


export function Cadastrar({ navigation }: LoginTypes) {
  const [data, setData] = useState<IRegister>()
  const [isLoading, setIsLoading] = useState(true)
  function handleChange(item: IRegister) {
    setData({ ...data, ...item })
  }
  async function handleRegister() {
    try {
      setIsLoading(true)
      if (data?.name && data.email && data.password) {
        console.log(data)
        const response = await apiUser.register(data)
        Alert.alert(`${response.data.name} cadastrado !!!`)
        navigation.navigate('Login')
      } else {
        Alert.alert("Preencha todos os campos !!")
      }
    } catch (error) {
      const err = error as AxiosError
      const errorData = err.response?.data as IErrorApi
      let message = ""
      if (errorData) {
        for (const iterator of errorData.errors) {
          message = `${message} ${iterator.message} \n`
        }
      }
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {isLoading ? (
        <ComponentLoading />
      ) : (

        <View style={styles.container}>
          <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastrar</Text>
            <View style={styles.formRow}>
              <Feather name="user" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor={colors.third}
                autoCapitalize="none"
                onChangeText={(i) => handleChange({ name: i })}
              />
            </View>
            <View style={styles.formRow}>
              <MaterialIcons name="email" style={styles.icon} />
              <TextInput
                placeholder="E-mail"
                placeholderTextColor={colors.third}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(i) => handleChange({ email: i })}
              />
            </View>

            <View style={styles.formRow}>
              <FontAwesome name="key" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={colors.third}
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(i) => handleChange({ password: i })}
              />
            </View>
            <ComponentButtonInterface title="Salvar" type="primary" onPressI={handleRegister} />
            <ComponentButtonInterface title="Login" type="primary" onPressI={() => { navigation.navigate('Login') }} />
            <Text style={styles.letra}>Já tem uma conta?</Text>
          </KeyboardAvoidingView>
        </View>

      )}
    </>
  );
}