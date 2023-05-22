import { StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    ball: {
        width: 60,
        height: 60,
        backgroundColor: colors.primary,
        borderRadius: 50,
        borderColor: colors.secundary,
        margin: 10
    }
})