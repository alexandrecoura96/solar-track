import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;

export const TotalCardWrapper = styled.View`
  flex-direction: row;
  gap: ${RFValue(16)}px;
`;

export const TotalCardColumn = styled.View`
  flex-direction: column;
  gap: ${RFValue(16)}px;
`;
