import * as ImagePicker from 'expo-image-picker';

export const pickImageAsync = async (): Promise<ImagePicker.ImagePickerSuccessResult | ImagePicker.ImagePickerCanceledResult> => {

    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
    })
    if (result.canceled)
        alert('Pick an image, will you?')
    if (!result.canceled) {
        
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
        //
    }
    return result;
}

