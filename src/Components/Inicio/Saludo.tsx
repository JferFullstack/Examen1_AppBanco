// src/Components/Inicio/Saludo.tsx

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Saludo = () => {
  return <Text style={styles.texto}>¡Bienvenido!</Text>;
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Saludo;
