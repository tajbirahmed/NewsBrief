import { Alert } from "react-native";
import { pickImageAsync } from "./pickImageAsync";

export const createThreeButtonAlert = () : number => {
  let a: number = 4; 
  Alert.alert('Image Selection Medium', '', [
    {
      text: 'Camera',
      onPress: () => { a = 1 },
      style: 'default'
    },
    {
      text: 'Local Storage',
      onPress: () => { a = 2 },
      style: 'default',
    },
    {
      text: 'Cancel',
      onPress: ()  => { a = 3 },
      style: 'cancel'
    },
  ])
  return a;
};