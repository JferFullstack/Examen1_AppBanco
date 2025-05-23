import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../Screens/Inicio';
import Transferencias from '../Screens/Transferencias';
import Historico from '../Screens/Historico';


const Stack = createNativeStackNavigator();

export default function Navegacion() {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Transferencias" component={Transferencias} />
      <Stack.Screen name="Historico" component={Historico} />
    </Stack.Navigator>
  );
}
