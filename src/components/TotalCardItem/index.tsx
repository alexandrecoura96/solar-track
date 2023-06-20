import React from 'react';
import {Container, Description, Title} from './styles';
import {TotalCardItemProps} from './types';

export function TotalCardItem({title, description}: TotalCardItemProps) {
  return (
    <Container>
      <Description>{description ? description : '0'}</Description>
      {title && <Title>{title}</Title>}
    </Container>
  );
}
