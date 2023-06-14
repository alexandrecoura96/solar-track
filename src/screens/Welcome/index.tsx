import React from 'react';
import {View} from './View';
import {useViewModel} from './useViewModel';

export const Welcome = () => {
  const {...rest} = useViewModel();
  return <View {...rest} />;
};
