import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Filmes from '../../Filmes';
import { ApiMovie, Movie } from '../../interfaces/interface';
import convertApiMovieToMovie from '../../utils/convertApiMovieToMovie';

const Dashboard = () => {
  const [filmes, setFilmes] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/popular/');
      const unformattedMovies: ApiMovie[] = response.data.results;
      const formattedMovies: Movie[] = unformattedMovies.map((movie) =>
        convertApiMovieToMovie(movie)
      );
      setFilmes(response.data.results);
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
      </View>
    );
  }
};

export default Dashboard;
