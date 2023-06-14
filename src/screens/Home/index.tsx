import React from 'react';
import {View} from './View';
import {useHomeViewModel} from './useHomeViewModel';

export const Home = () => {
  const {...rest} = useHomeViewModel();
  return <View {...rest} />;
};
