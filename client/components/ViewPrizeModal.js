import React from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'


//NOTE: declare const [showModal, setShowModal] = useState(false) in parent
//visible: visiblestate (true/false state)
//closeModal: setState for visiblestate (setState())
//prize: prize to show (string)
//prizetype: "gacha" or "others"
const ViewPrizeModal = ({ visible, closeModal , prizeName}) => {
    return (
        <View style={styles.back}>
            <Modal
                transparent={true}
                animationType="fade"
                visible={visible}
                onRequestClose={() => {
                    closeModal()
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.background}></View>
                    <View style={styles.modalView}>
                        <Text style={{fontWeight: 600, fontSize: 40, marginBottom:20}}>This Season</Text>
                        <Text style={{fontSize: 20, marginBottom: 20}}>Prize:</Text>
                        <Text style={styles.modalText}>{prizeName} </Text>
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
    background:{
        backgroundColor:'black',
        height:'100%',
        width:'100%',
        position:'absolute',
        opacity:0.5
    },
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

  
export default ViewPrizeModal