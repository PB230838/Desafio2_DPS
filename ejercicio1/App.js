import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import RecordaTaskScreen from './src/screens/RecordaTaskScreen';
import RegistroActividadesScreen from './src/screens/RegistroActividadesScreen';
import DetalleActividadScreen from './src/screens/DetalleActividadScreen'; // Importa la pantalla de detalle de actividad

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar sesión' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrarse' }} />
        <Stack.Screen name="RecordaTask" component={RecordaTaskScreen} options={{ title: 'RecordaTask' }} />
        <Stack.Screen name="RegistroActividades" component={RegistroActividadesScreen} options={{ title: 'Registro de Actividades' }} />
        <Stack.Screen name="DetalleActividad" component={DetalleActividadScreen} options={{ title: 'Detalle de Actividad' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
