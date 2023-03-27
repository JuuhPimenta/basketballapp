import React from "react";
import { FlatList, View } from 'react-native';
import { IPage } from "../../../App";
import { ComponentButtonSlider, ComponentListMaker, ComponentTitleSlider } from "../../components";
import { styles } from "./styles";

export function Slider4({ setPageI }: IPage){
    const slide1Texts = [
        { id: '1', text: ' Escoleher Time'},
        { id: '2', text: ' Dados Pessoais'},
        { id: '3', text: ' Configuraçoes'},
    ]
    return(
        <View style={styles.container}>
        <View style={styles.panel}>
            <ComponentTitleSlider titleI="Meu Perfil"/>
            <FlatList
                data={slide1Texts}
                renderItem={({ item }) => 
                    <ComponentListMaker key={item.id} textMarker={item.text}/>
                } 
                keyExtractor={(item) => item.id}
            />
        </View>
        <View style={styles.buttonSlider}>
            <ComponentButtonSlider onPressI={() => setPageI(1)} page={false}/>
            <ComponentButtonSlider onPressI={() => setPageI(2)} page={false}/>
            <ComponentButtonSlider onPressI={() => setPageI(3)} page={false}/>
            <ComponentButtonSlider onPressI={() => setPageI(4)} page={true}/>
        </View>
        </View>
    );
}
