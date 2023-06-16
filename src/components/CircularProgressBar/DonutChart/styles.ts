import {Canvas} from '@shopify/react-native-skia';
import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled.View`
  height: ${RFValue(65)}px;
  width: ${RFValue(60)}px;
  position: relative;
`;

export const StyledCanvas = styled(Canvas)`
  height: ${RFValue(70)}px;
  width: ${RFValue(70)}px;
`;

export const EnergyIconWrapper = styled.View`
  position: absolute;
  top: 48px;
  left: 24px;
`;
