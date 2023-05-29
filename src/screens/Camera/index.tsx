import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Text, Image, View, Alert, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ComponentButtonInterface, ComponentButtonTakePicture } from '../../components';
import { ButtonTakePicture } from '../../components/ButtonTakePicture';
import { styles } from './styles';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

interface IPhoto {
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [vePhoto, setvePhoto] = useState(1)
  const [permissionQrCode, requestPermissionQrcode] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(1);
  const [face, setFace] = useState<FaceDetector.FaceFeature>()


  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }

  if (!permissionMedia) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionMedia.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the media</Text>
        <Button onPress={requestPermissionMedia} title="grant permission" />
      </View>
    );
  }

  if (!permissionQrCode) {
    return <View />;
  }

  if (!permissionQrCode.granted) {

    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the QrCode</Text>
        <Button onPress={requestPermissionQrcode} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      setPhoto(picture)
      setvePhoto(2)
    }

  }

  async function savePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso!")

  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }

  }
  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(2);
    alert(data);
  };

  const handleFacesDetected = ({ faces }: FaceDetectionResult): void => {
    if (faces.length > 0) {
      const faceDetect = faces[0] as FaceDetector.FaceFeature
      setFace(faceDetect)
    } else {
      setFace(undefined)
    }

  };

  return (
    <View style={styles.container}>

      {vePhoto == 1 ? (
        <>
          <Camera style={styles.camera} type={type} ref={ref} ratio='1:1'
            onBarCodeScanned={scanned == 2 ? undefined : handleBarCodeScanned}
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.accurate,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
              minDetectionInterval: 1000,
              tracking: true
            }}

          >
            <View style={styles.seta}>
              <TouchableOpacity onPress={toggleCameraType} >
                <AntDesign name="retweet" size={60} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <ComponentButtonTakePicture onPress={takePicture} />
            </View>
          </Camera>
          <ComponentButtonInterface title='Ler Denovo' type='primary' onPressI={() => setScanned(1)} />
          <View style={styles.sorriso}>
            {face && face.smilingProbability && face.smilingProbability > 0.5 ? (
              <Text style={styles.textf}>Sorrindo</Text>
            ) : (
              <Text style={styles.textf}>Não</Text>
            )}
          </View>
        </>
      ) : (
        <>
          <View style={styles.voltar}>
            <TouchableOpacity onPress={() => setvePhoto(1)} >
              <AntDesign name="leftcircle" size={40} color="black" />
            </TouchableOpacity>
          </View>
          {photo && photo.uri && (
            <Image source={{ uri: photo.uri }} style={styles.img} />
          )}
          <ComponentButtonInterface title='Salvar Imagem' type='primary' onPressI={savePhoto} />
          <ComponentButtonInterface title='Abrir Imagem' type='primary' onPressI={pickImage} />
        </>
      )
      }

    </View >

  );
}

