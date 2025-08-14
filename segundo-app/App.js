import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Platform, StatusBar } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const escala = useRef(new Animated.Value(1)).current; // evita erro recriando a cada render

  // Paleta para o número mudar de cor a cada clique
  const cores = ['#FF5F6D', '#FFC371', '#00C9FF', '#92FE9D', '#A18CD1', '#FDCB82', '#F7797D'];
  const corNumero = cores[contador % cores.length];

  const animarBotao = () => {
    Animated.sequence([
      Animated.timing(escala, { toValue: 0.95, duration: 80, useNativeDriver: true }),
      Animated.timing(escala, { toValue: 1, duration: 80, useNativeDriver: true }),
    ]).start();
    setContador(c => c + 1);
  };

  return (
    <View style={styles.fundo}>
      <StatusBar barStyle="light-content" />
      <View style={styles.card}>
        <Text style={styles.titulo}>🌟 Bem-vindo ao meu App 02 da Danny 🌟</Text>

        <Text style={styles.texto}>
          Você clicou <Text style={[styles.numero, { color: corNumero }]}>{contador}</Text> vezes!
        </Text>

        <Animated.View style={{ transform: [{ scale: escala }] }}>
          <TouchableOpacity style={styles.botao} activeOpacity={0.85} onPress={animarBotao}>
            <Text style={styles.textoBotao}>Clique aqui</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#0f2027', // fundo bonito escuro
    padding: 24,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    ...(Platform.OS === 'android'
      ? { elevation: 8 }
      : { shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 12, shadowOffset: { width: 0, height: 8 } }),
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 18,
    color: '#222',
  },
  texto: {
    fontSize: 18,
    color: '#444',
    marginBottom: 16,
  },
  numero: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    backgroundColor: '#6a11cb', // roxo elegante
    ...(Platform.OS === 'android'
      ? { elevation: 4 }
      : { shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } }),
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});