'use strict';

import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

import Logo from '../assets/KKCM.png';

const dim = Dimensions.get('window');
const ratio = dim.width / 696;
// width: dim.width,
//     height: 231 * ratio,
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});

export default class LoginMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'flex-start',
          }}>
          <Image style={styles.headerLogo} source={Logo} />
        </View>
        <View style={{flex: 4}} />
      </View>
    );
  }
}
