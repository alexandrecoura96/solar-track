import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const GetStarted = styled.TouchableOpacity`
  background-color: #1a1d1a;
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  align-items: center;
`;

export const GetStartedText = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: 'InterTight-BlackItalic';
`;

export const GetStartedIconWrapper = styled.View`
  border-radius: ${RFValue(4)}px;
  padding: ${RFValue(8)}px;
  background-color: #aaf551;
  align-items: center;
  justify-content: center;
`;
