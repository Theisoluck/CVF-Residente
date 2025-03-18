import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para los íconos de la barra

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* BOTÓN "CREAR VISITA" */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crear visita</Text>
      </TouchableOpacity>
      <Image source={require('../images/Visit.png')} style={styles.image} />

      {/* BOTÓN "GENERAR ENLACE" */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Generar enlace</Text>
      </TouchableOpacity>
      <Image source={require('../images/Link.png')} style={styles.image} />

      {/* LOGO */}
      <Image source={require('../images/Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDA6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#7A4F2D',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
});

export default HomeScreen;
