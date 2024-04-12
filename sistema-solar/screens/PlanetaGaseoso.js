import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const PlanetasGaseosos = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.titulo}>Planetas Gaseosos</Text>
        <Image
          source={{ uri: 'https://www.meteorologiaenred.com/wp-content/uploads/2021/02/planetas-gaseosos.jpg' }}
          style={styles.imagen}
          resizeMode="cover"
        />
        <Text style={styles.parrafo}>
          Los planetas gaseosos, también conocidos como gigantes gaseosos, son un tipo de planeta que se caracteriza por tener una atmósfera compuesta principalmente por 
          gases ligeros, como el hidrógeno y el helio. Estos planetas carecen de una superficie sólida definida y están compuestos principalmente por gases y líquidos.
        </Text>
        <Text style={styles.subtitulo}>Características</Text>
        <Text style={styles.parrafo}>
          Las principales características de los planetas gaseosos son las siguientes:
        </Text>
        <Text style={styles.caracteristica}>- No tienen una superficie bien definida.</Text>
        <Text style={styles.caracteristica}>- Están formados de una inmensa masa gaseosa donde abundan principalmente hidrógeno y helio.</Text>
        <Text style={styles.caracteristica}>- Para referirse a sus diámetros, superficies, volúmenes o densidades se hace respecto a la capa exterior vista desde fuera.</Text>
        <Text style={styles.caracteristica}>- Sus atmósferas son muy densas.</Text>
        <Text style={styles.caracteristica}>- Tienen una gran cantidad de satélites y sistemas de anillos.</Text>
        <Text style={styles.caracteristica}>- Se conocen con el nombre de planetas jovianos, debido a su apariencia con Júpiter en tamaño y características.</Text>
        <Text style={styles.caracteristica}>- Tienen una baja densidad y su núcleo es muy rocoso.</Text>
        <Text style={styles.caracteristica}>- Reciben muy poca cantidad de luz por lo que tienen una temperatura bastante baja.</Text>
        <Text style={styles.caracteristica}>- Giran de manera veloz, con una rotación de media de 10h.</Text>
        <Text style={styles.caracteristica}>- Tienen un campo magnético y gravitatorio potente que les permite retener las masas de gas que poseen.</Text>
        <Text style={styles.caracteristica}>- Las atmósferas y los patrones climáticos de los cuatro gigantes son bastante similares.</Text>
        <Text style={styles.subtitulo}>Por qué se llaman planetas gaseosos</Text>
        <Text style={styles.parrafo}>
          Los planetas gaseosos se llaman de esta manera porque son planetas en los cuales su composición hay dominación de los gases, principalmente el hidrógeno y helio. La mayoría de los exoplanetas o planetas extrasolares que han logrado ser descubiertos hasta ahora son gaseosos también debido a que son planetas de mayor tamaño y masa. Son también llamados planetas gigantes porque su tamaño es mucho mayor que el de los planetas terrestres del sistema solar y porque debido a esto, son más fáciles de descubrir por los científicos que otros planetas.
        </Text>
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
});

export default PlanetasGaseosos;
