import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import PointerDown from '../../assets/svg/pointer_down.svg';
import {Arc} from '../../components/Arc';
import {CircularProgressBar} from '../../components/CircularProgressBar';
import {ModalItem} from '../../components/ModalItem';
import {TotalCardItem} from '../../components/TotalCardItem';
import {
  ArcDescription,
  ArcWrapper,
  Container,
  GeneralInformation,
  Modal,
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
  onHandleHourlyOption,
  selected,
  arcPeriod,
  title,
}: HomeViewProps) => {
  if (loading) {
    return (
      <Container>
        <ActivityIndicator color="#e05f25" size={RFValue(32)} />
      </Container>
    );
  } else {
    return (
      <>
        <Scroll>
          <ArcWrapper>
            <Title>{title}</Title>
            <Arc content={data.kwh} />
            <ArcDescription>{`kw produced ${arcPeriod}`}</ArcDescription>
          </ArcWrapper>
          <GeneralInformation>
            <TotalCardButton onPress={onHandleOpenModal}>
              <TotalCardTitle>
                {arcPeriod.charAt(0).toUpperCase() + arcPeriod.slice(1)}
              </TotalCardTitle>
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
        <Modal ref={modalRef}>
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
              onPress={onHandleYearlyOption}
            />
            <ModalItem
              title="Hourly"
              selected={selected.hourly}
              hasBorder={false}
              onPress={onHandleHourlyOption}
            />
          </ModalContainer>
        </Modal>
      </>
    );
  }
};
