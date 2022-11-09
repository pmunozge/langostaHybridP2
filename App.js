import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native';
import { Home} from './app/views/Home.js'
import { Evolucion} from './app/views/Evolucion.js'
import { NuevoReto} from './app/views/NuevoReto.js'
import { Perfil} from './app/views/Perfil.js'
import { Contactar} from './app/views/Contactar.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Langosta Home'} } />
        <Stack.Screen 
          name="Evolucion" 
          component={Evolucion} 
          options={({ navigation }) => ({
            title: 'Evolucion',
              
              headerRight: () => (
                <Button title="Inicio" onPress={() =>
                  navigation.navigate('Home')} color="#ff0" />
              ),
            })}
        />
        <Stack.Screen 
          name="NuevoReto" 
          component={NuevoReto} 
          options={({ navigation }) => ({
            title: 'Nuevo Reto',
              
              headerRight: () => (
                <Button title="Inicio" onPress={() =>
                  navigation.navigate('Home')} color="#ff0" />
              ),
            })}
      />
        <Stack.Screen 
          name="Perfil" 
          component={Perfil} 
          options={({ navigation }) => ({
            title: 'Perfil',
            
            headerRight: () => (
              <Button title="Inicio" onPress={() =>
                navigation.navigate('Home')} color="#ff0" />
            ),
          })}
        
      />
        <Stack.Screen 
          name="Contactar" 
          component={Contactar} 
          options={({ navigation }) => ({
            title: 'Contactar',
              
              headerRight: () => (
                <Button title="Inicio" onPress={() =>
                  navigation.navigate('Home')} color="#ff0" />
              ),
            })}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
