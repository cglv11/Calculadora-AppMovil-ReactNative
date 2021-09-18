import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 15
    },
    resultadoPequeno: {
        color: '#606060',
        fontSize: 30,
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400'
    }
});