import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetalleActividadScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const [nombre, setNombre] = useState('');
  const [materia, setMateria] = useState('');
  const [equipoTrabajo, setEquipoTrabajo] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [horaEntrega, setHoraEntrega] = useState('');

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        const tasks = JSON.parse(storedTasks);
        const task = tasks.find(task => task.id === taskId);
        if (task) {
          setNombre(task.nombre);
          setMateria(task.materia);
          setEquipoTrabajo(task.equipoTrabajo);
          setFechaEntrega(task.fechaEntrega);
          setHoraEntrega(task.horaEntrega);
        }
      }
    } catch (error) {
      console.error('Error al cargar la tarea:', error);
    }
  };

  const handleEditTask = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        const tasks = JSON.parse(storedTasks);
        const updatedTasks = tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              nombre,
              materia,
              equipoTrabajo,
              fechaEntrega,
              horaEntrega,
            };
          }
          return task;
        });
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error al editar la tarea:', error);
      Alert.alert('Error', 'Ha ocurrido un error al editar la tarea. Por favor intenta de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Actividad</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Fecha de Entrega (DD/MM/AAAA)"
        value={fechaEntrega}
        onChangeText={setFechaEntrega}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora de Entrega (HH:MM)"
        value={horaEntrega}
        onChangeText={setHoraEntrega}
      />
      <TouchableOpacity style={styles.button} onPress={handleEditTask}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
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

export default DetalleActividadScreen;
