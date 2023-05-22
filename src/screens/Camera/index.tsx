import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Text, Image, View, Alert } from 'react-native';
import { ComponentButtonInterface, ComponentButtonTakePicture } from '../../components';
import { ButtonTakePicture } from '../../components/ButtonTakePicture';
import { styles } from './styles';
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker';

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

  return (
    <View style={styles.container}>

      {vePhoto == 1 ? (
        <>
          <Camera style={styles.camera} type={type} ref={ref} ratio='1:1'>
            <ComponentButtonInterface title='Trocar' type='primary' onPressI={toggleCameraType} />
            <ComponentButtonTakePicture onPress={takePicture}/>
          </Camera>
        </>
      ) : (
        <>
          {photo && photo.uri && (
            <Image source={{ uri: photo.uri }} style={styles.img} />
          )}
          <ComponentButtonInterface title='Salvar Imagem' type='primary' onPressI={savePhoto} />
          <ComponentButtonInterface title='Abrir Imagem' type='primary' onPressI={pickImage} />
        </>
      )}

    </View>

  );
}

