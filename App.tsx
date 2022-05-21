import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './services/api';
import React, { useEffect, useState } from 'react';
import Filmes from './src/FIlmes';
import { Filme } from './interfaces/interface';

export default function App() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/r-api/?api=filmes');
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <View>
      <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Filmes data={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}
