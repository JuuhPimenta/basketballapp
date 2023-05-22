import React from 'react-native'
import { TouchableOpacity,TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

export function ButtonTakePicture({ onPress, ...rest }: TouchableOpacityProps){
    return (
        <TouchableOpacity style={styles.ball} onPress={onPress} {...rest} />
    )
}