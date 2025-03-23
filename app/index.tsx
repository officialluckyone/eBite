// app/index.tsx
import React, { useState } from "react";
import { View, Alert, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Text, TextInput, Button } from "react-native-paper";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Syarat: username: 'pengguna', password: 'masuk'
    if (username === "pengguna" && password === "masuk") {
      router.replace("/tabs"); // Pindah ke tab screen
    } else {
      Alert.alert("Login Gagal", "Username atau password salah!");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icon.png")} 
        style={styles.logo}
      />
      <Text variant="headlineMedium" style={styles.title}>
        eBite
      </Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 16,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
  },
});
