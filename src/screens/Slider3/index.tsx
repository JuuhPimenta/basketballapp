import React from "react";
import { FlatList, View } from "react-native/types";
import { IPage } from "../../../App";
import { ComponentButtonSlider, ComponentListMaker, ComponentTitleSlider } from "../../components";
import { styles } from "./styles";

export function Slider3({ setPageI }: IPage){
    const slide1Texts = [
        { id: '1', text: 'Notas'},
        { id: '2', text: 'Intervalos'},
        { id: '3', text: 'Acordes'},
    ]
    return(
        <>
        <View style={styles.panel}>
            <ComponentTitleSlider titleI="Pricipais"/>
            <FlatList
                data={slide1Texts}
                renderItem={({ item }) => 
                    <ComponentListMaker key={item.id} textMarker={item.text}/>
                } 
                keyExtractor={(item) => item.id}
            />
        </View>
        <View style={styles.buttonSlider}>
            <ComponentButtonSlider onPressI={() => setPageI(1)}/>
            <ComponentButtonSlider onPressI={() => setPageI(2)}/>
            <ComponentButtonSlider onPressI={() => setPageI(3)}/>
            <ComponentButtonSlider onPressI={() => setPageI(4)}/>
        </View>
        </>
    );
}