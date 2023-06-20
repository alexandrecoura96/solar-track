import React from 'react';
import GraphicsIcon from '../../assets/svg/graphics.svg';
import HomeIcon from '../../assets/svg/home.svg';
import SettingsIcon from '../../assets/svg/settings.svg';

import {RFValue} from 'react-native-responsive-fontsize';
import {TabIconProps} from './types';

export const TabIcon = ({color}: TabIconProps) => {
  return {
    Home: <HomeIcon height={RFValue(24)} width={RFValue(24)} fill={color} />,
    Graphics: (
      <GraphicsIcon height={RFValue(24)} width={RFValue(24)} fill={color} />
    ),
    Settings: (
      <SettingsIcon height={RFValue(24)} width={RFValue(24)} fill={color} />
    ),
  };
};
