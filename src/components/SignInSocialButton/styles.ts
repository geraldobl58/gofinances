import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Button = styled(TouchableOpacity)`
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
`

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;

  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.background};
`

export const Text = styled.Text`
  flex: 1;
  text-align: center;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`