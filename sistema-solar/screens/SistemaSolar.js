import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

const SistemaSolar = ({ navigation }) => {
  const [planetas, setPlanetas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPlanetas();
  }, []);

  const fetchPlanetas = async () => {
    try {
      const response = await fetch('https://661783e1ed6b8fa43482d6f1.mockapi.io/Planetas');
      const data = await response.json();
      setPlanetas(data);
    } catch (error) {
      console.error('Error fetching planetas:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detalle Planeta', { planeta: item })}
    >
      <Image source={{ uri: item.imagen }} style={styles.planetaImage} />
      <View style={styles.planetaInfo}>
        <Text style={styles.planetaName}>{item.nombre}</Text>
        <Text style={styles.planetaType}>{item.tipo}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = () => {
    const filteredPlanetas = planetas.filter(planeta =>
      planeta.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredPlanetas;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar Planeta"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={handleSearch()}
        renderItem={renderItem} 

        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E8F2',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  planetaImage: {
    width: 70,
    height: 70,
    marginRight: 20,
    borderRadius: 35,
  },
  planetaInfo: {
    flex: 1,
  },
  planetaName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  planetaType: {
    fontSize: 14,
    color: 'gray',
  },
});


export default SistemaSolar;
