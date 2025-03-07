import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../styles/globalStyles';

export default function CompanyHomeScreen() {
  const [candidates, setCandidates] = useState([
    { id: '1', name: 'Juan Pérez', job: 'Desarrollador Frontend' },
    { id: '2', name: 'María López', job: 'Diseñadora UX/UI' },
    { id: '3', name: 'Carlos Gómez', job: 'Analista de Datos' },
  ]);

  return (
    <View style={globalStyles.container}>
      {/* Título */}
      <Text style={globalStyles.title}>Panel de Empresa</Text>

      {/* Sección de estadísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10</Text>
          <Text style={styles.statLabel}>Ofertas Publicadas</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>25</Text>
          <Text style={styles.statLabel}>Postulaciones</Text>
        </View>
      </View>

      {/* Botones de acción */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Publicar Oferta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Ver Aplicaciones</Text>
        </TouchableOpacity>
      </View>

      {/* Últimos candidatos */}
      <Text style={styles.sectionTitle}>Últimos Postulantes</Text>
      <FlatList
        data={candidates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.candidateCard}>
            <Text style={styles.candidateName}>{item.name}</Text>
            <Text style={styles.candidateJob}>{item.job}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    color: '#bbb',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  candidateCard: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  candidateName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  candidateJob: {
    color: '#bbb',
  },
});
