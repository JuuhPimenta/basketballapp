import React from "react";
import { FlatList,ImageBackground, View } from 'react-native';
import { IPage } from "../../../App";
import { ComponentButtonSlider, ComponentListMaker, ComponentTitleSlider } from "../../components";
import { styles } from "./styles";

export function Slider3({ setPageI }: IPage){
    const slide3 = require("../../assets/slide2.png")
    const slide1Texts = [
        { id: '1', text: ' Europa League'},
        { id: '2', text: ' NBB'},
        { id: '3', text: ' FIBA'},
    ]
    return(
        <ImageBackground source={slide3} style={styles.container} >
        <View style={styles.panel}>
            <ComponentTitleSlider titleI="Outras Ligas"/>
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
            <ComponentButtonSlider onPressI={() => setPageI(3)} page={true}/>
            <ComponentButtonSlider onPressI={() => setPageI(4)} page={false}/>
            <ComponentButtonSlider onPressI={() => setPageI(5)} page={false}/>
        </View>
        </ImageBackground>
    );
}