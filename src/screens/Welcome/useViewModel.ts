import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useViewModel = () => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return {
    loading: false,
    handleNavigation,
  };
};
