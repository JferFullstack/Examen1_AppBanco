import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormTransferencia from '../Components/Transferencias/FormTransferencia';

const TransferenciaScreen = () => {
  return (
    <View style={styles.container}>
      <FormTransferencia />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TransferenciaScreen;
