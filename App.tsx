import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navegacion from './src/Navigation/Navegacion';
import { BancoProvider } from './src/Context/BancoContext';

export default function App() {
  return (
    <BancoProvider>
      <NavigationContainer>
        <Navegacion />
      </NavigationContainer>
    </BancoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
