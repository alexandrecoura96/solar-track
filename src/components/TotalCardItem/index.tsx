import React from 'react';
import {Container, Description, Title} from './styles';
import {TotalCardItemProps} from './types';

export function TotalCardItem({title, description}: TotalCardItemProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Description>{description ? description : '--'}</Description>
    </Container>
  );
}
