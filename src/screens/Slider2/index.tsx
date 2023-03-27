import React from "react"
import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMaker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
    const slide2 = require("../../assets/slide2.png")
    const slide2Texts = [
        { id: '1', text: ' Agenda de Jogos'},
        { id: '2', text: ' Classificaçao'},
        { id: '3', text: ' College'},
    ]
    return (
        <ImageBackground source={slide2} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Jogos' />
                <FlatList
                  data={slide2Texts}
                  renderItem={({ item }) =>
                    <ComponentListMaker key={item.id} textMarker={item.text} />
            }   
            keyExtractor={(item) => item.id} 
            />     
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} page={false} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} page={true} />
                <ComponentButtonSlider onPressI={() => setPageI(3)} page={false} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} page={false}/>
            </View>
        </ImageBackground>
    );
}