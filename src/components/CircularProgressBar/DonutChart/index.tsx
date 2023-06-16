import {Path, Skia, Text} from '@shopify/react-native-skia';
import React, {FC} from 'react';
import EnergyIcon from '../../../assets/svg/energy.svg';
import {Container, EnergyIconWrapper, StyledCanvas} from './styles';
import {DonutChartProps} from './types';

export const DonutChart: FC<DonutChartProps> = ({
  strokeWidth,
  radius,
  percentageComplete,
  font,
  targetPercentage,
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const targetText = `${targetPercentage * 100}`;

  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  const width = font.getTextWidth(targetText);

  return (
    <Container>
      <StyledCanvas>
        <Path
          path={path}
          color="orange"
          style="stroke"
          strokeJoin="round"
          strokeWidth={strokeWidth}
          strokeCap="round"
          start={0}
          end={percentageComplete}
        />

        <Text
          x={innerRadius - width / 2}
          y={radius + strokeWidth}
          text={`${targetText}%`}
          font={font}
          color="#fff"
        />
      </StyledCanvas>
      <EnergyIconWrapper>
        <EnergyIcon height={24} width={24} fill="#fff" />
      </EnergyIconWrapper>
    </Container>
  );
};
