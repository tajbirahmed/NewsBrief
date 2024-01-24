import { Icon } from '@rneui/base';
import React, { useState } from 'react'
import { Text, Touchable, TouchableOpacity, View, useColorScheme } from 'react-native'

const FooterBar = () => {
  const [selected, setSelected] = useState('home');
  const colorScheme = useColorScheme(); 
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white'
      }}
    >
      <View style={{
        width: '100%', 
        height: '100%', 
        minHeight: '100%', 
        minWidth: '100%',
        maxHeight: '100%',
        maxWidth: '100%', 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <View
          style={{ 
            width: '25%',
            height: '100%',
            minHeight: '100%',
            minWidth: '25%',
            maxHeight: '100%',
            maxWidth: '25%',
          }}
        >
          <TouchableOpacity
            onPress={() => { setSelected('home')}}
            style={{
            padding: 4, 
            paddingTop: 6, 
            flex: 1, 
            justifyContent: 'center',
          }}>
            {selected !== 'home' ? (<><Icon name='home' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
              <Text
                style={{
                  color: colorScheme === 'dark' ? 'white' : 'black',
                  alignSelf: 'center',
                  fontSize: 10,
                }}
              >Home
              </Text></>) : (<>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: 'red',
                    borderColor: colorScheme === 'dark' ? 'black' : 'white',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginBottom: 20,
                    position: 'absolute',
                    top: -3,
                    left: 30, 
                  }}
                >
                  <Icon name='home' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                </View>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    paddingTop: 30,
                    textAlign: 'center',
                    fontWeight: '800',
                  }}
                >Home</Text>
              </>)}
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            minHeight: '100%',
            minWidth: '25%',
            maxHeight: '100%',
            maxWidth: '25%',
          }}
        >
          <TouchableOpacity
            onPress={() => { setSelected('explore') }}
            style={{
            padding: 4,
            paddingTop: 6,
            flex: 1,
            justifyContent: 'center',
          }}>
            { selected !== 'explore' ? (<><Icon name='explore' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
              <Text
                style={{
                  color: colorScheme === 'dark' ? 'white' : 'black',
                  alignSelf: 'center',
                  fontSize: 10,
                }}
              >Explore
              </Text></>) : (<>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: 'red',
                    borderColor: colorScheme === 'dark' ? 'black' : 'white',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginBottom: 20,
                    position: 'absolute',
                    top: -3,
                    left: 30,
                  }}
                >
                  <Icon name='explore' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                </View>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    paddingTop: 30,
                    textAlign: 'center',
                    fontWeight: '800',
                  }}
                >Explore</Text>
              </>) }
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            minHeight: '100%',
            minWidth: '25%',
            maxHeight: '100%',
            maxWidth: '25%',
          }}
        >
          <TouchableOpacity
            onPress={() => { setSelected('favorite') }}
            style={{
            padding: 4,
            paddingTop: 6,
            flex: 1,
            justifyContent: 'center',
          }}>
            {selected !== 'favorite' ? (<><Icon name='favorite' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
              <Text
                style={{
                  color: colorScheme === 'dark' ? 'white' : 'black',
                  alignSelf: 'center',
                  fontSize: 10,
                }}
              >Favourite
              </Text></>) : (<>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: 'red',
                    borderColor: colorScheme === 'dark' ? 'black' : 'white',
                    flex: 1,
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    marginBottom: 10,
                    position: 'absolute',
                    top: -3,
                    left: 30,
                  }}
                >
                  <Icon name='favorite' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                </View>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    paddingTop: 30,
                    textAlign: 'center',
                    fontWeight: '800',
                  }}
                >Favorite</Text>
              </>)}
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            minHeight: '100%',
            minWidth: '25%',
            maxHeight: '100%',
            maxWidth: '25%',
          }}
        >
          <TouchableOpacity
            onPress={() => { setSelected('bookmark') }}
            style={{
            padding: 4,
            paddingTop: 6,
            flex: 1,
            justifyContent: 'center',
          }}>
            { selected !== 'bookmark' ? (<><Icon name='bookmark' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
              <Text
                style={{
                  color: colorScheme === 'dark' ? 'white' : 'black',
                  alignSelf: 'center',
                  fontSize: 10,
                }}
              >Bookmarks
              </Text></>) : (<>
                <View
                  style={{
                    height: 50, 
                    width: 50, 
                    borderRadius: 25, 
                    backgroundColor: 'red',
                    borderColor: colorScheme === 'dark' ? 'black' : 'white',  
                    flex: 1, 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginBottom: 10,
                    position: 'absolute', 
                    top: -3, 
                    left: 30, 
                  }}
                >
                  <Icon name='bookmark' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                </View>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    paddingTop: 30,
                    textAlign: 'center',
                    fontWeight: '800',
                  }}
                >Bookmarks</Text>
              </>)
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FooterBar