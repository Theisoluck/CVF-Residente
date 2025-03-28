import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const PasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const handlePasswordReset = () => {
        if (email === '') {
            setModalText('Por favor, ingresa tu correo.');
            setModalVisible(true);
        } else if (!email.includes('@')) {
            setModalText('Tu correo al menos debe contener un @');
            setModalVisible(true);
        } else if (email.length > 254) {
            setModalText('El correo no debe exceder los 254 caracteres.');
            setModalVisible(true);
        } else {
            setModalText('Correo de recuperación enviado');
            setModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recuperar Contraseña</Text>

            <Text style={styles.label}>Correo Electrónico *</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su correo"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
                <Text style={styles.buttonText}>Enviar enlace de recuperación</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{modalText}</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                setModalVisible(false);
                                if (modalText === 'Correo de recuperación enviado') {
                                    navigation.goBack();
                                }
                            }}
                        >
                            <Text style={styles.modalButtonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#C4BDA6',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        label: {
            textAlign: 'center',
            width: '100%',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            color: 'black',
        },
        input: {
            width: '100%',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 10,
        },
        button: {
            backgroundColor: '#4D5637',
            paddingVertical: 10,
            paddingHorizontal: 40,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 5,
            marginTop: 20,
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
        },
        modalText: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        modalButton: {
            backgroundColor: '#4D5637',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
        },
        modalButtonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
    });

    export default PasswordScreen;