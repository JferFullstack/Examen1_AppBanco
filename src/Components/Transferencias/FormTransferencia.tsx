import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { BancoContext } from '../../Context/BancoContext';

const FormTransferencia = () => {
  const { transferir } = useContext(BancoContext);
  const [monto, setMonto] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleTransferencia = () => {
    const montoNum = parseFloat(monto);
    if (isNaN(montoNum) || montoNum <= 0 || !descripcion) {
      Alert.alert('Error', 'Por favor ingrese un monto válido y una descripción.');
      return;
    }

    const exito = transferir(montoNum, descripcion);
    if (exito) {
      Alert.alert('Éxito', 'Transferencia realizada con éxito.');
    } else {
      Alert.alert('Error', 'Saldo insuficiente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Monto"
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <Button title="Transferir" onPress={handleTransferencia} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default FormTransferencia;
