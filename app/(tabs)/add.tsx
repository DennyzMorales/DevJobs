import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué deseas agregar?</Text>
      <TouchableOpacity style={styles.option} onPress={() => alert("Subir CV")}>
        <Ionicons name="document-text-outline" size={24} color="black" />
        <Text style={styles.optionText}>Subir CV</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => alert("Publicar Oferta")}>
        <Ionicons name="briefcase-outline" size={24} color="black" />
        <Text style={styles.optionText}>Publicar Oferta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => alert("Nueva Publicación")}>
        <Ionicons   name="create-outline" size={24} color="black" />
        <Text style={styles.optionText}>Nueva Publicación</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  option: { flexDirection: "row", alignItems: "center", backgroundColor: "#eee", padding: 10, margin: 5, borderRadius: 5, width: "80%" },
  optionText: { marginLeft: 10, fontSize: 16 },
});
