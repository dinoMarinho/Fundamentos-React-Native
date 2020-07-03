import React from 'react'
import {SafeAreaView,Text, StyleSheet} from 'react-native'
import Estilo from '../estilo'

export default ({num}) =>{
    return(
        <SafeAreaView style={style.Container}>
            <Text style={[Estilo.txtG,style.Num]}>
                {num}
             </Text>
        </SafeAreaView>
        
    )
}

const style = StyleSheet.create({
    Container:{
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    Num:{
        color: '#fff'
    }
})