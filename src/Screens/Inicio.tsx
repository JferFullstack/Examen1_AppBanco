import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BancoContext } from '../Context/BancoContext';

const Inicio = ({ navigation }) => {
  const { saldo, depositar } = useContext(BancoContext);

  return (
    <View style={styles.container}>
      <Text style={styles.saldo}>Saldo actual: L.{saldo}</Text>
      <Button title="Depositar L.500" onPress={() => depositar(500)} />
      <Button title="Ir a Transferencias" onPress={() => navigation.navigate('Transferencias')} />
      <Button title="Ver Historial" onPress={() => navigation.navigate('Historico')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saldo: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Inicio;
