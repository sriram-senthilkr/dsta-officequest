import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SelectList} from 'react-native-dropdown-select-list'
import BackButton from '../../components/BackButton'
import LongInput from '../../components/LongInput'
import LongButton from '../../components/LongButton'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { createQuest } from '../../api/quest'
import { useNavigation } from '@react-navigation/native'


const AddQuestScreen = () => {
    const [quest, setQuest] = useState({
        title: '',
        description:'',
        type:'',
        points: 0,
    })
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [openStart, setOpenStart] = useState(false)
    const [openEnd, setOpenEnd] = useState(false)
    const navigation = useNavigation()

    const handleSubmit = async () => {
        try {
            const resp = await createQuest(quest.title, quest.description, quest.type, quest.points, startDate, endDate)
            if (resp.error === true) {
                return console.log(resp.message)
            }
            console.log(resp.data)
            navigation.goBack()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.page}>
            <View style={styles.topBar}>
                <BackButton/>
            </View>
            <View style={{ alignItems: 'flex-start', width:'100%'}}>
                <Text style={{ fontSize: 35, fontWeight: 900}}>Add Quest</Text>
            </View>
            <View style={{width:'100%', alignItems:'center'}}>
                <LongInput label="Title" placeholder="Quest Name" onChangeText={(title) => setQuest({...quest, title: title})}/>
                
                <View style={{width:'100%', justifyContent:'center', paddingHorizontal:20, marginTop:10, zIndex:99}}>
                    <Text style={{fontSize:15, fontWeight:700, paddingBottom:10}}>Type</Text>
                    <SelectList
                        dropdownStyles={styles.dropdownStyles}
                        dropdownItemStyles={styles.dropdownItemStyles}
                        dropdownTextStyles={styles.dropdownTextStyles}
                        boxStyles={styles.boxStyles}
                        inputStyles={styles.inputStyles}  
                        setSelected={(type) => setQuest({...quest, type: type})}
                        data={SELECTION} 
                        save="value"
                        placeholder='Select'
                        showsVerticalScrollIndicator={false}
                        search={false}
                    />  
                </View>
                <LongInput label="Description" placeholder="Short description" onChangeText={(desc) => setQuest({...quest, description: desc})}/>
                <LongInput label="Points" placeholder="200" onChangeText={(points) => setQuest({...quest, points: points})}/>
                
                
                <Text style={{textAlign:'left', fontSize:20, marginTop: 20}}>{startDate.toString()}</Text>
                <LongButton text="Pick Start Date" color="#B1b1b1" onPress={() => setOpenStart(true)}/>

                <DateTimePickerModal
                    isVisible={openStart}
                    mode="date"
                    onConfirm={(date) => {
                        setOpenStart(false)
                        setStartDate(date)
                    }}
                    onCancel={() => {
                        setOpenStart(false)
                    }}
                    isDarkModeEnabled={true}
                />
                <Text style={{textAlign:'left', fontSize:20}}>{endDate.toString()}</Text>
                <LongButton text="Pick End Date" color="#B1b1b1" onPress={() => setOpenEnd(true)}/>
                <DateTimePickerModal
                    isVisible={openEnd}
                    mode="date"
                    onConfirm={(date) => {
                        setOpenEnd(false)
                        setEndDate(date)
                    }}
                    onCancel={() => {
                        setOpenEnd(false)
                    }}
                    isDarkModeEnabled={true}
                />
            </View>
            <View style={{width:'100%'}}>
                <LongButton text="Add" onPress={()=>handleSubmit()}/>
            </View>
        </View>
    )
}

const SELECTION = [
    {key:'1', value:'qr'},
    {key:'2', value:'quiz'},
    {key:'3', value:'daily'},
]

const styles = StyleSheet.create({
    page: {
        height: "100%",
        width: "100%",
        minWidth: 330,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily: "Arial",
        paddingTop: 40,
        padding: 20
    },
    topBar: {
        height: "10%",
        width:"100%",
        alignItems: "center",
        flexDirection: "row",
        
    },
    dropdownStyles: {
        position:"absolute",
        width:"100%",
        zIndex:99,
        backgroundColor:"white",
        borderColor:"#DADADA",
        top: 40,
    },
    dropdownItemStyles: {
        width:"100%",
        backgroundColor:"white",
    },
    dropdownTextStyles: {
        color: "#6A6A6A",
        backgroundColor:'white'
    },
    boxStyles: {
        width:"100%",
        borderColor:"#DADADA",
        backgroundColor:"white",
    },
    inputStyles: {
        color: "#6A6A6A",
    },
    mediumText: {
        fontSize: 30,
        fontWeight: 500,
        color: "#6A6A6A",
        fontFamily: "Arial",
        alignSelf:'flex-start'
    },
    bodyText: {
        width:"100%",
        fontSize: 18,
        fontFamily: "Arial",
    },
})

export default AddQuestScreen