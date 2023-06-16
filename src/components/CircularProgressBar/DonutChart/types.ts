import {SkFont, SkiaMutableValue} from '@shopify/react-native-skia';

export interface DonutChartProps {
  strokeWidth: number;
  radius: number;
  percentageComplete: SkiaMutableValue<number>;
  font: SkFont;
  targetPercentage: number;
}
