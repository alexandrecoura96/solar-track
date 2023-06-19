import numeral from 'numeral';
import React from 'react';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg, {Defs, LinearGradient, Path, Stop, Text} from 'react-native-svg';
import {ArcProps} from './types';

const {width} = Dimensions.get('window');
const size = width - 72;
const strokeWidth = 16;
const strokeWidth2 = 32;
const {PI, cos, sin} = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI + PI * 0.4;
const startAngle = PI + PI * 0.2;
const endAngle = 2 * PI - PI * 0.2;
const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

const startAngle2 = PI + PI * 0.2;
const endAngle2 = 2 * PI - PI * 0.2;
const x1_2 = cx - (r - strokeWidth2 / 1) * cos(startAngle2);
const y1_2 = -(r - strokeWidth2 / 1) * sin(startAngle2) + cy;
const x2_2 = cx - (r - strokeWidth2 / 1) * cos(endAngle2);
const y2_2 = -(r - strokeWidth2 / 1) * sin(endAngle2) + cy;
const d2 = `M ${x1_2} ${y1_2} A ${r - strokeWidth2 / 1} ${
  r - strokeWidth2 / 1
} 0 1 0 ${x2_2} ${y2_2}`;

export const Arc = ({content}: ArcProps) => {
  const circumference = r * A;
  const α = 100 * A;

  const strokeDashoffset = α * r;

  return (
    <Svg width={size} height={RFValue(230)}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#fbf0ce" />
          <Stop offset="1" stopColor="#dfaa6d" />
        </LinearGradient>
      </Defs>

      <Path
        stroke="#ef9837"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{d, strokeWidth}}
      />

      <Path
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        {...{d, strokeWidth}}
      />
      {content && (
        <Text
          fill="#fff"
          fontSize={32}
          fontFamily="Inter-Bold"
          textAnchor="middle"
          lengthAdjust="spacingAndGlyphs"
          x={size / 2}
          y={size / 2 + 10}>
          {numeral(content).format().slice(0, 10)}
        </Text>
      )}

      <Path
        stroke="url(#grad)"
        fill="none"
        opacity={0.8}
        strokeLinecap="round"
        strokeWidth={28}
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{d: d2}}
      />
    </Svg>
  );
};
