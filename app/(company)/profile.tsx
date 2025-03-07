// app/(user)/profile.tsx
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Empresa</Text>
      <Text style={styles.info}>Nombre: TechCorp</Text>
      <Text style={styles.info}>Ubicación: San Francisco, CA</Text>
      <Text style={styles.info}>Sector: Tecnología</Text>
      <Button title="Editar Perfil" onPress={() => console.log('Edit Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
