// app/(user)/my-jobs.tsx
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useState } from 'react';

export default function MyJobsScreen() {
  const [jobs, setJobs] = useState([
    { id: '1', title: 'Desarrollador Web' },
    { id: '2', title: 'Diseñador UI/UX' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Ofertas</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <Text>{item.title}</Text>
            <Button title="Editar" onPress={() => console.log('Edit', item.id)} />
            <Button title="Eliminar" onPress={() => console.log('Delete', item.id)} />
          </View>
        )}
      />
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
  jobItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
  },
});
