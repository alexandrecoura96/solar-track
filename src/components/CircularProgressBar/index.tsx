import {
  Easing,
  SkFont,
  runTiming,
  useFont,
  useValue,
} from '@shopify/react-native-skia';
import React, {useCallback, useEffect} from 'react';
import {PixelRatio} from 'react-native';
import {DonutChart} from './DonutChart';
import {CircularProgressBarProps} from './types';

export function CircularProgressBar({percentage}: CircularProgressBarProps) {
  const font = useFont(require('../../assets/fonts/Inter-Black.ttf'), 16);
  const radius = PixelRatio.roundToNearestPixel(36);
  const STROKE_WIDTH = 5;
  const animationState = useValue(0);
  const targetPercentage = percentage / 100;

  const animateChart = useCallback(() => {
    animationState.current = 0;
    runTiming(animationState, targetPercentage, {
      duration: 1250,
      easing: Easing.inOut(Easing.cubic),
    });
  }, [animationState, targetPercentage]);

  useEffect(() => {
    animateChart();
  }, [animateChart]);

  if (!font) {
    return null;
  }

  return (
    <DonutChart
      radius={radius}
      strokeWidth={STROKE_WIDTH}
      percentageComplete={animationState}
      targetPercentage={targetPercentage}
      font={font as SkFont}
    />
  );
}
