import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <Text>Inicio</Text>
      <Button
        title={'Ir a detalles'}
        onPress={() => navigation.navigate('Detalles')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'palegoldenrod',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
