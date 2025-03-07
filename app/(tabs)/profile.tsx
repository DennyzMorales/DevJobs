import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [selectedDay, setSelectedDay] = useState("mo");

  const days = ["su", "mo", "tu", "we", "th", "fr", "sa"];

  return (
    <View style={styles.container}>
      {/* 🔹 Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Recruitment Process</Text>
      </View>

      {/* 🔹 Content Section */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Showing Jobs for {selectedDay.toUpperCase()}</Text>
      </View>

      {/* 🔹 Secondary Navigation Bar (Above Primary Navigation) */}
      <View style={styles.secondaryNav}>
        {days.map((day) => (
          <TouchableOpacity
            key={day}
            style={[styles.navItem, selectedDay === day && styles.activeNavItem]}
            onPress={() => setSelectedDay(day)}
          >
            <Text style={[styles.navText, selectedDay === day && styles.activeNavText]}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🔹 Primary Navigation Bar (Bottom Tabs) */}
      <View style={styles.primaryNav}>
        <Text style={styles.primaryNavText}>🏠 Home</Text>
        <Text style={styles.primaryNavText}>🔍 Search</Text>
        <Text style={styles.primaryNavText}>👤 Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },

  // 🔹 Header Styling
  header: { padding: 20, backgroundColor: "#FF8C00", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  headerText: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: "center" },

  // 🔹 Content Section
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  contentText: { fontSize: 18, color: "#333" },

  // 🔹 Secondary Navigation (Above Primary Navigation)
  secondaryNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    position: "absolute",
    bottom: 70, // Puts it above primary nav
    left: 0,
    right: 0,
  },
  navItem: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 },
  activeNavItem: { backgroundColor: "#FF8C00" },
  navText: { fontSize: 16, color: "#555" },
  activeNavText: { color: "#fff", fontWeight: "bold" },

  // 🔹 Primary Navigation (Bottom Bar)
  primaryNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#222",
    paddingVertical: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  primaryNavText: { color: "#fff", fontSize: 16 },
});
