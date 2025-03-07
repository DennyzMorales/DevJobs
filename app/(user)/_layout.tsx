import { Tabs } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.shadow,
        headerTitle: () => (
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }} // Imagen de perfil
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Hola, Usuario</Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerTitleAlign: "left", // Alinea la info del perfil a la izquierda
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
      <Tabs.Screen name="add" options={{ title: "Add" }} />
      <Tabs.Screen name="searchbar" options={{ title: "Jobs" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#ffffff",
    position: "absolute",
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
    elevation: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
