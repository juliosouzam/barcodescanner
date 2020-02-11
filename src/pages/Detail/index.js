import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detail({navigation}) {
  const [barcode] = navigation.getParam('barcodes');

  if (!barcode) {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <View style={styles.infoGroup}>
          <Text style={styles.lable}>DATA: </Text>
          <Text style={styles.info}>{barcode.data}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.lable}>RAW DATA: </Text>
          <Text style={styles.info}>{barcode.rawData}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.lable}>TYPE: </Text>
          <Text style={styles.info}>{barcode.type}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.lable}>BOUNDS ORIGIN X: </Text>
          <Text style={styles.info}>
            {Math.round(barcode.bounds.origin.x * 100) / 100}
          </Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.lable}>BOUNDS ORIGIN Y: </Text>
          <Text style={styles.info}>
            {Math.round(barcode.bounds.origin.y * 100) / 100}
          </Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.lable}>BOUNDS SIZE HEIGHT: </Text>
          <Text style={styles.info}>
            {Math.round(barcode.bounds.size.height * 100) / 100}
          </Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.lable}>BOUNDS SIZE WIDTH: </Text>
          <Text style={styles.info}>
            {Math.round(barcode.bounds.size.width * 100) / 100}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main');
        }}
        style={styles.btnGoBack}>
        <Text style={styles.btnGoBackText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detail: {
    marginVertical: 10,
  },
  infoGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 10,
  },
  lable: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    fontSize: 18,
    bottom: 0,
  },
  btnGoBack: {
    height: 46,
    paddingHorizontal: 10,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnGoBackText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
