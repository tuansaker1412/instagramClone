import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { image1, profile, plus, gallery, userInfo } from './assets/images';
import axios from 'axios';
const { width, height } = Dimensions.get('window');

const App = (props) => {
  const [dem, setDem] = useState(0);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  useEffect(() => {
    getWeather();
    return () => { };
  }, [dem]);

  const getWeather = async () => {
    const response = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather?q=ho%20Chi%20Minh&appid=5a946fa5e49dfe52dca7c9e3e78e9463&units=metric',
    );
    console.log('================================================');
    console.log('response', response.data);
    console.log('================================================');
  };

  const renderGallery = () => {
    return (
      <View>
        <Text>Gallery</Text>
      </View>
    );
  };

  const renderUserInfo = () => {
    return (
      <View>
        <Text>User info</Text>
      </View>
    );
  };

  console.log('================================================');
  console.log('render');
  console.log('================================================');

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: (20 / 375) * width,
          color: '#262626',
          textAlign: 'center',
        }}>
        andrewmundy
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <View style={{ marginLeft: 17, marginRight: (46 / 375) * width }}>
          <Image
            source={profile}
            style={{
              width: (77 / 375) * width,
              height: (77 / 375) * width,
            }}
            resizeMode="contain"
          />
          <Image
            source={plus}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: (174 / 375) * width,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20 }}>
              1,487
            </Text>
            <Text>Posts</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20 }}>
              1,487
            </Text>
            <Text>Posts</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 20 }}>
              1,487
            </Text>
            <Text>Posts</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          setDem(dem + 1);
        }}>
        <View
          style={{
            // width: 342,
            // height: 30,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#dbdbdb',
            marginHorizontal: 16,
            marginVertical: 19,
            paddingVertical: 8,
          }}>
          <Text>{`Edit Profile ${dem}`}</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          borderTopColor: '#ececec',
          borderTopWidth: StyleSheet.hairlineWidth,
        }}>
        <TouchableOpacity
          style={[
            {
              flex: 1,
              paddingVertical: 10,
              alignItems: 'center',
            },
            currentTabIndex === 0
              ? {
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }
              : {},
          ]}
          onPress={() => {
            setCurrentTabIndex(0);
          }}>
          <View>
            <Image
              source={gallery}
              style={{
                tintColor: currentTabIndex === 0 ? '#000' : '#b4b4b4',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            { flex: 1, alignItems: 'center', paddingVertical: 10 },
            currentTabIndex === 1
              ? {
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }
              : {},
          ]}
          onPress={() => {
            setCurrentTabIndex(1);
          }}>
          <View>
            <Image
              source={userInfo}
              style={{
                tintColor: currentTabIndex === 1 ? '#000' : '#b4b4b4',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      {currentTabIndex === 0 ? renderGallery() : renderUserInfo()}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
