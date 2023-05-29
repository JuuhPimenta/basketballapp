import { StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
     
    },
    camera: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: 10
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flexDirection: 'row',
      marginBottom: '10%',
      justifyContent: 'space-around'
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    img: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,

    },
    sorriso: {
      flex: 1,
      justifyContent: 'center' ,
      alignItems: 'center',
    
    },
    textf: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    }

  });
  