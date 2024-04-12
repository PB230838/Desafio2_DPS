import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const DetallePlaneta = ({ route }) => {
  const { planeta } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: planeta.imagen }} 
        style={styles.backgroundImage} 
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.planetaName}>{planeta.nombre}</Text>
        </View>
      </ImageBackground>
      <View style={styles.planetaInfoContainer}>
        <Text style={styles.planetaDetalle}>Tipo: {planeta.tipo}</Text>
        <Text style={styles.planetaDetalle}>Masa: {planeta.masa}</Text>
        <Text style={styles.planetaDetalle}>Radio: {planeta.radio}</Text>
        <Text style={styles.planetaDetalle}>Distancia Media al Sol: {planeta.distancia_media_al_sol}</Text>
        <Text style={styles.planetaDetalle}>Periodo Orbital: {planeta.periodo_orbital}</Text>
        <Text style={styles.planetaDetalle}>Periodo de Rotación: {planeta.periodo_rotacion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'stretch', 
    backgroundColor: '#d4f4f4', 
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
  },
  planetaName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', 
    textAlign: 'center', 
  },
  planetaInfoContainer: {
    backgroundColor: '#fff', 
    padding: 25,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    marginTop: -20, 
  },
  planetaDetalle: {
    fontSize: 21,
    marginBottom: 10,
  },
});

export default DetallePlaneta;
