import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo} from 'react';
import {navigationType} from './types';

export const useViewModel = () => {
  const navigation = useNavigation<navigationType>();

  const title = useMemo(
    () => 'Using solar energy to mitigate future climate changes',
    [],
  );

  const getStartedButtonName = useMemo(() => 'Get Started', []);

  const handleNavigation = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return {
    loading: false,
    handleNavigation,
    title,
    getStartedButtonName,
  };
};
