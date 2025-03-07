import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const jobs = [
  { id: '1', title: 'Desarrollador React', company: 'Tech Corp' },
  { id: '2', title: 'Diseñador UX/UI', company: 'Creative Studio' },
];

export default function JobList() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text style={styles.sectionTitle}>Empleos Recientes</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.jobCard} 
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Debes registrarte para postularte.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  jobCard: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  jobTitle: { fontSize: 18, fontWeight: 'bold' },
  jobCompany: { fontSize: 14, color: 'gray' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 8, width: '80%', alignItems: 'center' },
  modalText: { fontSize: 16, marginBottom: 10 },
  modalButton: { backgroundColor: '#154c79', padding: 10, borderRadius: 5 },
  modalButtonText: { color: '#fff', fontSize: 16 },
});
