import React from 'react';
import Play from '../../assets/svg/play.svg';
import {GetStarted, GetStartedIconWrapper, GetStartedText} from './styles';
import {GetStartedButtonProps} from './types';

export function GetStartedButton({title, ...rest}: GetStartedButtonProps) {
  return (
    <GetStarted {...rest} activeOpacity={0.8}>
      <GetStartedText>{title}</GetStartedText>
      <GetStartedIconWrapper>
        <Play height={16} width={16} />
      </GetStartedIconWrapper>
    </GetStarted>
  );
}
