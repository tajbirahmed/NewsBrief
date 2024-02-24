import React, { useState } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
interface PageProps { 
  value: string, 
  setValue: (value: string) => void, 
}
const data = [
  { label: 'Past hour', value: '1' },
  { label: 'Past 24 hours', value: '2' },
  { label: 'Past week', value: '3' },
  { label: 'Past month', value: '4' },
  { label: 'Custom range', value: '5' },
];

const DropdownComponent = ({ value, setValue }: PageProps) => {
  const colorScheme = useColorScheme(); 
  
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (isFocus) {
      return (
        
        <Text style={[styles.label, isFocus && {
          color: colorScheme === 'dark' ? 'white' : 'black',
          backgroundColor: colorScheme === 'dark' ? 'black' : 'white'
       }]}>
            Any time
          </Text>
        
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? 'black' : 'white',}]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue', }]}
        placeholderStyle={[styles.placeholderStyle, { color: colorScheme === 'dark' ? 'white' : 'black', }]}
        selectedTextStyle={[styles.selectedTextStyle, { color: colorScheme === 'dark' ? 'white' : 'black', }]}
        containerStyle={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white', borderColor: 'gray', borderRadius: 10, }}
        itemTextStyle={{ color: colorScheme === 'dark' ? 'white' : 'black', }}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Any time' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.label);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : colorScheme === 'dark' ? 'white' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});