import { TouchableOpacity } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 5px;

  padding: 18px;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.shape};


`