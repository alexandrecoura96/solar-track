import {Canvas} from '@shopify/react-native-skia';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const UpsideCanvas = styled(Canvas)``;
export const DownsideCanvas = styled(Canvas)``;

export const ButtonWrapper = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: ${RFValue(24)}px;
`;

export const ExpectedButton = styled(TouchableOpacity)`
  border-width: ${RFValue(1)}px;
  border-color: #f4a460;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(16)}px;
`;

export const ExpectedButtonName = styled(Text)`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: 'InterTight-BoldItalic';
`;

export const GeneratedButton = styled(TouchableOpacity)`
  border-width: ${RFValue(1)}px;
  border-color: #09ff00;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(16)}px;
`;
export const GeneratedButtonName = styled(Text)`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: 'InterTight-BoldItalic';
`;
