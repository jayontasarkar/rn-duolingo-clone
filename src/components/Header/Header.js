import React from 'react'
import { Image, Text, View } from 'react-native';
import ProgressBar from '../ProgressBar';
import styles from './styles';
import heart from '../../../assets/images/heart.png';

function Header({ progress, lives, onPress }) {
  return (
    <View style={styles.root}>
      <Text style={styles.closeIcon} onPress={onPress}>X</Text>
      <ProgressBar progress={progress} />

      <Image source={heart} style={styles.icon} />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  )
}

export default Header;
