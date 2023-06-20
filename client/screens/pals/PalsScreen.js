import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import React, { useState, useEffect} from "react";
import BottomNavigator from '../../components/BottomNavigation';
import { SelectList} from 'react-native-dropdown-select-list'
import { getUserPals } from '../../api/user';
import { useIsFocused } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';



export default function PalsScreen({ navigation }) {
    const [refresh, setRefresh] = useState(false)
    const [username, setUsername] = useState('')
    const [selectPal, setSelectPal] = useState('')
    const isFocused = useIsFocused()
    const [palsNumber, setPalsNumber] = useState([])
    const { user } = useAuth()
    const [pals, setPals] = useState([])
    const [allPals, setAllPals]= useState([
        {key: 0, name:'Cheeseburger', total:0, image:require('../../assets/cheeseburger.png'), unlockedImage:require('../../assets/cheeseburger_black.png')},
        {key: 1, name:'coffee', total:0, image:require('../../assets/coffee.png'), unlockedImage:require('../../assets/coffee_black.png')},
        {key: 2, name:'ice cream', total:0, image:require('../../assets/ice_cream.png'), unlockedImage:require('../../assets/ice_cream_black.png')},
        {key: 3, name:'microwave', total:0, image:require('../../assets/microwave.png'), unlockedImage:require('../../assets/microwave_black.png')},
        {key: 4, name:'onigiri', total:0, image:require('../../assets/onigiri.png'), unlockedImage:require('../../assets/onigiri_black.png')},
        {key: 5, name:'salmon', total:0, image:require('../../assets/salmon_maki.png'), unlockedImage:require('../../assets/salmon_maki_black.png')},
        {key: 6, name:'soda', total:0, image:require('../../assets/soda.png'), unlockedImage:require('../../assets/soda_black.png')},
        {key: 7, name:'vending machine', total:0, image:require('../../assets/vending_machine.png'), unlockedImage:require('../../assets/vending_machine_black.png')},
        {key: 8, name:'toaster', total:0, image:require('../../assets/toaster.png'), unlockedImage:require('../../assets/toaster_black.png')},
        {key: 9, name:'soda', total:0, image:require('../../assets/soda.png'), unlockedImage:require('../../assets/soda_black.png')},
    ])
    const [commonPals, setCommonPals] = useState([])
    const [rarePals, setRarePals] = useState([])
    const [superRarePals, setSuperRarePals] = useState([])

    useEffect(() => {
            
        fetchData()

        if (refresh) {
            setRefresh(false)
        }
    }, [isFocused])


    async function fetchData() {
        
        try {
            const data = await getUserPals(user._id)
            setPalsNumber(data)

            for (var i = 0; i < data.length; i++) {
                const objectIndex = allPals.findIndex(pal => pal.key === i);
                const updatedPals = [...allPals];
                const total = data[i]
                updatedPals[objectIndex].total = total;
                setAllPals(updatedPals);
            }

            setCommonPals(allPals.slice(0,5))
            setRarePals(allPals.slice(5,8))
            setSuperRarePals(allPals.slice(8,10))

        } catch (error) {
            console.log(error)
        }
    
        var palsAvailable=[]
        for(var i = 0; i < allPals.length; i++){
            if (allPals[i].total > 0) {
                palsAvailable.push({key:i, value:allPals[i].name})
            }
        }
        setPals(palsAvailable)
    }


    function handleClaimPrize () {

    }


    const Item = ({name, total, image, unlockedImage}) => (
        <View style={{width:80, height:70,alignItems:'center', flexDirection:'row',justifyContent:'center',alignContent:'center'}}>

            <View style={{flexDirection:'row-reverse'}}>
                <View style={{width:60, height:60, borderRadius:30, alignItems:'center', justifyContent:'center'}}>
                    {total == 0 ? (
                        <Image 
                        style={{width: 45, height: 45}}
                        source={unlockedImage}
                        resizeMode={'contain'}
                        opacity={0.3}
                        />
                    ):(
                        <Image 
                            style={{width: 45, height: 45}}
                            source={image}
                            resizeMode={'contain'}
                        />
                    )}
                </View>
                <View style={{width:16, height:16, borderRadius:8, backgroundColor:'#A7A7A7', position:'absolute', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:10}}>
                        {total}
                    </Text>
                </View>
            </View>
        </View>
    );


    const renderItem = ({item}) => {
        return (
            <Item 
                total={item.total}
                image={item.image}
                unlockedImage={item.unlockedImage}
            />
        )
    }

    return (
        <View style={styles.background}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.backgroundImage}/>
            <View style={styles.page}>
                <View style={styles.pageHome}>

                    <View style={styles.topTab}>
                    </View>

                    <View style={{width:'100%', flexGrow:1, alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:'100%', height:'100%', position:'absolute'}}>
                            <View style={{flexGrow:1, justifyContent:'center', alignItems:'center'}}>
                                <View style={[styles.defaultCard, {position:'absolute', width:'90%', height:'100%',backgroundColor:'white'}]}>
                                    <View style={{height:65, width:'85%',justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                                        <Text style={{fontSize:30, fontWeight:700}}>
                                    PantryPals
                                        </Text>
                                        <TouchableOpacity style={{height:30, width:60, backgroundColor:'#E0E0E0', borderRadius:9, justifyContent:'center', alignItems:'center'}}>
                                            <Text>
                                            Prize
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexGrow:1, width:'100%', alignItems:'center'}}>
                                        <View style={{height:'97%', width:'90%', position:'absolute', justifyContent:'center', alignItems:'center',}}>
                                            <View style={{flexGrow:1, width:'100%'}}>
                                                <ScrollView style={{position:'absolute', height:'100%', width:'100%'}}>
                                                    <View style={{alignItems:'center'}}>
                                                        <View style={{width:'95%'}}>
                                                            <Text style={{fontWeight:600, fontSize:16}}>
                                                            Common
                                                            </Text>
                                                            <View style={{height:90, width:'100%'}}>
                                                                {<FlatList
                                                                    horizontal
                                                                    style={{height:0, width:'100%'}}
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={commonPals}
                                                                    renderItem={renderItem}
                                                                />}
                                                            </View>
                                                        </View>
                                                        <View style={{width:'95%'}}>
                                                            <Text style={{fontWeight:600, fontSize:16}}>
                                                            Rare
                                                            </Text>
                                                            <View style={{height:90, width:'100%'}}>
                                                                <FlatList
                                                                    horizontal
                                                                    style={{height:0, width:'100%'}}
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={rarePals}
                                                                    renderItem={renderItem}
                                                                />
                                                            </View>
                                                        </View>
                                                        <View style={{width:'95%'}}>
                                                            <Text style={{fontWeight:600, fontSize:16}}>
                                                            Super Rare
                                                            </Text>
                                                            <View style={{height:90, width:'100%'}}>
                                                                <FlatList
                                                                    horizontal
                                                                    style={{height:0, width:'100%'}}
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={superRarePals}
                                                                    renderItem={renderItem}
                                                                />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </ScrollView>
                                            </View>
                                            <View style={{width:'90%', height:130, justifyContent:'space-around'}}>
                                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                                    <View style={{width:'63%'}}>
                                                        <Text style={{paddingLeft:5, fontWeight:600}}>
                                                    Send Pals to:
                                                        </Text>
                                                        <TextInput style={styles.textInput}
                                                            placeholder="username" 
                                                            onChangeText={(val) => setUsername(val)} 
                                                            autoCapitalize="none" 
                                                            autoCorrect={false} 
                                                            value={username}
                                                        />
                                                    </View>
                                                    <View style={{width:'33%'}}>
                                                        <Text style={{paddingLeft:5, fontWeight:600}}>
                                                    Select Pal:
                                                        </Text>
                                                        <View style={{height:45}}>
                                                            <SelectList
                                                                dropdownStyles={styles.dropdownStyles}
                                                                dropdownItemStyles={styles.dropdownItemStyles}
                                                                dropdownTextStyles={styles.dropdownTextStyles}
                                                                boxStyles={styles.boxStyles}
                                                                inputStyles={styles.inputStyles}  
                                                                setSelected={(val) => setSelectPal(val)} 
                                                                data={pals} 
                                                                save="value"
                                                                placeholder='Select'
                                                                showsVerticalScrollIndicator = {false}
                                                                search = {false}
                                                            />  
                                                        </View>
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={{ height:45, width:'100%', borderRadius:12, backgroundColor:'#E0E0E0', justifyContent:'center', alignItems:'center', zIndex:-1}}>
                                                    <Text style={{fontSize:16, fontWeight:600}}>
                                                    Send
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{height:75, paddingVertical:15, justifyContent:'center', alignItems:'center', zIndex:-1}}>
                                <TouchableOpacity style={{zIndex:-999999, height:'100%', width:'70%', borderRadius:18, backgroundColor:'#E0E0E0', justifyContent:'center', alignItems:'center', shadowColor: '#000', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 1, elevation: 1,}}>
                                    <Text style={{fontSize:16, fontWeight:600}}>
                                    Redeem Prize
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.bottomNavigation}>
                    <BottomNavigator navigation={navigation} />
                </View>
            </View>
        </View>
    );
}




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
        height: "100%",
        width: "100%",
        minWidth: 330,
        // backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Arial",
    },
    pageHome: {
        width: "100%",
        flexGrow: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "column",
    },
    bottomNavigation: {
        width:'100%',
        height: 90

    },
    topTab: {
        // backgroundColor:'#D9D9D9',
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width:'100%',
        height:60
    },
    defaultCard:{
        height:'100%',
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
    textInput: {
        height: 45,
        color: "#6A6A6A",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        borderColor: "#DADADA",
    },
    dropdownStyles: {
        position:"absolute",
        width:"100%",
        top:35,
        zIndex:99,
        maxHeight:150,
        backgroundColor:"white",
        borderColor:"#DADADA"

    },
    dropdownItemStyles: {
        height:35,
    },
    dropdownTextStyles: {
        color: "#6A6A6A",
    },
    boxStyles: {
        borderColor:"#DADADA",
        paddingHorizontal:10
    },
    inputStyles: {
        color: "#6A6A6A",
    },
})