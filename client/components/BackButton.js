import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{ width:40, height: 40, borderRadius:14, backgroundColor:'#D9D9D9', alignItems:'center', justifyContent:'center'}} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" color="#444" size={20}/>
        </TouchableOpacity>
    )
}

export default BackButton