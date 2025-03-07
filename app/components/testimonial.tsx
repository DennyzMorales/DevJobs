import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';

// 🔹 Datos de empresas activas
const companies = [
  { id: '1', name: 'Tech Corp', logo: 'https://via.placeholder.com/80', description: 'Innovación en software' },
  { id: '2', name: 'Creative Studio', logo: 'https://via.placeholder.com/80', description: 'Diseño UX/UI de calidad' },
  { id: '3', name: 'DataWorks', logo: 'https://via.placeholder.com/80', description: 'Analítica y Big Data' },
];

// 🔹 Datos de testimonios
const testimonials = [
  { id: '1', user: 'Ana López', comment: 'Gracias a esta plataforma encontré mi primer empleo en Tech Corp.' },
  { id: '2', user: 'Carlos Pérez', comment: 'Me ayudó a conectar con empresas que valoran mi talento.' },
  { id: '3', user: 'Lucía García', comment: 'La mejor opción para estudiantes buscando oportunidades.' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* 🔥 Sección de Empresas Activas */}
      <Text style={styles.sectionTitle}>🏢 Empresas Activas</Text>
      <FlatList
        data={companies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.companyCard}>
            <Image source={{ uri: item.logo }} style={styles.companyLogo} />
            <View>
              <Text style={styles.companyName}>{item.name}</Text>
              <Text style={styles.companyDesc}>{item.description}</Text>
            </View>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* 🔥 Sección de Testimonios */}
      <Text style={styles.sectionTitle}>📣 Testimonios</Text>
      <FlatList
        data={testimonials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialUser}>{item.user}</Text>
            <Text style={styles.testimonialComment}>{item.comment}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  
  // 🔹 Estilos de Empresas
  companyCard: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, marginRight: 10, borderRadius: 8, alignItems: 'center' },
  companyLogo: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
  companyName: { fontSize: 18, fontWeight: 'bold' },
  companyDesc: { fontSize: 14, color: 'gray' },

  // 🔹 Estilos de Testimonios
  testimonialCard: { backgroundColor: '#fff', padding: 15, marginVertical: 8, borderRadius: 8 },
  testimonialUser: { fontSize: 16, fontWeight: 'bold' },
  testimonialComment: { fontSize: 14, color: 'gray' },
});
