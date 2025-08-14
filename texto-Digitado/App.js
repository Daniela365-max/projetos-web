import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <ImageBackground
      source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/seo-3d-web-development-programming-code-or-app-development-with-phone-based-web-design-powerpoint-background_53852e73b9__960_540.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem-vindo ao meu app!</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#aaa"
        />

        <Text style={styles.texto}>
          Olá, <Text style={styles.nome}>{nome || 'visitante'}</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff1eecff',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    height: 50,
    width: '80%',
    borderWidth: 2,
    borderColor: '#ff1eceff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  nome: {
    fontWeight: 'bold',
    color: '#91ff00ff',
  },
});
