
import React, { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const  limpiar  = () => {
        setNumero('0');
        setNumeroAnterior('0')
    }

    const borrar  = () => {

        let negativo = ''
        let numeroTemp = numero
        if ( numero.includes('-')) {
            negativo = '-'
            numeroTemp = numero.substr(1)
        }

        if ( numeroTemp.length > 1 ) {
            setNumero( negativo + numeroTemp.slice(0,-1) )
        } else {
            setNumero('0')
        }

        // var nuevo = numero.length - 1;
        // var nuevoNumero = numero.substring(0, nuevo)

        // if ( nuevoNumero.length === 0) {
        //     setNumero('0')
        // } else {

        //     setNumero(nuevoNumero)
        // }
    }

    const  armarNumero  = ( numeroTexto: string ) => {
    
        // No acepta doble punto

        if ( numero.startsWith('0') || numero.startsWith('-0') ) {
            
            // punto decimal
            if ( numeroTexto === '.') {
                setNumero( numero + numeroTexto )

                // evaluar si es otro cero, y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.') ) {
                setNumero( numero + numeroTexto )

                // evaluar si es diferente de cero y no tiene un punto
            } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero( numero.replace('0', numeroTexto) )

                // evitar 0000.0
            } else if ( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero( numero )
            } else {
                setNumero( numero + numeroTexto )
            }

        } else {
            
            setNumero( numero + numeroTexto )
        }

    }

    const cambiarNumeroPorAnterior = () => {
        if( numero.endsWith('.')) {
            setNumeroAnterior( numero.slice(0, -1))
        } else {
            setNumeroAnterior( numero )
        }

        setNumero('0')
    }

    const positivoNegativo = () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace('-', ''))
        } else {
            setNumero( '-' + numero )
        }
    }

    const operacionDividir  = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.dividir;
    }

    const operacionMultplicar  = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const operacionRestar  = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.restar;
    }

    const operacionSumar  = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {

        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );
        
        switch ( ultimaOperacion.current ) {
            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` )
                break;
            case Operadores.restar:
                setNumero( `${ num2 - num1 }` )
                break;
            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` )
                break;
            case Operadores.dividir:
                setNumero( `${ num2 / num1 }` )
                break;
        }

        setNumeroAnterior('0')
    }

    return {
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
    }
} 