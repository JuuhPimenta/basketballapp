import { StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    buttonPrimary: {
    
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10
    },
    buttonSecundary: {
    
        backgroundColor: colors.secundary,
        borderRadius: 5,
        margin: 10
    },
    buttonGrey: {
    
        backgroundColor: colors.grey,
        borderRadius: 5,
        margin: 10
    },
    text: {
        color: colors.white,
        fontWeigth: "bold",
        fontSize: 18, 
        padding: 10,
        textAlign: 'center'
    }
})
    