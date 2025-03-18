import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import HistoryScreen from '../screens/HistoryScreen';
import UpdateScreen from '../screens/UpdateScreen';
import PasswordScreen from '../screens/PasswordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'INICIO DE SESIÓN',
                        headerStyle: styles.headerStyle,
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTitleAlign: 'center',
                    }}
                />

                <Stack.Screen
                    name="Password"
                    component={PasswordScreen}
                    options={{
                        title: 'Recuperar Contraseña',
                        headerStyle: styles.headerStyle,
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTitleAlign: 'center',
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        title: 'HOME',
                        headerStyle: styles.headerStyle,
                        headerTitleStyle: styles.headerTitleStyle,
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => console.log('Abrir menú')} style={styles.iconLeft}>
                                <Ionicons name="menu" size={28} color="white" />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    // Reinicia la pila de navegación y redirige a Login
                                    navigation.reset({
                                        index: 0, // Establece el índice de la pila a 0 (la primera pantalla)
                                        routes: [{ name: 'Login' }], // Define la nueva pila con solo Login
                                    });
                                }}
                                style={styles.iconRight}
                            >
                                <Ionicons name="log-out-outline" size={28} color="white" />
                            </TouchableOpacity>
                        ),
                    })}
                />

                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
                <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
                <Stack.Screen name="Update" component={UpdateScreen} options={{ title: 'Update' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#7A4F2D',
    },
    headerTitleStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconLeft: {
        marginLeft: 20,
    },
    iconRight: {
        marginRight: 20,
    },
});

export default Navigation;