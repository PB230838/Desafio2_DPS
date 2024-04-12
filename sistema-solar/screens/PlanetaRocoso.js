import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const PlanetaRocoso = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.titulo}>Planetas Rocosos</Text>
        <Image
          source={{ uri: 'https://content.quizzclub.com/trivia/2021-04/cual-de-los-planetas-rocosos-del-sistema-solar-tiene-el-campo-electrico-mas-intenso.jpg' }} // Reemplaza la URL con la imagen de los planetas rocosos
          style={styles.imagen}
          resizeMode="cover"
        />
        <Text style={styles.parrafo}>
          Los planetas rocosos, también conocidos como planetas telúricos o sólidos, son un tipo de planeta que se caracteriza por tener una superficie sólida y rocosa. Estos planetas están 
          compuestos principalmente por minerales y metales y tienen una atmósfera mucho más delgada en comparación con los planetas gaseosos.
        </Text>
        <Text style={styles.subtitulo}>Características</Text>
        <Text style={styles.parrafo}>
          Las principales características de los planetas rocosos son las siguientes:
        </Text>
        <Text style={styles.caracteristica}>- Tienen una superficie sólida y rocosa.</Text>
        <Text style={styles.caracteristica}>- Están compuestos principalmente por minerales y metales.</Text>
        <Text style={styles.caracteristica}>- Tienen una atmósfera más delgada en comparación con los planetas gaseosos.</Text>
        <Text style={styles.caracteristica}>- Son más densos que los planetas gaseosos.</Text>
        <Text style={styles.caracteristica}>- No tienen anillos ni una gran cantidad de satélites en comparación con los gigantes gaseosos.</Text>
        <Text style={styles.caracteristica}>- Algunos planetas rocosos tienen actividad geológica, como volcanes y terremotos.</Text>
        <Text style={styles.caracteristica}>- La mayoría de los planetas rocosos se encuentran más cerca del Sol en comparación con los gigantes gaseosos.</Text>
        <Text style={styles.subtitulo}>Ejemplos de Planetas Rocosos</Text>
        <Text style={styles.parrafo}>
          Algunos ejemplos de planetas rocosos en nuestro sistema solar incluyen:
        </Text>
        <Text style={styles.ejemplo}>- Mercurio</Text>
        <Text style={styles.ejemplo}>- Venus</Text>
        <Text style={styles.ejemplo}>- Tierra</Text>
        <Text style={styles.ejemplo}>- Marte</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imagen: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
  },
  parrafo: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'justify',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
  caracteristica: {
    marginBottom: 10,
  },
  ejemplo: {
    marginBottom: 10,
    marginLeft: 20, // Indentación para los ejemplos
  },
});

export default PlanetaRocoso;
