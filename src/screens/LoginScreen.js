import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal,
    KeyboardAvoidingView, ScrollView, Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('error');

    const validUsername = 'Axel';
    const validPassword = '123';

    const handleLogin = () => {
        if (username === '' || password === '') {
            showAlert('Favor de rellenar todos los campos.', 'warning');
        } else if (username !== validUsername || password !== validPassword) {
            showAlert('Credenciales incorrectas FAVOR DE VERIFICAR SUS DATOS.', 'error');
        } else {
            navigation.navigate('Home');
        }
    };

    const showAlert = (message, type) => {
        setModalMessage(message);
        setModalType(type);
        setModalVisible(true);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.label}>Usuario *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su usuario"
                    value={username}
                    onChangeText={setUsername}
                />

                <Text style={styles.label}>Contraseña *</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Ingrese su contraseña"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Password')}>
                    <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Iniciar sesión</Text>
                </TouchableOpacity>

                <Image source={require('../images/Logo.png')} style={styles.logo} />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={[
                            styles.modalContent,
                            modalType === 'success' ? styles.success :
                                modalType === 'warning' ? styles.warning :
                                    styles.error
                        ]}>
                            <Text style={styles.modalText}>{modalMessage}</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4BDA6',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
    },
    forgotPassword: {
        color: 'black',
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: '#4D5637',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 300,
        height: 300,
        marginTop: 30,
        resizeMode: 'contain',
    },

    // MODAL ESTILOS
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'white',
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    error: {
        backgroundColor: '#D9534F', // Rojo para errores
    },
    success: {
        backgroundColor: '#5CB85C', // Verde para éxito
    },
    warning: {
        backgroundColor: '#F0AD4E', // Amarillo para advertencias
    },
});

export default LoginScreen;
