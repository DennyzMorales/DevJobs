import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/auth/firebase";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { doc, setDoc } from "firebase/firestore";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"user" | "company">("user"); // 🔥 Estado para el tipo de usuario
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("⚠️ Todos los campos son obligatorios.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("⚠️ Ingresa un correo válido.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔥 Guardar el tipo de usuario en Firestore
      await setDoc(doc(db, "users", user.uid), {
        email,
        role: userType, // "user" o "company"
      });

      Alert.alert("✅ Registro exitoso", "Tu cuenta ha sido creada.");

      // 🔥 Redirigir según el tipo de usuario
      if (userType === "company") {
        router.replace("/(company)/home"); // Empresas
      } else {
        router.replace("/(user)/home"); // Alumnos
      }
    } catch (err: any) {
      console.error("Error de registro:", err);

      let errorMessage = "❌ Ocurrió un error. Intenta nuevamente.";

      switch (err.code) {
        case "auth/email-already-in-use":
          errorMessage = "⚠️ Este correo ya está en uso.";
          break;
        case "auth/invalid-email":
          errorMessage = "⚠️ Correo no válido.";
          break;
        case "auth/weak-password":
          errorMessage = "⚠️ La contraseña es demasiado débil.";
          break;
      }

      setError(errorMessage);
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/random/800x600?dark" }}
      style={styles.background}
    >
      <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} />
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>

        {/* 🔥 Selector de tipo de cuenta */}
        <View style={styles.selectorContainer}>
          <TouchableOpacity
            style={[styles.selectorButton, userType === "user" && styles.selected]}
            onPress={() => setUserType("user")}
          >
            <Text style={styles.selectorText}>Alumno</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectorButton, userType === "company" && styles.selected]}
            onPress={() => setUserType("company")}
          >
            <Text style={styles.selectorText}>Empresa</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#888"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <LinearGradient colors={["#444", "#222"]} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => router.push("/components/authComponents/LoginForm")}>
            <Text style={styles.registerLink}>Inicia sesión aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    padding: 25,
    backgroundColor: "rgba(10, 10, 10, 0.7)",
    borderRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
  },
  selectorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  selectorButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#333",
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: "#007bff",
  },
  selectorText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    height: 45,
    borderColor: "#444",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "rgba(30, 30, 30, 0.8)",
    color: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 12,
    textAlign: "center",
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#ccc",
  },
  registerLink: {
    fontSize: 14,
    color: "#00aaff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default RegisterForm;
