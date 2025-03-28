import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuAnimation = useState(new Animated.Value(-250))[0];

  const toggleMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: menuOpen ? -250 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuOpen(!menuOpen);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={toggleMenu} style={{ marginLeft: 20 }}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, menuOpen]);

  return (
    <View style={styles.container}>
      {/* MENÚ LATERAL */}
      <Animated.View style={[styles.menu, { left: menuAnimation }]}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 20 }}>✕ Cerrar Menú</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Profile'); }}>
          <Text style={styles.menuText}>👤 Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('History'); }}>
          <Text style={styles.menuText}>📜 Historial</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* BOTÓN "VALIDAR VISITA" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Visit')}>
        <Text style={styles.buttonText}>Validar visita</Text>
      </TouchableOpacity>
      <Image source={require('../images/Visit.png')} style={styles.image} />

      {/* BOTÓN "VALIDAR SALIDA" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Exit')}>
        <Text style={styles.buttonText}>Validar salida</Text>
      </TouchableOpacity>
      <Image source={require('../images/Exit.png')} style={styles.image} />

      {/* LOGO */}
      <Image source={require('../images/Logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDA6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
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
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 30,
    resizeMode: 'contain',
  },
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#7A4F2D',
    padding: 20,
    elevation: 10,
    zIndex: 10,
  },
  menuText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
  },
});