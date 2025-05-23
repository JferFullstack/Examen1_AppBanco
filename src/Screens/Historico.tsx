// /screens/Historico.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BancoContext } from '../Context/BancoContext';

export default function Historico() {
  const banco = useContext(BancoContext);

  if (!banco) return null;

  const { transacciones } = banco;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial Completo de Transacciones</Text>

      <FlatList
        data={transacciones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaccion}>
            <Text>{item.descripcion}</Text>
            <Text style={{ color: item.monto < 0 ? 'red' : 'green' }}>
              {item.monto < 0 ? '-' : '+'}L.{Math.abs(item.monto)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 24, marginBottom: 16 },
  transaccion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
