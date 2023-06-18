import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const LongInput = ({ label, placeholder, value, onChangeText, password }) => {
    const secure = password ? true : false
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.normalBoldText}>{label}</Text>
            <TextInput style={styles.textInput}
                placeholder={placeholder}
                value={value} 
                onChangeText={onChangeText} 
                autoCapitalize="none" 
                autoCorrect={false} 
                secureTextEntry={secure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    normalBoldText: {
        fontSize: 15,
        fontWeight: 700,
        fontFamily: "Arial",
        paddingVertical:10
    },
    textInput: {
        height: 45,
        color: "#6A6A6A",
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        borderColor: "#DADADA",
    },
  
    inputContainer: {
        paddingVertical:5,
        width:'90%',
        maxWidth: 450
    }
});

export default LongInput