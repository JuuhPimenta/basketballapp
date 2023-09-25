import React, {useEffect,useState} from "react";
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Alert } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { IPage } from '../../../App';
import { ComponentTitleSlider, ComponentButtonSlider, ComponentButtonInterface } from '../../components';
import { colors } from "../../styles/colors";
import { styles } from "./styles";
import { LoginTypes } from "../../navigations/login.navigation"
import { useAuth } from "../../hooks/auth";
import { IAuthenticate, IUserLogin } from "../../services/data/User";
import { apiUser } from "../../services/data";
import { AxiosError } from "axios";

export interface IErrorApi{
  errors: {
      rule: string
      field: string
      message: string
  }[]
}

export function Login({navigation}:LoginTypes) {
  const { signIn } = useAuth();
  const [data,setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);
  
  async function handleSignIn(){
      try{
          setIsLoading(true);
          if(data?.email && data.password){
              await signIn(data);
          } else {
              Alert.alert("Preencha todos os campos");
              setIsLoading(false);
          }
      }catch(error){
          const err = error as AxiosError;
          const message = err.response?.data as string
          Alert.alert(message)
          setIsLoading(false)
      }
  }

  function handleChange(item: IAuthenticate){
      setData({...data, ...item})
  }

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      },2000)
  },[])

  return (

    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formRow}>
          <MaterialIcons name="email" style={styles.icon} />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={colors.third}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={(i) => handleChange({email: i})}
          />
        </View>
        
        <View style={styles.formRow}>
          <FontAwesome name="key" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={colors.third}
            secureTextEntry = {true}
            autoCapitalize="none"
            onChangeText={(i) => handleChange({email: i})}
          />
        </View>
        <ComponentButtonInterface title="Login" type="primary" onPressI={handleSignIn}/>
            <ComponentButtonInterface title="Cadastrar" type="primary" onPressI={()=>{navigation.navigate("Cadastrar")}}/>
            <Text style={styles.letra}>Ainda não tem uma conta?</Text>
      </KeyboardAvoidingView>
    </View>
    
  )
}