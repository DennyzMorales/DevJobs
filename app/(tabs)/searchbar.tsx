import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Modal, StyleSheet, Animated } from 'react-native';

// 🔹 Datos de empleos simulados
const jobs = [
  { id: '1', title: 'Desarrollador React', company: 'Tech Corp' },
  { id: '2', title: 'Diseñador UX/UI', company: 'Creative Studio' },
  { id: '3', title: 'Analista de Datos', company: 'DataWorks' },
];

export default function JobsScreen() {
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [modalVisible, setModalVisible] = useState(false);

  // 🔹 Variable de animación
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // 🔎 Filtrar trabajos
  const searchJobs = (text: string) => {
    setSearch(text);
    setFilteredJobs(jobs.filter(job => job.title.toLowerCase().includes(text.toLowerCase())));
  };
              
  // 🚀 Efecto cuando cambia modalVisible
  useEffect(() => {
    if (modalVisible) {
      // Inicia animación de entrada (fade-in)
      Animated.timing(fadeAnim, {
        toValue: 1, duration: 300, useNativeDriver: true
      }).start();
    } else {
      // Inicia animación de salida (fade-out)
      Animated.timing(fadeAnim, {
        toValue: 0, duration: 200, useNativeDriver: true
      }).start();
    }
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      {/* 🔎 Campo de Búsqueda */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar trabajo..."
        value={search}
        onChangeText={searchJobs}
      />

      {/* 📌 Lista de Trabajos */}
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.jobCard} 
            onPress={() => setModalVisible(true)} // 🚨 Abre el modal
          >
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
          </TouchableOpacity>
        )}
      />

      {/* 🚨 Modal con animación */}
      <Modal visible={modalVisible} transparent animationType="none">
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <Text style={styles.modalText}>Debes registrarte para postularte</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

      {/* 🔥 Botón flotante */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>🚀 Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },

  // 🔎 Estilos de Búsqueda
  searchBar: { 
    height: 50, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 8, 
    marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 4 
  },

  // 📌 Estilos de Trabajos
  jobCard: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8 },
  jobTitle: { fontSize: 18, fontWeight: 'bold' },
  jobCompany: { fontSize: 14, color: 'gray' },

  // 🚨 Estilos de Modal
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // 🔹 Oscurece el fondo para mejor visibilidad
  },
  modalContent: { 
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // 🔹 Fondo más claro para mayor legibilidad
    padding: 20, 
    borderRadius: 8, 
    width: '80%', 
    alignItems: 'center' 
  },
  modalText: { fontSize: 16, marginBottom: 10 },
  modalButton: { backgroundColor: '#154c79', padding: 10, borderRadius: 5 },
  modalButtonText: { color: '#fff', fontSize: 16 },

  // 🔥 Botón flotante
  floatingButton: { 
    position: 'absolute', bottom: 20, right: 20, backgroundColor: '#154c79', padding: 15, borderRadius: 30,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 
  },
  floatingButtonText: { color: '#fff', fonstSize: 16, fontWeight: 'bold' },
});
