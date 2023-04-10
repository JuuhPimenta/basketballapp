import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles'
export interface IBInterface extends TouchableOpacityProps {
    onPressI: () => void
    title: string
    type: "primary" | "secundary" | "grey"
}
export function ButtonInterface({ onPressI, title, type, ...rest }: IBInterface) {
    return (
    <TouchableOpacity style={
            type == "primary" ? styles.buttonPrimary :
                type == "secundary" ? styles.buttonSecundary :
                    styles.buttonGrey 
    } onPress={onPressI}
        {...rest}
    >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}