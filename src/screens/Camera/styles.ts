import { StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
     
    },
    camera: {
      flex: 3,
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
      justifyContent:"flex-end"
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    img: {
        flex: 0.90,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        

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
    },
    seta : {
      flexDirection: 'column',
      marginBottom: '75%',
    },
    voltar: {
      marginLeft: '5%',
      marginBottom: '10%',
    }
  });
  