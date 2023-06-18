import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LongButton from '../../components/LongButton'
import ExitButton from '../../components/ExitButton'
import LongInput from '../../components/LongInput'


const QuizModal = ({ route }) => {
    const navigation = useNavigation()
    const { id, points } = route.params
    const [answer1, setAnswer1] = useState()
    const [answer2, setAnswer2] = useState()
    const [answer3, setAnswer3] = useState()
    const [answer4, setAnswer4] = useState()

    const handleSubmit = () => {
        console.log("submit")
        console.log("points ", points)
        console.log("id ", id)
    }

  return (
    <View style={{ width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
        <View style={{ width:'90%', height:'90%'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{ fontSize: 30, fontWeight: 700}}>Weekly Quiz</Text>
                <ExitButton/>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <LongInput label="When was the company founded?" placeholder="2000" value={answer1} onChangeText={(ans)=>setAnswer1(ans)}/>
                <LongInput label="What is the name of our CEO?" placeholder="Jeve Stobs" value={answer2} onChangeText={(ans)=>setAnswer2(ans)}/>
                <LongInput label="What is our postal code?" placeholder="123456" value={answer3} onChangeText={(ans)=>setAnswer3(ans)}/>
                <LongInput label="What is the neares MRT station named?" placeholder="Rent Kidge" value={answer4} onChangeText={(ans)=>setAnswer4(ans)}/>
            </View>
            <LongButton text="Submit" onPress={()=>handleSubmit()}/>
        </View>
        
    </View>
  )
}

export default QuizModal