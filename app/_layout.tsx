import { Stack } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false,
    animation: "fade", // 💡 Usa "fade" para evitar el flash blanco
    animationDuration: 10, // Hace la animación más lenta (500ms)
    presentation: "transparentModal", // 💡 Evita que aparezca un fondo blanco
    headerTransparent: true, // Hace que el header no ocupe espacio
    headerStyle: {
      backgroundColor: '#ff8c00'
    },
    headerTitleAlign: "center", 
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentStyle: {
      paddingHorizontal: 0,
      paddingTop: 0,
      backgroundColor: '#25292e',
    }
  }}
  
  >
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="+not-found" />
  </Stack>
  
}

