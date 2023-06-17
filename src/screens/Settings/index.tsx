import React from 'react';
import {CircularProgressBar} from '../../components/CircularProgressBar';
import {useSolarStore} from '../../state/solar';
import {Container} from './styles';

export function Settings() {
  const {solarGeneration, setSolarGeneration} = useSolarStore();

  console.log(solarGeneration.generation, 'tela de settings');

  return (
    <Container>
      <CircularProgressBar percentage={85} />
    </Container>
  );
}
