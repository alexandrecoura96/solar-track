import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation';

export interface WelcomeViewProps {
  handleNavigation: () => void;
  loading: boolean;
  title: string;
  getStartedButtonName: string;
}

export type navigationType = StackNavigationProp<RootStackParamList, 'Home'>;
