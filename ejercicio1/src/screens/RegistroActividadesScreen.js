import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegistroActividadesScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [materia, setMateria] = useState('');
  const [equipoTrabajo, setEquipoTrabajo] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState(new Date()); 
  const [horaEntrega, setHoraEntrega] = useState(new Date()); 
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleRegistroActividad = async () => {
    if (!nombre || !materia) {
      Alert.alert('Campos requeridos', 'Por favor completa los campos Nombre y Materia.');
      return;
    }

    const actividad = {
      id: new Date().getTime().toString(),
      nombre,
      materia,
      equipoTrabajo,
      fechaEntrega: fechaEntrega.toISOString(), 
      horaEntrega: horaEntrega.toISOString(), 
    };

    try {
      const actividadesGuardadas = await AsyncStorage.getItem('tasks');
      let nuevasActividades = [];
      if (actividadesGuardadas !== null) {
        nuevasActividades = JSON.parse(actividadesGuardadas);
      }

      nuevasActividades.push(actividad);
      await AsyncStorage.setItem('tasks', JSON.stringify(nuevasActividades));

      setNombre('');
      setMateria('');
      setEquipoTrabajo('');
      setFechaEntrega(new Date());
      setHoraEntrega(new Date());

      navigation.navigate('RecordaTask');

      Alert.alert('Actividad Registrada', 'La actividad se ha registrado exitosamente.');
    } catch (error) {
      console.error('Error al guardar la actividad:', error);
      Alert.alert('Error', 'Ha ocurrido un error al guardar la actividad. Por favor intenta de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Actividad</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
      />
      <TextInput
        style={styles.input}
        placeholder="Equipo de Trabajo"
        value={equipoTrabajo}
        onChangeText={setEquipoTrabajo}
      />
      <TouchableOpacity 
        style={styles.input} 
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{fechaEntrega.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={fechaEntrega}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            setFechaEntrega(selectedDate || fechaEntrega);
          }}
        />
      )}
      <TouchableOpacity 
        style={styles.input} 
        onPress={() => setShowTimePicker(true)}
      >
        <Text>{horaEntrega.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={horaEntrega}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            setHoraEntrega(selectedTime || horaEntrega);
          }}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={handleRegistroActividad}>
        <Text style={styles.buttonText}>Registrar Actividad</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegistroActividadesScreen;
