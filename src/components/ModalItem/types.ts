import {TouchableOpacityProps} from 'react-native';

export interface ModalItemProps extends TouchableOpacityProps {
  title: string;
  selected?: boolean;
  hasBorder?: boolean;
}
