import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#3174e8",
        alignItems: 'center',
        justifyContent: 'center',
    },
      buttonContainer: {
        width: 200,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
      childContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        width:300,
        height:480,
        margin:20,
        padding:20
    }
});