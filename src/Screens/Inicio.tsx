// screens/InicioScreen.tsx

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Saludo from '../Components/Inicio/Saludo';
import Saldo from '../Components/Inicio/Saldo';
import HistorialTransacciones from '../Components/Inicio/HistorialTransacciones';

const InicioScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Saludo />
      <Saldo />
      <HistorialTransacciones />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
});

export default InicioScreen;
