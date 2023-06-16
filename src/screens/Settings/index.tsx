import React from 'react';
import {CircularProgressBar} from '../../components/CircularProgressBar';
import {Container} from './styles';

export function Settings() {
  return (
    <Container>
      <CircularProgressBar percentage={85} />
    </Container>
  );
}
