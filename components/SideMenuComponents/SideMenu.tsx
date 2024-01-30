import { Icon } from "@rneui/base";
import React,{ useRef } from "react";
import { View, ScrollView, TouchableOpacity, Text, useColorScheme, DrawerLayoutAndroid } from "react-native";

interface DrawerProps { 
  drawer: React.RefObject<DrawerLayoutAndroid> | null,
}

const SideMenu = ({ drawer } : DrawerProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{
      flex: 1,
      paddingTop: 40,
    }}>
      <Text
        style={{
          marginLeft: 30,
          fontSize: 30,
          fontWeight: 'bold',
          paddingTop: 8,
          marginBottom: 10,
          color: colorScheme === 'dark' ? 'white' : 'black',
        }}
      >
        Logo News Brief
      </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          marginBottom: 11,
        }}
      />
      <ScrollView
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 30,
          marginTop: 10,
          marginBottom: 10,
        }}
      >


        <TouchableOpacity>
          <View style={{
            flex: 1,
            flexDirection: 'row',
          }}>
            <Icon name='settings' type='material' color={colorScheme === 'dark' ? 'white' : 'black'}
              size={25}
            />
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 25,
                marginBottom: 25,
                color: colorScheme === 'dark' ? 'white' : 'black',
              }}
            >   Settings
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            flex: 1,
            flexDirection: 'row',
          }}>
            <Icon name='person' type='material' color={colorScheme === 'dark' ? 'white' : 'black'}
              size={25}
            />
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 25,
                marginBottom: 25,
                color: colorScheme === 'dark' ? 'white' : 'black',
              }}
            >   Manage Account
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            flex: 1,
            flexDirection: 'row',
          }}>
            <Icon name='help' type='material' color={colorScheme === 'dark' ? 'white' : 'black'}
              size={25}
            />
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 25,
                marginBottom: 25,
                color: colorScheme === 'dark' ? 'white' : 'black',
              }}
            >   Help Center
            </Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default SideMenu