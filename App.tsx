import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import api from './services/api';
import React, { useEffect, useState } from 'react';
import Filmes from './src/FIlmes';
import { Filme } from './interfaces/interface';

export default function App() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#2009ec" size={45} />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Filmes {...item} />}
        />
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
}
