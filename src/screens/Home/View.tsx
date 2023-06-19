import React from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {RFValue} from 'react-native-responsive-fontsize';
import PointerDown from '../../assets/svg/pointer_down.svg';
import {Arc} from '../../components/Arc';
import {CircularProgressBar} from '../../components/CircularProgressBar';
import {ModalItem} from '../../components/ModalItem';
import {TotalCardItem} from '../../components/TotalCardItem';
import {ScreenHeight} from '../../utils/device';
import {
  ArcDescription,
  ArcWrapper,
  Container,
  GeneralInformation,
  ModalContainer,
  Scroll,
  Title,
  TotalCardButton,
  TotalCardColumn,
  TotalCardTitle,
  TotalCardWrapper,
} from './styles';
import {HomeViewProps} from './types';

export const View = ({
  loading,
  modalRef,
  onHandleOpenModal,
  data,
  tabBarHeight,
  onHandleDailyOption,
  onHandleMonthlyOption,
  onHandleYearlyOption,
  selected,
}: HomeViewProps) => {
  if (loading) {
    return (
      <Container>
        <ActivityIndicator color="#e05f25" size={RFValue(32)} />
      </Container>
    );
  } else {
    console.log(data.percentage);
    return (
      <>
        <Scroll>
          <StatusBar backgroundColor="#000" />
          <ArcWrapper>
            <Title>Summary</Title>
            <Arc content={data.kwh} />
            <ArcDescription>kw produced today</ArcDescription>
          </ArcWrapper>
          <GeneralInformation>
            <TotalCardButton onPress={onHandleOpenModal}>
              <TotalCardTitle>Daily</TotalCardTitle>
              <PointerDown height={8} width={8} fill="#fff" />
            </TotalCardButton>
            <TotalCardWrapper>
              <TotalCardColumn>
                <TotalCardItem
                  title="Total energy"
                  description={`${data?.kwh} kw/h`}
                />
                <TotalCardItem
                  description={
                    <CircularProgressBar percentage={data.percentage} />
                  }
                />
              </TotalCardColumn>
              <TotalCardColumn>
                <TotalCardItem title="Trees saved" description={data.trees} />
                <TotalCardItem
                  title="Co2 Reduction"
                  description={`${data.co2} ton`}
                />
              </TotalCardColumn>
            </TotalCardWrapper>
          </GeneralInformation>
        </Scroll>
        <Modalize
          ref={modalRef}
          adjustToContentHeight
          disableScrollIfPossible={false}
          useNativeDriver
          modalTopOffset={ScreenHeight / 2}
          modalStyle={{
            backgroundColor: '#f4a460',
          }}
          scrollViewProps={{showsVerticalScrollIndicator: false}}>
          <ModalContainer tabBarHeight={tabBarHeight + 10}>
            <ModalItem
              title="Daily"
              selected={selected.daily}
              onPress={onHandleDailyOption}
            />
            <ModalItem
              title="Monthly"
              selected={selected.monthly}
              onPress={onHandleMonthlyOption}
            />
            <ModalItem
              title="Yearly"
              selected={selected.yearly}
              hasBorder={false}
              onPress={onHandleYearlyOption}
            />
          </ModalContainer>
        </Modalize>
      </>
    );
  }
};
