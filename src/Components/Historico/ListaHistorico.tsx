import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BancoContext } from '../../Context/BancoContext';

const ListaHistorico = () => {
  const { historial } = useContext(BancoContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial de Transacciones</Text>
      <FlatList
        data={historial}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transaccion}>
            <Text>{item.descripcion}</Text>
            <Text>{item.fecha}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  transaccion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListaHistorico;
