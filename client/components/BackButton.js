import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigation.goBack()}>
            <View style={styles.backButton}>
              <Text><Ionicons name="chevron-back-outline" color="#444"/></Text>
            </View>
          </TouchableOpacity>
  )
}

export default BackButton