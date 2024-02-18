import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/themes'

export default function TextLabel({ leftText, rightText }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={{fontSize: 16, color: COLORS.black, paddingVertical: 10}}>{leftText}</Text>
      <Text style={{fontSize: 16, color: COLORS.black}}>{rightText}</Text>
    </View>
  )
}