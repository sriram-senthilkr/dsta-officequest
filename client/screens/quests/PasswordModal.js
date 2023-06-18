import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LongButton from '../../components/LongButton'
import ExitButton from '../../components/ExitButton'
import LongInput from '../../components/LongInput'

const PasswordModal = ({ route }) => {
    const { id, points } = route.params
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        console.log("submit")
        console.log("points ", points)
        console.log("id ", id)
    }

    return (
        <View style={{ width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
            <View style={{ width:'90%', height:'90%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{ fontSize: 30, fontWeight: 700}}>Input Password</Text>
                    <ExitButton/>
                </View>
                <View style={{ justifyContent:'center', alignItems:'center', marginTop: 20}}>
                    <LongInput label="Password" value={password} onChangeText={(ans)=>setPassword(ans)}/>

                    
                </View>
                <LongButton text="Validate" onPress={()=>handleSubmit()}/>
                
            </View>
            
        </View>
    )
}

export default PasswordModal