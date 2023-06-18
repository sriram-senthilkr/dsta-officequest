import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import React, { useState} from "react";
import BottomNavigator from '../../components/BottomNavigation';
import { SelectList} from 'react-native-dropdown-select-list'

export default function PalsScreen({ navigation }) {
    const [username, setUsername] = useState('')
    const [selectPal, setSelectPal] = useState('')


    function handleClaimPrize () {

    }

    const Item = ({name, total}) => (
        <View style={{width:80, height:70,alignItems:'center', flexDirection:'row',justifyContent:'center',alignContent:'center'}}>


            {total == 0 ? (
                <View>
                    <View style={{width:60, height:60, backgroundColor:'red', borderRadius:30, justifyContent:'center', alignItems:'center'}}>
                        <Text>
                        ?
                        </Text>
                    </View>
                    <View style={{width:60, height:60, backgroundColor:'black', borderRadius:30, opacity:0.4, position:'absolute'}}>
                    </View>
                </View>
            ):(
                <View style={{flexDirection:'row-reverse'}}>
                    <View style={{width:60, height:60, backgroundColor:'red', borderRadius:30, justifyContent:'center', alignItems:'center'}}>
                        <Text>
                            {name}
                        </Text>
                    </View>
                    <View style={{width:16, height:16, borderRadius:8, backgroundColor:'#A7A7A7', position:'absolute', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:10}}>
                            {total}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );


    const renderItem = ({item}) => {
        return (
            <Item 
                name={item.name} 
                total={item.total}
            />
        )
    }

    return (
        <View style={styles.page}>
            <View style={styles.pageHome}>

                <View style={styles.topTab}>
                </View>

                <View style={{width:'100%', flexGrow:1, backgroundColor:'#D9D9D9', alignItems:'center', justifyContent:'center'}}>
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
                                                            <FlatList
                                                                horizontal
                                                                style={{height:0, width:'100%'}}
                                                                showsHorizontalScrollIndicator={false}
                                                                data={common}
                                                                renderItem={renderItem}
                                                                keyExtractor={item => item.name}
                                                            />
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
                                                                data={rare}
                                                                renderItem={renderItem}
                                                                keyExtractor={item => item.name}
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
                                                                data={superrare}
                                                                renderItem={renderItem}
                                                                keyExtractor={item => item.name}
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
    );
}

const common = [
    {
        name:'ben',
        total:2,
    },
    {
        name:'jiunyuan',
        total:1,
    },
    {
        name:'ansenn',
        total:0,
    },
    {
        name:'jiunyuan1',
        total:1,
    },
    {
        name:'ansenn2',
        total:0,
    },
]; 

const rare = [
    {
        name:'sriram',
        total:2,
    },
    {
        name:'lol',
        total:1,
    },
    {
        name:'hello',
        total:0,
    },
]; 
    
const superrare = [
    {
        name:'cleon',
        total:2,
    },

]; 

const pals = [
    {key:'0', value:'Ben'},
    {key:'1', value:'JiunYuan'},
    {key:'2', value:'jiunyuan2'},
    {key:'3', value:'lol'},
    {key:'4', value:'sriram'},
    {key:'5', value:'cleon'},
]

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
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "column",
    },
    bottomNavigation: {
        width:'100%',
        height: 90

    },
    topTab: {
        backgroundColor:'#D9D9D9',
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