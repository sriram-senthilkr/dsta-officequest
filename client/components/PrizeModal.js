import { View, Text, Image, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'


//NOTE: declare const [showModal, setShowModal] = useState(false) in parent
//visible: visiblestate (true/false state)
//closeModal: setState for visiblestate (setState())
//prize: prize to show (string)
//prizetype: "gacha" or "others"
const PrizeModal = ({ visible, closeModal, prize, prizeType }) => {
    const map = [
        {key: 0, name:'Cheeseburger', description:'You are what you eat', image:require('../assets/cheeseburger.png')},
        {key: 1, name:'coffee', description:'Drink me!', image:require('../assets/coffee.png')},
        {key: 2, name:'ice cream', description:'Cold Cold Cold', image:require('../assets/ice_cream.png')},
        {key: 3, name:'microwave', description:'I cook food!', image:require('../assets/microwave.png')},
        {key: 4, name:'onigiri', description:'What did the rice ball say to the seaweed? Im onigiri-nally yours!', image:require('../assets/onigiri.png')},
        {key: 5, name:'salmon', description:'Salmon-nella...', image:require('../assets/salmon_maki.png')},
        {key: 6, name:'soda', description:'Coke? Or Pepsi...', image:require('../assets/soda.png')},
        {key: 7, name:'vending machine', description:'Dorameon!', image:require('../assets/vending_machine.png')},
        {key: 8, name:'toaster', description:'Better then microwave', image:require('../assets/toaster.png')},
        {key: 9, name:'hotdog', description:'Hot dwagg!', image:require('../assets/hotdog.png')},
    ]

    // const gacha = (prizeType === 'gacha') ? (
    //     map.filter(obj=>obj.key === prize).image
    // ) : prize

    

    return (
        <View style={styles.back}>
            <Modal
                transparent={true}
                animationType="slide"
                visible={visible}
                onRequestClose={() => {
                    closeModal()
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontWeight: 600, fontSize: 40, marginBottom:20}}>Congrats!</Text>
                        <Text style={{fontSize: 20, marginBottom: 20}}>You received:</Text>
                        <Text style={styles.modalText}>{prize}</Text>
                        {/* <Image
                            style={{width:45, height:45}}
                            source={map.filter(obj=>obj.key === prize).image}
                            resizeMode={'contain'}
                        /> */}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => closeModal()}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        borderTop: 20,
    },
    buttonClose: {
        backgroundColor: '#D9D9D9',
        borderTop: 20,
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

  
export default PrizeModal