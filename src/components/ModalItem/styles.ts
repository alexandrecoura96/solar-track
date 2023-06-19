import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

interface ModalItemProps {
  hasBorder?: boolean;
}

export const Container = styled.TouchableOpacity<ModalItemProps>`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-bottom-style: solid;
  border-bottom-width: ${props => (props.hasBorder ? RFValue(0.5) : 0)}px;
  border-bottom-color: #1c1e1b;
  padding: ${RFValue(16)}px;
  gap: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: #1c1e1b;
  font-family: 'Inter-Regular';
  line-height: ${RFValue(24)}px;
`;
