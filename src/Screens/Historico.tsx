// screens/HistoricoScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListaHistorico from '../Components/Historico/ListaHistorico';

const HistoricoScreen = () => {
  return (
    <View style={styles.container}>
      <ListaHistorico />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HistoricoScreen;
