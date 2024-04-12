import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SistemaSolar from './screens/SistemaSolar';
import DetallePlaneta from './screens/DetallePlaneta';
import PlanetasGaseosos from './screens/PlanetaGaseoso';
import PlanetaRocoso from './screens/PlanetaRocoso'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SistemaSolarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sistema Solar" component={SistemaSolar} options={{ headerShown: false }} />
      <Stack.Screen name="Detalle Planeta" component={DetallePlaneta} />
      <Stack.Screen name="Planeta Gaseoso" component={PlanetasGaseosos} />
      <Stack.Screen name="Planeta" component={PlanetaRocoso} />
      
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Sistema Solar') {
              iconName = focused ? 'planet' : 'planet-outline';
            } else if (route.name === 'Planetas Gaseosos') {
              iconName = focused ? 'earth' : 'earth-outline';
            } else if (route.name === 'Planeta Rocoso') {
              iconName = focused ? 'moon' : 'moon-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Sistema Solar" component={SistemaSolarStack} />
        <Tab.Screen name="Planetas Gaseosos" component={PlanetasGaseosos} />
        <Tab.Screen name="Planeta Rocoso" component={PlanetaRocoso} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
