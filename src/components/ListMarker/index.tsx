import { Text, View } from 'react-native';
import { Marker } from '../Marker';
import { styles } from './styles';
export interface ITexyMarker {
    textMarker: string
}
export function ListMarker({ textMarker }: ITexyMarker) {
    return (
        <View style={styles.listMarker}>
            <Marker />
            <Text style={styles.textMarker} >{textMarker}</Text>
        </View>
    )
}