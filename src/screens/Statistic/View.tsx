import React from 'react';
import {BarChart} from '../../components/BarChart';
import {useSolarStore} from '../../state/solar';
import {Container, Title} from './styles';

export const View = () => {
  const {solarGenerationYearly} = useSolarStore();

  const chartData = solarGenerationYearly.x_labels.map((label, index) => ({
    label: new Date(label).toLocaleString('default', {
      month: 'short',
      year: '2-digit',
    }),
    value: solarGenerationYearly.generation[index],
  }));

  return (
    <Container>
      <Title>Statistic</Title>
      <BarChart data={chartData} />
    </Container>
  );
};
