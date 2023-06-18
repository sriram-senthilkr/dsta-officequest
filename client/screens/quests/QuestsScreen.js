import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from "react";
import BottomNavigator from '../../components/BottomNavigation';

export default function QuestsScreen({ navigation }) {
    const convertTZ = (date) => {
        return ((typeof date === "string" ? new Date(date) : date).toLocaleString('en-US', {timezone: 'Asia/Singapore'}))
    }
    
    const convertDate = (timestamp) => {
        const time = convertTZ(timestamp)
        console.log("convert", time)
        console.log(time)
        return time
        // const day = timestamp.getDay()
        // let dotw = ""
        // const date = timestamp.getDate()
        // const month = timestamp.getMonth()+1
        // const hours = timestamp.getHours()
        // let hr = ""
        // const minutes = timestamp.getMinutes()
        
        // if (hours < 10) {
        //     hr = "0" + hours
        // } else {
        //     hr = hours
        // }

        // switch (day) {
        // case 0: dotw = "Sun"
        //     break
        // case 1: dotw = "Mon"
        //     break
        // case 2: dotw = "Tue"
        //     break
        // case 3: dotw = "Wed"
        //     break
        // case 4: dotw = "Thu"
        //     break
        // case 5: dotw = "Fri"
        //     break
        // case 6: dotw = "Sat"
        //     break
        // default: dotw = "invalid"
        //     break
        // }

        // return dotw + " " + date + "/" + month + ", " + hr + minutes + "hrs"
    }

    const renderQuests = ({ item }) => {
        const currentTime = new Date()
        const isClickable = (type) => {
            switch (type) {
            case 'daily':
                console.log("daily")
                return null;

            case 'quiz':
                openQuiz()
                break

            case 'qr':
                openPassword()
                break
            }
        }
        // check type then update expiry date
        const openQuiz = () => {
            navigation.navigate('QuizModal', { id: item.id, points: item.points})
        }

        const openPassword = () => {
            navigation.navigate('PasswordModal', { id: item.id, points: item.points})
        }

        const Remark = ({ status, startTime, endTime }) => {
            
            console.log("remark")
            console.log(currentTime)
            console.log(startTime)
            const start = new Date(startTime)
            const end = new Date(endTime)
            let text = ""
            let state = ""

            if (status === "completed") {
                text = "Done!"
                state = "Completed"
            } 
            if (status === "incomplete") {
                if (currentTime < start) {
                    //not started: startdate not reached
                    state = "Not Started"
                    text = "Starting on: " + convertDate(start)
                } else if (start <= currentTime < end) {
                    //ongoing: startdate passed but not enddate
                    state = "Ongoing"
                    text = "Expires: " + convertDate(end)
                } else if (end <= currentTime) {
                    //failed: enddate passed
                    state = "Failed"
                    text = "Expired: " + convertDate(end)
                } else {
                    state = "unknown"
                    text= "unknown"
                }
            }



            return (
                <View>
                    <Text style={{ color: 'gray'}}>{text}</Text>
                    <View style={{ marginTop: 4, borderRadius: 10, backgroundColor: '#D9D9D9', padding: 4, width:'30%', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{ color: 'gray'}}>{state}</Text>
                    </View>
                </View>
            )
        }

        return (
            <TouchableOpacity style={styles.listcard} onPress={()=>isClickable(item.type)} disabled={item.status === "completed" || currentTime < new Date(item.startDate) || currentTime >= new Date(item.endDate)}>
                <View style={{ width:'95%'}}>
                    <View>
                        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 24, fontWeight: 600}}>{item.title}</Text>
                            <View style={{ flexDirection:'col'}}>
                                <Text>Points:</Text>
                                <Text style={{ fontSize: 14, fontWeight: 600}}>{item.points}</Text>
                            </View>
                        </View>
                        
                    </View>
                    
                    <Text style={{ color: 'black'}}>{item.desc}</Text>
                    <Remark status={item.status} startTime={item.startDate} endTime={item.endDate}/>
                </View>
            </TouchableOpacity>
        )
    }
    

    return (
        <View style={styles.page}>
            <View style={styles.pageHome}>


                <View style={styles.defaultCard}>
                    <View style={{ width:'85%', height:'95%'}}>
                        <Text style={{fontSize:30, fontWeight:700, marginBottom:10}}>
                        Quests
                        </Text>
                        <View style={{ height: '90%', paddingX: 2}}>
                            <FlatList
                                data={DUMMY}
                                showsVerticalScrollIndicator={false}
                                renderItem={renderQuests}
                                keyExtractor={item => item.id}
                                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                            />
                        </View>
                    </View>
                </View>

            </View>

            <View style={styles.bottomNavigation}>
                <BottomNavigator navigation={navigation} />
            </View>
        </View>
        

    );
}


const styles = StyleSheet.create({
    page: {
        height: "100%",
        width: "100%",
        minWidth: 330,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Arial",
    },
    pageHome: {
        width: "100%",
        flexGrow: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
    bottomNavigation: {
        width:'100%',
        height: 90

    },
    defaultCard:{
        height:'85%',
        width: '90%',
        backgroundColor:'white',
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

        justifyContent:'center',
        alignItems:'center'
    },
    listcard: {
        width: '100%',
        backgroundColor:'#F5F5F5',
        borderRadius:20,
        padding: 20

    },
});


const DUMMY = [
    {
        id: 1,
        title: 'Daily Login',
        desc: 'Login to the app daily',
        status: 'completed',
        points: 200,
        startDate: '',
        endDate: '',
        type: 'daily'
    },
    {
        id: 2,
        title: 'Weekly Quiz',
        desc: 'How well do you know us',
        status: 'incomplete',
        points: 600,
        startDate: '2023-06-15T17:10:28.132Z',
        endDate: '2023-06-20T17:10:28.132Z',
        type: 'quiz'
    },
    {
        id: 3,
        title: 'Daily Drop',
        desc: 'Scan the QR code at the pantry',
        status: 'incomplete',
        points: 300,
        startDate: '2023-06-21T17:10:28.132Z',
        endDate: '2023-06-21T19:10:28.132Z',
        type: 'qr'
    },
    {
        id: 4,
        title: 'On Time',
        desc: 'Come to work on time',
        status: 'incomplete',
        points: 400,
        startDate: '2023-06-17T17:10:28.132Z',
        endDate: '2023-06-19T17:10:28.132Z',
        type: 'qr'
    },
    {
        id: 5,
        title: 'Company Event',
        desc: 'Bonding at ORTO',
        status: 'incomplete',
        points: 1000,
        startDate: '2023-06-20T17:10:28.132Z',
        endDate: '2023-06-24T17:10:28.132Z',
        type: 'qr'
    },
]
