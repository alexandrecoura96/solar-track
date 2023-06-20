import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Play from '../../assets/svg/play.svg';
import {GetStarted, GetStartedIconWrapper, GetStartedText} from './styles';
import {GetStartedButtonProps} from './types';

export function GetStartedButton({title, ...rest}: GetStartedButtonProps) {
  return (
    <GetStarted {...rest} activeOpacity={0.8}>
      <GetStartedText>{title}</GetStartedText>
      <GetStartedIconWrapper>
        <Play height={RFValue(16)} width={RFValue(16)} />
      </GetStartedIconWrapper>
    </GetStarted>
  );
}
