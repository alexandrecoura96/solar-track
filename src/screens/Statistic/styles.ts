import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding-top: ${StatusBar.currentHeight && StatusBar.currentHeight + 24}px;
  padding-bottom: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
  padding-left: ${RFValue(24)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: #fff;
  font-family: 'InterTight-Light';
  margin-bottom: ${RFValue(24)}px;
  align-self: center;
`;

export const PeriodButton = styled.View`
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #131313;
  border-width: ${RFValue(1)}px;
  border-color: #202020;
`;

export const PeriodName = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: 'Inter-Regular';
`;
