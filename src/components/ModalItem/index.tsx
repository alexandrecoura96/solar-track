import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Check from '../../assets/svg/check_circle.svg';
import {Container, Title} from './styles';
import {ModalItemProps} from './types';

export function ModalItem({
  title,
  selected,
  hasBorder = true,
  ...rest
}: ModalItemProps) {
  return (
    <Container hasBorder={hasBorder} activeOpacity={0.8} {...rest}>
      <Title>{title}</Title>
      {selected && (
        <Check fill="#1C1E1B" height={RFValue(20)} width={RFValue(20)} />
      )}
    </Container>
  );
}
