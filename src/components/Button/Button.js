import React from 'react'
import styles from './styles'
import { Pressable, Text } from 'react-native';
import { PropTypes } from 'prop-types';

function Button({ text, onPress, disabled }) {
  return (
    <Pressable disabled={disabled} style={[styles.container, disabled ? styles.disabledBtn : {}]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  onPress: () => {},
  disabled: false
};

export default Button;