// src/Screens/Inicio.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Saludo from '../Components/Inicio/Saludo';
import Saldo from '../Components/Inicio/Saldo';
import HistorialTransacciones from '../Components/Inicio/HistorialTransacciones';

const Inicio = () => {
  return (
    <View style={styles.contenedor}>
      <Saludo />
      <Saldo />
      <HistorialTransacciones />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default Inicio;
