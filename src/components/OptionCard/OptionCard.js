import React from 'react'
import { Image, Text, Pressable } from 'react-native'
import PropTypes from 'prop-types';
import styles from './styles'

function OptionCard({ text, image, isSelected, onPress }) {
  return (
    <Pressable style={[styles.card, isSelected ? styles.selectedCard : {}]} onPress={onPress}>
      <Image resizeMode="contain" source={{ uri: image }} style={styles.cardImage} />
      <Text style={[styles.cardText, isSelected ? styles.selectedCardText : {}]}>{text}</Text>
    </Pressable>
  )
}

OptionCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
};

OptionCard.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {}
};

export default OptionCard;