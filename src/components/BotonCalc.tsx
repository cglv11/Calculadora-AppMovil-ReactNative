import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
    action: ( numeroTexto: string ) => void;
}

export const BotonCalc = ( { texto, color = '#2d2d2d', ancho = false, action}: Props ) => {
    return (
            <TouchableNativeFeedback 
                onPress={() => action (texto)}
                background={TouchableNativeFeedback.Ripple('#d1cfcf', true, 40)} >

                <View style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: ( ancho ) ? 180 : 80
                }}>
                    <Text style={{
                        ...styles.botonText,
                        color: ( color === '#9b9b9b') ? 'black' : 'white',
                        }}>{texto}</Text>
                </View>

            </TouchableNativeFeedback>
                
    )
}


