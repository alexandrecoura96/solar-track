import React from 'react';
import GraphicsIcon from '../../assets/svg/graphics.svg';
import HomeIcon from '../../assets/svg/home.svg';
import SettingsIcon from '../../assets/svg/settings.svg';

import {TabIconProps} from './types';

export const TabIcon = ({color}: TabIconProps) => {
  return {
    Home: <HomeIcon height={24} width={24} fill={color} />,
    Graphics: <GraphicsIcon height={24} width={24} fill={color} />,
    Settings: <SettingsIcon height={24} width={24} fill={color} />,
  };
};
