// /screens/Transferencias.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { BancoContext } from '../Context/BancoContext';

export default function Transferencias() {
  const banco = useContext(BancoContext);

  if (!banco) return null;

  const { saldo, transferir } = banco;

  const [cuenta, setCuenta] = useState('');
  const [nombre, setNombre] = useState('');
  const [montoStr, setMontoStr] = useState('');

  const realizarTransferencia = () => {
    const monto = Number(montoStr);

    if (!cuenta || !nombre || isNaN(monto) || monto <= 0) {
      Alert.alert('Error', 'Por favor complete todos los campos correctamente.');
      return;
    }

    if (monto > saldo) {
      Alert.alert('Error', 'No cuenta con el saldo para completar la transacción');
      return;
    }

    const descripcion = `Transferencia a ${nombre} (Cuenta: ${cuenta})`;

    const exito = transferir(monto, descripcion);

    if (exito) {
      Alert.alert('Éxito', 'La transferencia fue exitosa');
      // Limpiar campos
      setCuenta('');
      setNombre('');
      setMontoStr('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Transferencias</Text>

      <TextInput
        style={styles.input}
        placeholder="Número de Cuenta"
        value={cuenta}
        onChangeText={setCuenta}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre del Destinatario"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Monto a Transferir"
        value={montoStr}
        onChangeText={setMontoStr}
        keyboardType="numeric"
      />

      <Button title="Transferir Saldo" onPress={realizarTransferencia} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 24, marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});
