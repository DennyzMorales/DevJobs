import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function PostJobScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePostJob = () => {
    console.log('Job Posted:', { title, description });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Publicar Oferta</Text>
      <TextInput
        style={styles.input}
        placeholder="Título del empleo"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción del empleo"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Publicar" onPress={handlePostJob} />
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
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});