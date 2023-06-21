import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { Alert, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "react-native-vector-icons";
import { generatePal } from '../../api/pals';
import { claimPrize, getPrizeClaimed, getUserPoints } from "../../api/user";
import BottomNavigator from '../../components/BottomNavigation';
import PalModal from '../../components/RollModal';
import PrizeModal from '../../components/ViewPrizeModal';
import useAuth from '../../hooks/useAuth';
import CountdownTimer from "./CountdownTimer";

export default function HomeScreen({ navigation }) {
    const { user } = useAuth();
    const [data, setData] = useState(oldData);
    const [showPrizeModal, setShowPrizeModal] = useState(false)
    const [showPalModal, setShowPalModal] = useState(false)
    const [prize, setPrize] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const [totalPoints, setTotalPoints] = useState(null)
    const [prizeClaimed, setPrizeClaimed] = useState([])
    const isFocused = useIsFocused()



    useEffect(() => {
        const fetchAPIData = async () => {
            try {
                const dbData = await getUserPoints(user._id);
                console.log("Total points retrieved: " + totalPoints)

                const dbData2 = await getPrizeClaimed(user._id);
                console.log("Prize claimed array retrieved: " + dbData2.data)

                const tempPrizeClaimed = dbData2.data;
                let tempScore = dbData.data;
                let tempData = data;
  
                for (let i = 0; i < tempData.length; i++) {
                    if (tempPrizeClaimed[i] === 1) {
                        tempData[i].isClaimed = true;
                    } else {
                        tempData[i].isClaimed = false;
                    }

                    if (tempScore >= tempData[i].total) {
                        tempData[i].current = tempData[i].total;
                        tempData[i].levelCompleted = true;
                        tempScore -= tempData[i].total;
                    } else if (tempScore === 0) {
                        tempData[i].current = 0;
                    } else {
                        tempData[i].current = tempScore;
                        tempScore = 0;
                    }
                }
                setData(tempData);
                setTotalPoints(dbData.data);
                setPrizeClaimed(dbData2.data);

            } catch (error) {
                console.log(error);;
            }

            
        }
        fetchAPIData();
    }, [isFocused, refresh])
   

    const updateDbClaimArray = async (level) => {
        try {
            const dbData = await claimPrize(user._id, level);
            console.log("Updated db claimprize array")
        } catch (error) {
            console.log(error);
        }
    };

    const updateFClaimArray = async (level) => {
        const tempData = data;
        tempData[level - 1].isClaimed = true;
        setData(tempData);
    };
    

    const togglePrizeModal = () => {
        setShowPrizeModal(!showPrizeModal)
    }

    const togglePalModal = () => {
        setShowPalModal(!showPalModal)
    }

    const claimVoucher = async ( userId ) => {
        console.log("claim Prize")
        setShowPrizeModal(true)
    }

    const claimPal = async ( userId ) => { 
        console.log("claim Pal")
        try{
            const res = await generatePal(userId)
            setPrize(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
        
        setShowPalModal(true)
    }

        

    const handleClaimPrize = (level, levelCompleted, isClaimed, prize) => {
        if (isClaimed == true) {
            Alert.alert("Error", "You have already claimed this prize!");
        } else if (isClaimed == false && levelCompleted == false) {
            Alert.alert("Error", "You cannot redeem this yet!");
        } else {
            if (level == 5 || level == 10) {
                claimVoucher(user._id);
            } else {
                claimPal(user._id);
            }
            updateDbClaimArray(level);
            updateFClaimArray(level);
        }
    };

    // Each Individual Level Component
    const Item = ({percentageString, level, total, isClaimed, onPress, current}) => {

        // Change Background for button
        let btnBackgroundColor = '#66AD47'; // Default: Green
        let textColor = 'black'
        if (isClaimed) {
            btnBackgroundColor = '#A0A0A0'; // Dark Grey
            textColor = 'grey'
        } else if (!isClaimed && current < total) {
            btnBackgroundColor = '#D9D9D9'; // Grey
            textColor = 'black'
        }
        

        return (
            <View style={{width:'100%', height:55,alignItems:'center', flexDirection:'row'}}>
                <View style={{width:'10%', alignItems:'center'}}>
                    <Text style={{fontSize:15, fontWeight:600}}>
                        {level}
                    </Text>
                </View>
                <View style={{ width:'65%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <View style={{position:'absolute', width:'80%', flexDirection:'row-reverse', paddingBottom:20}}>
                        <Text style={{fontSize:10}}>
                            {total}
                        </Text>
                    </View>
                    <View style={{backgroundColor:'#C8C8C8', width:'95%', height:10, borderRadius:5}}>
                        <View style={{backgroundColor:'#A77B06', width:percentageString, height:'100%', borderRadius:5, position:'absolute'}}>
                        </View>
                    </View>
                </View>
                <View style={{width:'25%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={onPress} style={{borderRadius:12, height:'80%', width:'90%', backgroundColor:btnBackgroundColor, alignItems:'center', justifyContent:'center'}}>
                        {isClaimed ? (
                            <Text style={{color:textColor, fontWeight:500}}>
                        Claimed
                            </Text>
                        ):(
                            <Text style={{color:textColor, fontWeight:500}}>
                        Claim
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
    

    // Rendering the list of levels
    const renderItem = ({item}) => {

        const percentage = item.current / item.total * 100
        const percentageString = percentage.toString() + '%'

        return (
            <Item
                level={item.level}
                total={item.total}
                current={item.current}
                isClaimed={item.isClaimed}
                percentageString={percentageString}

                onPress={() => 
                    handleClaimPrize(
                        item.level, 
                        item.levelCompleted,
                        item.isClaimed,
                        item.prize)}
            />
        )
    }

    // Rendering the page
    return totalPoints !== null && (
        <View style={styles.background}>
            <ImageBackground source={require('../../assets/bb.jpg')} style={styles.backgroundImage}/>

            <View style={styles.page}>
                <View style={styles.pageHome}>
                
                    <View style={styles.topTab}>

                        <Text style={styles.headerText}>
                        Welcome
                        </Text>

                        <View style={{paddingRight:'7%', paddingBottom:'1%',}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}} 
                                style={{width:40, height:40, borderRadius:20, backgroundColor:'#C2C4CA', alignItems:'center', justifyContent:'center', borderColor:'white', borderWidth:1, shadowColor: '#000', 
                                    shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 2,}}>
                                <Ionicons name="person" color="#444" size={30}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{width:'100%', flexGrow:1, alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:'100%', height:'100%', position:'absolute', justifyContent:'space-evenly'}}>
                            <View style={{height:'80%', justifyContent:'center', alignItems:'center'}}>
                                <View style={[styles.defaultCard, {width:'90%', backgroundColor:'white'}]}> 
                                    <View style={{height:60, width:'85%',justifyContent:'center'}}>
                                        <Text style={{fontSize:30, fontWeight:700, color:"black"}}>
                                        The Breakroom
                                        </Text>
                                    </View>
                                    <View style={{flexGrow:1, width:'100%', alignItems:'center'}}>
                                        <View style={{height:'96%', width:'90%', position:'absolute', borderRadius:15, justifyContent:'center', alignItems:'center', backgroundColor:"#F5F5F5"}}>
                                            <View style={{height:'90%', width:'90%'}}>
                                                <FlatList
                                                    style={{height:0, width:'100%'}}
                                                    data={data}
                                                    renderItem={renderItem}
                                                    keyExtractor={item => item.level}
                                                    showsVerticalScrollIndicator={false}
                                                />
                                            </View>
                                            <View style={{paddingVertical:8}}>
                                                <CountdownTimer />
                                            </View>

                                        </View>
                                    </View>
                                </View>
                               
                            </View>
                            <View style={{height:'12%', justifyContent:'center', alignItems:'center'}}>
                                <View style={[styles.defaultCard, { width:'60%', flexDirection:'row', borderRadius:40, height:"80%", }]}>
                                    <Text style={{fontWeight:500, color:'#AF9D5A'}}>Current Points: </Text>
                                    <Text style={{fontSize:20 , fontWeight:600, color:'#AF9D5A'}}>{totalPoints}</Text>
                                </View>
                               
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.bottomNavigation}>
                    {/* <BottomNavigator navigation={navigation} /> */}
                </View>
                {/* <PrizeModal visible={showPrizeModal} closeModal={togglePrizeModal}/>
                <PalModal visible={showPalModal} closeModal={togglePalModal} prize={prize}/> */}
                <PrizeModal visible={showPrizeModal} closeModal={togglePrizeModal} prizeName={"2 x Movie Tickets"}/>
                <PalModal visible={showPalModal} closeModal={togglePalModal} prize={prize}/>
            </View>
        </View>
        
    );
}


const oldData = [
    {
        level: 1,
        levelCompleted: false,
        total: 300,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 2,
        levelCompleted: false,
        total: 300,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 3,
        levelCompleted: false,
        total: 500,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 4,
        levelCompleted: false,
        total: 500,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 5,
        levelCompleted: false,
        total: 700,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 6,
        levelCompleted: false,
        total: 700,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 7,
        levelCompleted: false,
        total: 1000,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 8,
        levelCompleted: false,
        total: 1000,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 9,
        levelCompleted: false,
        total: 1200,
        current: 0,
        isClaimed: false,
        prize: "Pal",
    },
    {
        level: 10,
        levelCompleted: false,
        total: 1200,
        current: 0,
        isClaimed: false,
        prize: "Voucher",
    },
];
    

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: "absolute",
    },
    page: {
        // flex: 1,
        height: "100%",
        width: "100%",
        minWidth: 330,

        alignItems: 'center',
        justifyContent: 'center',
    },
    pageHome: {
        width: "100%",
        flexGrow: 1,
        alignItems: 'center',
        flexDirection: "column",
    },
    bottomNavigation: {
        width:'100%',
        height: 100

    },
    topTab: {
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width:'100%',
        height:100,
    },
    defaultCard: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        paddingLeft:'7%',
        paddingBottom:'1%',
        fontWeight:800,
        fontSize:30, 
        color:'white',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
    }

});

const allPals = [
    {key: 0, name:'Cheeseburger', description:'You are what you eat', total:0, image:require('../../assets/cheeseburger.png'), lockedImage:require('../../assets/cheeseburger_black.png')},
    {key: 1, name:'Coffee', description:'Drink me!', total:0, image:require('../../assets/coffee.png'), lockedImage:require('../../assets/coffee_black.png')},
    {key: 2, name:'Ice cream', description:'Cold Cold Cold', total:0, image:require('../../assets/ice_cream.png'), lockedImage:require('../../assets/ice_cream_black.png')},
    {key: 3, name:'Microwave', description:'I cook food!', total:0, image:require('../../assets/microwave.png'), lockedImage:require('../../assets/microwave_black.png')},
    {key: 4, name:'Onigiri', description:'What did the rice ball say to the seaweed? Im onigiri-nally yours!', total:0, image:require('../../assets/onigiri.png'), lockedImage:require('../../assets/onigiri_black.png')},
    {key: 5, name:'Salmon', description:'Salmon-nella...', total:0, image:require('../../assets/salmon_maki.png'), lockedImage:require('../../assets/salmon_maki_black.png')},
    {key: 6, name:'Soda', description:'Coke? Or Pepsi...', total:0, image:require('../../assets/soda.png'), lockedImage:require('../../assets/soda_black.png')},
    {key: 7, name:'Vending machine', description:'Doraemon!', total:0, image:require('../../assets/vending_machine.png'), lockedImage:require('../../assets/vending_machine_black.png')},
    {key: 8, name:'Toaster', description:'Better then microwave', total:0, image:require('../../assets/toaster.png'), lockedImage:require('../../assets/toaster_black.png')},
    {key: 9, name:'Hotdog', description:'Hot dawgg!', total:0, image:require('../../assets/hotdog.png'), lockedImage:require('../../assets/hotdog_black.png')},
];