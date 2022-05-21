import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { Filme } from '../../interfaces/interface';
import Detalhes from '../Detalhes';

type FilmesProps = {
  // id?: number;
  // nome?: string;
  // sinopse?: string;
  // foto?: string;
  data: Filme;
};

export default function Filmes({
  data: { id, nome, sinopse, foto },
}: FilmesProps) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={{}}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{nome}</Text>

        <Image source={{ uri: foto }} style={styles.capa} />

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setVisibleModal(true)}
          >
            <Text style={styles.botaoTexto}>LEIA MAIS...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2,
    marginTop: 50,
  },

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
    margin: 0,
    zIndex: 9,
    marginRight: 0,
  },
  botao: {
    width: 100,
    backgroundColor: '#09a6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute',
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
  },
});
