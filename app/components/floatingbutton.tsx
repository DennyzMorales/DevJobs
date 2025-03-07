import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  onPress: () => void;
}

export default function FloatingButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Text style={styles.floatingButtonText}>🚀 Registrarse</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: { 
    position: 'absolute', bottom: 20, right: 20, 
    backgroundColor: '#154c79', padding: 15, borderRadius: 30,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 
  },
  floatingButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
