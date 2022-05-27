import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { ApiMovie, Movie } from '../interfaces/interface';
import Detalhes from '../Detalhes';
import { Card } from './styles';
import { imageBaseUrl } from '../services/api';

export default function Filmes(filme: ApiMovie) {
  const [visibleModal, setVisibleModal] = useState(false);
  console.log(`${imageBaseUrl}${filme.poster_path}`);

  return (
    <View>
      <Card>
        <View>
          <Text style={styles.titulo}>{filme.title}</Text>

          <Image
            source={{ uri: `${imageBaseUrl}${filme.poster_path}` }}
            style={styles.capa}
          />

          <View style={styles.areaBotao}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => setVisibleModal(true)}
            >
              <Text style={styles.botaoTexto}>LEIA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={filme} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // card: {
  //   backgroundColor: '#FFF',
  //   margin: 15,
  //   marginTop: 50,
  // },

  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#09a6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
  },
});
