import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  gap: ${RFValue(8)}px;

  align-items: center;
  justify-content: center;
  min-height: ${RFValue(93)}px;
  min-width: ${RFValue(146)}px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: ${RFValue(12)}px;
  font-family: 'Inter-Regular';
  color: #838383;
  max-width: ${RFValue(120)}px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: ${RFValue(16)}px;
  font-family: 'Inter-Bold';
  color: #fff;
  max-width: ${RFValue(120)}px;
`;
