import {
  Canvas,
  Path,
  runTiming,
  Skia,
  Text,
  useComputedValue,
  useFont,
  useValue,
} from '@shopify/react-native-skia';
import * as d3 from 'd3';
import numeral from 'numeral';
import React from 'react';
import {Button, Easing, Text as RNText, StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BarChartDataProps, BarChartProps} from './types';

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 8;

const CanvasHeight = 350;
const CanvasWidth = 350;
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;
const graphWidth = CanvasWidth - 2;

export const BarChart = ({data}: BarChartProps) => {
  const font = useFont(require('../../assets/fonts/Inter-Regular.ttf'), 10);
  const animationState = useValue(0);
  const opacityAnimValue = useSharedValue(0);

  const xDomain = data.map((dataPoint: BarChartDataProps) => dataPoint.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  const yDomain: number[] = [
    0,
    d3.max(
      data,
      (yBarChartDataProps: BarChartDataProps) => yBarChartDataProps.value,
    )!,
  ];

  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(opacityAnimValue.value, [0, 1], [0, 1]),
    };
  });

  const animate = () => {
    animationState.current = 0;

    runTiming(animationState, 1, {
      duration: 1600,
      easing: Easing.inOut(Easing.exp),
    });

    opacityAnimValue.value = withTiming(1, {
      duration: 1600,
    });
  };

  const path = useComputedValue(() => {
    const newPath = Skia.Path.Make();

    data.forEach((dataPoint: BarChartDataProps) => {
      const rect = Skia.XYWHRect(
        x(dataPoint.label)! - GRAPH_BAR_WIDTH / 2,
        graphHeight,
        GRAPH_BAR_WIDTH,
        y(dataPoint.value * animationState.current) * -1,
      );

      const rrect = Skia.RRectXY(rect, 8, 8);
      newPath.addRRect(rrect);
    });

    return newPath;
  }, [animationState]);

  if (!font) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            gap: 10,
            marginBottom: 24,
          },
          opacityStyle,
        ]}>
        {data.map((dataPoint: BarChartDataProps) => (
          <RNText key={dataPoint.label} style={{color: '#fff', fontSize: 10}}>
            {numeral(dataPoint.value).format('0a')}
          </RNText>
        ))}
      </Animated.View>

      <Canvas style={styles.canvas}>
        <Path path={path} color="#e05f25" />

        {data.map((dataPoint: BarChartDataProps) => (
          <Text
            color="#fff"
            key={dataPoint.label}
            font={font}
            x={x(dataPoint.label)! - 10}
            y={CanvasHeight - 25}
            text={dataPoint.label}
          />
        ))}
      </Canvas>
      <Button title="Animate!" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000',
  },
  canvas: {
    height: CanvasHeight,
    width: CanvasWidth,
  },
});