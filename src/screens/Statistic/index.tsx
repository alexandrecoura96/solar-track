import React from 'react';
import {View} from './View';
import {useStatisticViewModel} from './useStatisticViewModel';

export const Statistic = () => {
  const {...rest} = useStatisticViewModel();
  return <View {...rest} />;
};
