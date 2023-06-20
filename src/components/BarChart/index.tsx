import {
  Canvas,
  Path,
  Skia,
  Text,
  runTiming,
  useComputedValue,
  useFont,
  useValue,
} from '@shopify/react-native-skia';
import * as d3 from 'd3';
import numeral from 'numeral';
import React from 'react';
import {Easing, StyleSheet, View} from 'react-native';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {
  ButtonWrapper,
  ExpectedButton,
  ExpectedButtonName,
  GeneratedButton,
  GeneratedButtonName,
} from './styles';
import {BarChartDataProps, BarChartProps} from './types';

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 8;

const CanvasHeight = 350;
const CanvasWidth = 350;
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;
const graphWidth = CanvasWidth - 2;

export const BarChart = ({data, smallerFont = false}: BarChartProps) => {
  const font = useFont(
    require('../../assets/fonts/Inter-Regular.ttf'),
    smallerFont ? 6 : 10,
  );
  const animationState = useValue(0);
  const animationState2 = useValue(0);
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

  const animate2 = () => {
    animationState2.current = 0;

    runTiming(animationState2, 1, {
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
        x(dataPoint.label)! - GRAPH_BAR_WIDTH,
        graphHeight,
        GRAPH_BAR_WIDTH,
        y(dataPoint.expected * animationState.current) * -1,
      );

      const rrect = Skia.RRectXY(rect, 8, 8);
      newPath.addRRect(rrect);
    });

    return newPath;
  }, [animationState]);

  const path2 = useComputedValue(() => {
    const newPath = Skia.Path.Make();

    data.forEach((dataPoint: BarChartDataProps) => {
      const rect = Skia.XYWHRect(
        x(dataPoint.label)! - GRAPH_BAR_WIDTH + 8,
        graphHeight,
        GRAPH_BAR_WIDTH,
        y(dataPoint.value * animationState2.current) * -1,
      );

      const rrect = Skia.RRectXY(rect, 8, 8);
      newPath.addRRect(rrect);
    });

    return newPath;
  }, [animationState2]);

  if (!font) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvasTitle}>
        {data.map((dataPoint: BarChartDataProps) => (
          <Text
            key={dataPoint.label}
            color="#fff"
            font={font}
            x={x(dataPoint.label)! - 24}
            y={CanvasHeight - 60}
            text={`${numeral(dataPoint.expected).format('0a')} - ${numeral(
              dataPoint.value,
            ).format('0a')}`}
            opacity={opacityAnimValue}
          />
        ))}
      </Canvas>

      <Canvas style={styles.canvas}>
        <Path path={path} color="#f4a460" />
        <Path path={path2} color="#09ff00" />

        {data.map((dataPoint: BarChartDataProps) => (
          <Text
            color="#fff"
            key={dataPoint.label}
            font={font}
            x={x(dataPoint.label)! - 16}
            y={CanvasHeight - 25}
            text={dataPoint.label}
          />
        ))}
      </Canvas>
      <ButtonWrapper>
        <ExpectedButton onPress={animate}>
          <ExpectedButtonName>See Expected</ExpectedButtonName>
        </ExpectedButton>
        <GeneratedButton onPress={animate2}>
          <GeneratedButtonName>See Generated</GeneratedButtonName>
        </GeneratedButton>
      </ButtonWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    backgroundColor: '#000',
  },
  canvasTitle: {
    height: CanvasHeight - 20,
    width: CanvasWidth,
    paddingBottom: 60,
  },
  canvas: {
    height: CanvasHeight,
    width: CanvasWidth,
  },
});
