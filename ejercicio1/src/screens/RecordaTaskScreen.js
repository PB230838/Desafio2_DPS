import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign, Feather } from '@expo/vector-icons';
import Drawer from 'react-native-drawer';

const RecordaTaskScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const drawerRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadTasks();
    });

    return unsubscribe;
  }, [navigation]);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  };

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error al guardar las tareas:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      await saveTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      Alert.alert('Error', 'Ha ocurrido un error al eliminar la tarea. Por favor intenta de nuevo.');
    }
  };

  const handleEditTask = async (taskId) => {
    navigation.navigate('DetalleActividad', { taskId });
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleAddTask = async () => {
    navigation.navigate('RegistroActividades');
  };

  const getTaskColor = (fechaEntrega) => {
    const today = new Date();
    const deliveryDate = new Date(fechaEntrega);
    const differenceInDays = Math.ceil((deliveryDate - today) / (1000 * 60 * 60 * 24));

    if (differenceInDays < 0) {
      return 'red';
    } else if (differenceInDays === 0) {
      return 'green';
    } else {
      return 'blue';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (timeString) => {
    const time = new Date(timeString);
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <Drawer
      ref={drawerRef}
      content={<Menu handleLogout={handleLogout} />}
      openDrawerOffset={0.3}
      tapToClose={true}
      tweenHandler={(ratio) => ({
        main: { opacity: Math.max(0.54, 1 - ratio) }
      })}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>RecordaTask</Text>
          <TouchableOpacity onPress={() => drawerRef.current.open()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.taskList}>
          {tasks.length === 0 ? (
            <Text style={styles.emptyText}>No hay actividades registradas.</Text>
          ) : (
            tasks.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.taskItem, { borderColor: getTaskColor(item.fechaEntrega) }]}
                onPress={() => handleEditTask(item.id)}
              >
                <View style={styles.taskInfo}>
                  <Text style={styles.taskName}>{item.nombre}</Text>
                  <Text style={styles.taskDetail}>Materia: {item.materia}</Text>
                  <Text style={styles.taskDetail}>Equipo de Trabajo: {item.equipoTrabajo}</Text>
                  <Text style={styles.taskDetail}>Fecha de Entrega: {formatDate(item.fechaEntrega)}</Text>
                  <Text style={styles.taskDetail}>Hora de Entrega: {formatTime(item.horaEntrega)}</Text>
                </View>
                <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                  <Text style={styles.deleteButton}>Eliminar</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('RegistroActividades', { refresh: loadTasks })}
        >
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </Drawer>
  );
};

const Menu = ({ handleLogout }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Text style={styles.menuItemText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  taskList: {
    flex: 1,
  },
  emptyText: {
    marginTop: 20,
    fontStyle: 'italic',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  taskInfo: {
    flex: 1,
  },
  taskName: {
    fontWeight: 'bold',
  },
  taskDetail: {
    marginTop: 5,
  },
  deleteButton: {
    color: 'red',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecordaTaskScreen;
