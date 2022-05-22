import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Filme } from '../../interfaces/interface';

interface DetalhesProps {
  voltar: () => void;
  filme: Filme;
}

const Detalhes: React.FC<DetalhesProps> = ({ voltar, filme }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{ fontSize: 16, color: '#fff' }}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>{filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{filme.sinopse}</Text>
      </View>
    </View>
  );
};

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#E52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titulo: {
    color: '#FFF',
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
  },
  sinopse: {
    color: '#FFF',
    fontSize: 18,
    padding: 10,
  },
  descricao: {
    fontSize: 20,
    color: '#FFF',
    padding: 10,
    marginRight: 10,
  },
});
