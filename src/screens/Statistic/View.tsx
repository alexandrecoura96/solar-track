import {format, parseISO} from 'date-fns';
import React from 'react';
import {BarChart} from '../../components/BarChart';
import {useSolarStore} from '../../state/solar';
import {Container, PeriodButton, PeriodName, Title} from './styles';

export const View = () => {
  const {solarGenerationYearly} = useSolarStore();

  const chartData = solarGenerationYearly.x_labels.map((label, index) => ({
    label: format(parseISO(label), 'MMM-yy'),
    value: solarGenerationYearly.generation[index],
    expected: solarGenerationYearly.expected[index],
  }));

  return (
    <Container>
      <Title>Statistics</Title>
      <PeriodButton>
        <PeriodName>Yearly Generated</PeriodName>
      </PeriodButton>
      <BarChart data={chartData} />
    </Container>
  );
};
