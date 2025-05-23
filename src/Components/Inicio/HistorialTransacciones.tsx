// src/Components/Inicio/HistorialTransacciones.tsx

import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BancoContext } from '../../Context/BancoContext';

const HistorialTransacciones = () => {
  const { historial } = useContext(BancoContext);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Historial de Transacciones</Text>
      <FlatList
        data={historial}
        renderItem={({ item }) => <Text style={styles.transaccion}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaccion: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HistorialTransacciones;
