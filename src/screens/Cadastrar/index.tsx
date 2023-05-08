import React from "react"
import { View, KeyboardAvoidingView, Text } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors"
import {ComponentButtonInterface} from "../../components"
import { LoginTypes } from "../../navigations/login.navigation";
import { Navigations } from "../../navigations";

export function Cadastrar( {navigation}: LoginTypes) {

  return (

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
          />
        </View>
        <ComponentButtonInterface title="Salvar" type="primary" onPressI={() => { navigation.navigate ('Drawer')}} />
        <ComponentButtonInterface title="Login" type="primary" onPressI={() => {navigation.navigate ('Login')}} />
      </KeyboardAvoidingView>
    </View>
    
  )
}