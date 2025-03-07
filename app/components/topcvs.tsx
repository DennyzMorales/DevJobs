import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const cvs = [
  { id: '1', name: 'Juan Pérez', photo: 'https://via.placeholder.com/50', profession: 'Desarrollador Web', clicks: 120 },
  { id: '2', name: 'María García', photo: 'https://via.placeholder.com/50', profession: 'Diseñadora UX/UI', clicks: 98 },
  { id: '3', name: 'Carlos Ramírez', photo: 'https://via.placeholder.com/50', profession: 'Analista de Datos', clicks: 85 },
];

export default function TopCVs() {
  return (
    <View>
      <Text style={styles.sectionTitle}>📌 CVs Más Clickeados</Text>
      <FlatList
        data={cvs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cvCard} onPress={() => alert(`Perfil de ${item.name}`)}>
            <Image source={{ uri: item.photo }} style={styles.cvPhoto} />
            <View>
              <Text style={styles.cvName}>{item.name}</Text>
              <Text style={styles.cvProfession}>{item.profession}</Text>
              <Text style={styles.cvClicks}>🔥 {item.clicks} clics</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  cvCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 8, alignItems: 'center' },
  cvPhoto: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  cvName: { fontSize: 16, fontWeight: 'bold' },
  cvProfession: { fontSize: 14, color: 'gray' },
  cvClicks: { fontSize: 12, color: 'red' },
});
