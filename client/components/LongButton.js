import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const LongButton = ({ text, onPress}) => {
    return (
        <View style={{height: '10%', width: '100%', justifyContent:'center', alignItems: 'center'}}>
            <View style={{maxWidth: 400, width: "90%"}}>
                <TouchableOpacity style={styles.defaultButton} onPress={() => onPress()}> 
                    <Text style={styles.buttonText}>{text} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    defaultButton: {
        backgroundColor: "#D9D9D9",
        border: "none",
        padding: 10,
        height: 40,
        borderRadius: 14,
    
        cursor: "pointer"
    },
    buttonText: {
        fontFamily: "Arial",
        color: "black",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 700,
    }
})
export default LongButton