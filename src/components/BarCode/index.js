import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function BarCode({navigation}) {
  const [camera, setCamera] = useState(null);

  async function takePicture() {
    if (camera) {
      const options = {quality: 0.5, base64: true, pauseAfterCapture: true};
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={setCamera}
        style={styles.preview}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          // camera.pausePreview();
          navigation.navigate('Detail', {barcodes});
        }}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={takePicture.bind(this)}
          style={styles.capture}>
          <Text style={styles.btnText}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  btnContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
