import React, { useState } from "react";
import { 
  View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert 
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

export default function ProfileScreen() {
  const [name, setName] = useState("Juan Pérez");
  const [email, setEmail] = useState("juan.perez@email.com");
  const [phone, setPhone] = useState("+51 999 999 999");
  const [bio, setBio] = useState("Desarrollador de software en busca de oportunidades.");
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/100");
  const [cv, setCV] = useState<string | null>(null);

  // 📌 Seleccionar imagen de perfil
  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // 📌 Seleccionar un archivo PDF (CV)
  const handlePickCV = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf', // Puedes cambiarlo a otros formatos como 'image/*'
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      console.log(result.assets[0].uri); // Ruta del archivo seleccionado
    }
  };

  // 📌 Guardar los cambios
  const handleSave = () => {
    Alert.alert("Perfil actualizado", "Tus cambios han sido guardados.");
  };

  // 📌 Cerrar sesión
  const handleLogout = () => {
    Alert.alert("Cerrar Sesión", "¿Estás seguro de que deseas salir?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Salir", onPress: () => console.log("Sesión cerrada") },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* 🔹 Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mi Perfil</Text>
      </View>

      {/* 🔹 Profile Info */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={handlePickImage}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.uploadText}>Cambiar foto</Text>

        {/* 🔹 Formulario */}
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nombre" />
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Correo electrónico" keyboardType="email-address" />
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Teléfono" keyboardType="phone-pad" />
        <TextInput style={[styles.input, styles.textArea]} value={bio} onChangeText={setBio} placeholder="Descripción" multiline />

        {/* 🔹 Botón para subir CV */}
        <TouchableOpacity style={styles.uploadButton} onPress={handlePickCV}>
          <Text style={styles.uploadButtonText}>{cv ? "CV cargado" : "Subir CV (PDF)"}</Text>
        </TouchableOpacity>

        {/* 🔹 Botones de acción */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar Cambios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },

  // 🔹 Header
  header: { padding: 20, backgroundColor: "#FF8C00", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  headerText: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: "center" },

  // 🔹 Profile Section
  profileSection: { alignItems: "center", marginTop: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  uploadText: { fontSize: 14, color: "#007bff", marginBottom: 10 },

  // 🔹 Inputs
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textArea: { height: 80 },

  // 🔹 Botón Subir CV
  uploadButton: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, marginBottom: 10, width: "90%" },
  uploadButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "bold" },

  // 🔹 Botón Guardar Cambios
  saveButton: { backgroundColor: "#28a745", padding: 12, borderRadius: 8, marginBottom: 10, width: "90%" },
  saveButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "bold" },

  // 🔹 Botón Cerrar Sesión
  logoutButton: { backgroundColor: "#dc3545", padding: 12, borderRadius: 8, width: "90%" },
  logoutButtonText: { color: "#fff", fontSize: 16, textAlign: "center", fontWeight: "bold" },
});
