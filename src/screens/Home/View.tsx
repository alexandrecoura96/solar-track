import React from 'react';
import {View as RNView, Text} from 'react-native';
import {HomeViewProps} from './types';

export const View = ({data, loading}: HomeViewProps) => {
  if (loading) {
    return <Text>loading..</Text>;
  } else {
    console.log(data?.data_type);
    return <RNView></RNView>;
  }
};
