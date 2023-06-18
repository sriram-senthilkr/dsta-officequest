import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from "react";
import BottomNavigator from '../../components/BottomNavigation';

export default function QuestsScreen({ navigation }) {

    const renderQuests = ({ item }) => {
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
        return (
            <TouchableOpacity style={styles.listcard} onPress={()=>isClickable(item.type)}>
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
                    
                    <Text style={{ color: 'gray'}}>{item.desc}</Text>
                    <View style={{ marginTop: 4, borderRadius: 10, backgroundColor: '#D9D9D9', padding: 4, width:'30%', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{ color: 'gray'}}>{item.status}</Text>
                    </View>
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
        status: 'ongoing',
        points: 600,
        startDate: '',
        endDate: '',
        type: 'quiz'
    },
    {
        id: 3,
        title: 'Daily Drop',
        desc: 'Scan the QR code at the pantry',
        status: 'ongoing',
        points: 300,
        startDate: '',
        endDate: '',
        type: 'qr'
    },
    {
        id: 4,
        title: 'On Time',
        desc: 'Come to work on time',
        status: 'failed',
        points: 400,
        startDate: '',
        endDate: '',
        type: 'qr'
    },
    {
        id: 5,
        title: 'Company Event',
        desc: 'Bonding at ORTO',
        status: 'ongoing',
        points: 1000,
        startDate: '',
        endDate: '',
        type: 'qr'
    },
]
