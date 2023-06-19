import {Path, Skia, Text} from '@shopify/react-native-skia';
import React, {FC, useCallback} from 'react';
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

  const checkColor = useCallback(() => {
    if (Number(targetText) >= 60) {
      return '#09ff00';
    }
    if (Number(targetText) <= 40) {
      return '#ff060e';
    }

    return '#fcdf00';
  }, [targetText]);

  return (
    <Container>
      <StyledCanvas>
        <Path
          path={path}
          color={checkColor()}
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
          text={`${targetText.slice(0, 4)}%`}
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
