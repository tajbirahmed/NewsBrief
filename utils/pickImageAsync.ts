import * as ImagePicker from 'expo-image-picker';
import { imageUploadFirebase } from './imageUploadFirebase';
import { getPhotoUrl } from './getPhotoUrl';

export const pickImageAsync = async (): Promise<ImagePicker.ImagePickerSuccessResult | ImagePicker.ImagePickerCanceledResult> => {

    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
    })
    if (result.canceled)
        alert('Pick an image, will you?')
    if (!result.canceled) {
        imageUploadFirebase(result.assets[0].uri, "abc");
        getPhotoUrl(result.assets[0].uri, "abc");
    }
    
    
    return result;
}

export const pickCameraAsync = async (): Promise<ImagePicker.ImagePickerSuccessResult | ImagePicker.ImagePickerCanceledResult> => {
    const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
        cameraType: ImagePicker.CameraType.front,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })
    if (result.canceled)
        alert('Capture an image, will you?')
    if (!result.canceled) {
        

    }
    return result;
}

