import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Filmes from '../FIlmes';

interface Iprops {
  voltar: any;
  filme?: any;
}

const Detalhes: React.FC<Iprops> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={{ fontSize: 16, color: '#fff' }}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Filme</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus enim
          aperiam quas, omnis dolore hic voluptatibus commodi doloribus iusto,
          cupiditate, at laborum dolorem voluptates consectetur placeat iure. A,
          vel fugiat!
        </Text>
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
    color: '#FFF',
    padding: 10,
    marginRight: 10,
  },
});
