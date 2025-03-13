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

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/auth/firebase";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { doc, getDoc } from "firebase/firestore";

const LoginForm: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const role = userDoc.data().role;
  
        if (role === "company") {
          router.replace("/(company)/home"); // Redirigir a empresas
        } else {
          router.replace("/(user)/home"); // Redirigir a usuarios normales
        }
      } else {
        setError("⚠️ No se pudo obtener la información del usuario.");
      }
      Alert.alert("✅ Éxito", "Inicio de sesión exitoso");
      router.replace("/(user)/home");
    } catch (err: any) {
      console.error("Error de autenticación:", err.message);

      switch (err.code) {
        case "auth/user-not-found":
          setError("❌ No existe una cuenta con este correo.");
          break;
        case "auth/wrong-password":
          setError("❌ La contraseña es incorrecta.");
          break;
        case "auth/too-many-requests":
          setError("⚠️ Demasiados intentos. Intenta más tarde.");
          break;
        default:
          setError("❌ Ocurrió un error. Intenta nuevamente.");
          break;
      }
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/random/800x600" }}
      style={styles.background}
    >
      <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient colors={["#007bff", "#0056b3"]} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => router.push("/components/authComponents/RegisterForm")}>
            <Text style={styles.registerLink}>Regístrate aquí</Text>
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
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#000",
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
    color: "#333",
  },
  registerLink: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginForm;
