import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const companies = [
  { id: '1', name: 'Tech Corp', logo: 'https://via.placeholder.com/50', description: 'Líder en tecnología' },
  { id: '2', name: 'Creative Studio', logo: 'https://via.placeholder.com/50', description: 'Expertos en diseño' },
];

export default function Companies() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Empresas Activas</Text>
      <FlatList
        horizontal
        data={companies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.companyCard}>
            <Image source={{ uri: item.logo }} style={styles.companyLogo} />
            <Text style={styles.companyName}>{item.name}</Text>
            <Text style={styles.companyDesc}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  companyCard: { backgroundColor: '#fff', padding: 10, marginRight: 10, borderRadius: 8, width: 120, alignItems: 'center' },
  companyLogo: { width: 50, height: 50, marginBottom: 5 },
  companyName: { fontWeight: 'bold', fontSize: 14 },
  companyDesc: { fontSize: 12, textAlign: 'center', color: 'gray' },
});
