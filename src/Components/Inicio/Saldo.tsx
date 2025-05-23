// src/Components/Inicio/Saldo.tsx

import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BancoContext } from '../../Context/BancoContext';

const Saldo = () => {
  const { saldo, depositar } = useContext(BancoContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Saldo Actual</Text>
      <Text style={styles.saldo}>L. {saldo}</Text>
      <Button title="Depositar L.500" onPress={() => depositar(500)} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  saldo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Saldo;
