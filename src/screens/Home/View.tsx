import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {CircularProgressBar} from '../../components/CircularProgressBar';
import {TotalCardItem} from '../../components/TotalCardItem';
import {Container, TotalCardColumn, TotalCardWrapper} from './styles';
import {HomeViewProps} from './types';

export const View = ({data, loading}: HomeViewProps) => {
  if (loading) {
    return (
      <Container>
        <ActivityIndicator color="#e05f25" size={RFValue(32)} />
      </Container>
    );
  } else {
    console.log(data.percentage);
    return (
      <Container>
        <TotalCardWrapper>
          <TotalCardColumn>
            <TotalCardItem
              title="Total energy"
              description={`${data?.kwh} kw/h`}
            />

            <TotalCardItem
              description={<CircularProgressBar percentage={100} />}
            />
          </TotalCardColumn>
          <TotalCardColumn>
            <TotalCardItem
              title="Trees saved"
              description={`${data.trees} trees`}
            />
            <TotalCardItem
              title="Co2 Reduction"
              description={`${data.co2} ton`}
            />
          </TotalCardColumn>
        </TotalCardWrapper>
      </Container>
    );
  }
};
