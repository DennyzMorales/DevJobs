import React, { useState } from 'react';
import { ScrollView, StyleSheet, Modal, View } from 'react-native';
import SearchBar from './searchbar';
import CompanyList from '../components/company';
import TestimonialList from '../components/testimonial';
import JobList from '../components/jobs';
import RegisterModal from '../modals/registermodal';
import FloatingButton from '../components/floatingbutton';
import TopCVs from '../components/topcvs';

// 🔹 Datos de prueba
const jobs = [
  { id: '1', title: 'Desarrollador React', company: 'Tech Corp' },
  { id: '2', title: 'Diseñador UX/UI', company: 'Creative Studio' },
  { id: '3', title: 'Analista de Datos', company: 'DataWorks' },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [modalVisible, setModalVisible] = useState(false);

  // 🔎 Filtrar trabajos por búsqueda
  const searchJobs = (text: string) => {
    setSearch(text);
    setFilteredJobs(jobs.filter(job => job.title.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar search={search} onSearch={searchJobs} />
      <CompanyList />
      <TestimonialList />
      <JobList jobs={filteredJobs} onPressJob={() => setModalVisible(true)} />
      <RegisterModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <FloatingButton />
      <TopCVs/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
});
