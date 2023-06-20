import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const LongButton = ({ text, onPress, color, textColor }) => {
    const col = color ? color : '#D9D9D9'
    const tcol = textColor ? textColor : 'black'
    return (
        <View style={{height: '10%', width: '100%', justifyContent:'center', alignItems: 'center'}}>
            <View style={{maxWidth: 400, width: "90%"}}>
                <TouchableOpacity style={[styles.defaultButton, { backgroundColor: col, justifyContent:'center', alignItems: 'center'}]} onPress={() => onPress()}> 
                    <Text style={[styles.buttonText, {color: tcol}]}>{text} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    defaultButton: {
        border: "none",
        padding: 10,
        height: 40,
        borderRadius: 14,
        cursor: "pointer"
    },
    buttonText: {
        fontFamily: "Arial",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 700,
    }
})
export default LongButton