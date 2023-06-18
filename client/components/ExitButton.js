import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';

const ExitButton = () => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{ borderRadius:10, backgroundColor:'#D9D9D9', alignItems:'center'}}>
            <Ionicons name="close-outline" size={30}/>
        </TouchableOpacity>
    )
}

export default ExitButton