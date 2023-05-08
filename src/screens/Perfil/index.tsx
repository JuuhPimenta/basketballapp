
import { Component } from 'react'
import {View,Text} from 'react-native'
import { ComponentButtonInterface } from '../../components'
import { TabTypes } from '../../navigations/tab.navigations'
import {styles} from "./styles"


export function perfil({navigation}: TabTypes){{
    function handleVoltar (){
        const tab = navigation.getParent()
        tab?.goBack
    }
    return(
        <View>
            <Text>    Perfil</Text>
            <ComponentButtonInterface title='Voltar' type='secundary' onPressI={handleVoltar} />
        </View>

    )
}}