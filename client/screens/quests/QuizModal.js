import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import LongButton from '../../components/LongButton'
import ExitButton from '../../components/ExitButton'
import LongInput from '../../components/LongInput'
import useAuth from '../../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import { completeQuiz } from '../../api/user'


// eslint-disable-next-line no-unused-vars
const QuizModal = ({ route }) => {
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [error, setError] = useState(null)
    const navigation = useNavigation()
    const { user } = useAuth()

    const alert = (points) => 
        Alert.alert('Rewards', `${points}/600 rewarded`, [
            {
                text: 'Close',
                onPress: () => navigation.goBack(),
                style: 'cancel'
            }
        ]);

    const handleSubmit = async () => {
        let val = 0
        if (!answer1 || !answer2 || !answer3 || !answer4) {
            return setError("All fields must be filled")
        }
        if (answer1 === "2000") val++
        if (answer2.toLowerCase() === "mervyn") val++
        if (answer3 === "123456") val++
        if (answer4.toLowerCase() === "marina bay") val++

        const earned = val*150
        const resp = await completeQuiz(user._id, earned)
        if (resp.error === true) {
            setError(error)
        } else {
            setError(null)
            alert(earned)
        }

    }


    return (
        <View style={{ width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
            <View style={{ width:'90%', height:'90%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{ fontSize: 30, fontWeight: 700}}>Weekly Quiz</Text>
                    <ExitButton/>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginBottom:10 }}>
                    <LongInput label="When was the company founded?" placeholder="2000" value={answer1} onChangeText={(ans)=>setAnswer1(ans)}/>
                    <LongInput label="What is the name of our CEO?" placeholder="Jeve Stobs" value={answer2} onChangeText={(ans)=>setAnswer2(ans)}/>
                    <LongInput label="What is our postal code?" placeholder="123456" value={answer3} onChangeText={(ans)=>setAnswer3(ans)}/>
                    <LongInput label="What is the neares MRT station named?" placeholder="Rent Kidge" value={answer4} onChangeText={(ans)=>setAnswer4(ans)}/>
                </View>
                {error && 
                <View style={{ justifyContent:'center', alignItems:'center', color:'red'}}>
                    <Text style={{color:'red'}}>Error: {error}</Text>
                </View>
                }
                <LongButton text="Submit" onPress={()=>handleSubmit()}/>
            </View>
            
        </View>
    )
}

export default QuizModal