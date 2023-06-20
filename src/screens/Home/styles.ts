import {StatusBar} from 'react-native';
import {Modalize, ModalizeProps} from 'react-native-modalize';
import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';
import {ScreenHeight} from '../../utils/device';

interface ModalContainerProps {
  tabBarHeight: number;
}

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    backgroundColor: '#000',
    gap: RFValue(64),
    paddingTop: StatusBar.currentHeight && StatusBar.currentHeight + 24,
    paddingBottom: RFValue(60),
    paddingLeft: RFValue(24),
    paddingRight: RFValue(24),
  },
})`
  background-color: #000;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: #fff;
  font-family: 'InterTight-Light';
  margin-bottom: ${RFValue(24)}px;
`;

export const ArcWrapper = styled.View`
  align-items: center;
`;

export const ArcDescription = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
  font-family: 'InterTight-Regular';
`;

export const GeneralInformation = styled.View`
  gap: ${RFValue(16)}px;
  align-items: center;
`;

export const TotalCardButton = styled.TouchableOpacity`
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(16)}px;
`;

export const TotalCardTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: 'Inter-Regular';
`;

export const TotalCardWrapper = styled.View`
  flex-direction: row;
  gap: ${RFValue(16)}px;
  border-radius: ${RFValue(16)}px;
`;

export const TotalCardColumn = styled.View`
  flex-direction: column;
`;

export const Modal = styled(Modalize).attrs({
  adjustToContentHeight: true,
  disableScrollIfPossible: false,
  useNativeDriver: true,
  modalTopOffset: ScreenHeight / 2,
  modalStyle: {
    backgroundColor: '#f4a460',
  },
  scrollViewProps: {showsVerticalScrollIndicator: false},
})<ModalizeProps>``;

export const ModalContainer = styled.View<ModalContainerProps>`
  margin-bottom: ${props => props.tabBarHeight && props.tabBarHeight}px;
`;
