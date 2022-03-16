import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <Text>Detalles</Text>
      <Button
        title={'Ir a Inicio'}
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'palegreen',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
