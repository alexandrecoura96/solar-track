import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 1)', '#222A20'],
  start: {x: 1, y: 0.1},
  end: {x: 1.8, y: 1},
})`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 24px;
`;

export const Background = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  flex-direction: column;
  width: 100%;
  flex: 0.5;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${RFValue(32)}px;
  font-weight: bold;
`;

export const GetStarted = styled.TouchableOpacity`
  background-color: #1a1d1a;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  margin-right: 8px;
  margin-left: 8px;
  align-items: center;
`;

export const GetStartedText = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export const GetStartedIconWrapper = styled.View`
  border-radius: ${RFValue(4)}px;
  padding: ${RFValue(8)}px;
  background-color: #aaf551;
`;
