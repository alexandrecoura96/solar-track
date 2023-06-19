import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: ${RFValue(24)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: #fff;
  font-family: 'InterTight-Light';
  margin-bottom: ${RFValue(24)}px;
  align-self: center;
`;
