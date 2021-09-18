import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {

    const { 
            numero,
            numeroAnterior,
            limpiar,
            positivoNegativo, 
            borrar,
            operacionDividir,
            operacionSumar,
            operacionRestar,
            operacionMultplicar,
            armarNumero,
            calcular
            
         } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                ( numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {numero}
            </Text>

            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto="C" color="#9b9b9b" action={  limpiar  }/>
                <BotonCalc texto="+/-" color="#9b9b9b" action={ positivoNegativo }/>
                <BotonCalc texto="DEL" color="#9b9b9b" action={  borrar  }/>
                <BotonCalc texto="/" color="#f74545" action={  operacionDividir  }/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="7" action={ armarNumero }/>
                <BotonCalc texto="8"action={ armarNumero }/>
                <BotonCalc texto="9"action={ armarNumero }/>
                <BotonCalc texto="X" color="#f74545" action={ operacionMultplicar }/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" action={ armarNumero }/>
                <BotonCalc texto="5"action={ armarNumero }/>
                <BotonCalc texto="6"action={ armarNumero }/>
                <BotonCalc texto="-" color="#f74545" action={ operacionRestar }/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" action={ armarNumero }/>
                <BotonCalc texto="2"action={ armarNumero }/>
                <BotonCalc texto="3"action={ armarNumero }/>
                <BotonCalc texto="+" color="#f74545" action={ operacionSumar }/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="0" ancho = { true } action={ armarNumero }/>
                <BotonCalc texto="."action={ armarNumero } />
                <BotonCalc texto="=" color="#f74545" action={ calcular }/>
            </View>
        </View>
    )
}
