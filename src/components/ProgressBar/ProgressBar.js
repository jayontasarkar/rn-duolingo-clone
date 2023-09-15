import React from 'react'
import { Text, View } from 'react-native';
import styles from './styles';

function ProgressBar({ progress }) {
  return (
    <View style={styles.background}>
      <View style={[styles.foreground, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  )
}

export default ProgressBar;