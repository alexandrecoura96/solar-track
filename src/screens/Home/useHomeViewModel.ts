import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useCallback, useMemo, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {useHome} from '../../hooks/useHome/useHome';

export const useHomeViewModel = () => {
  const modalRef = useRef<Modalize>(null);
  const tabBarHeight = useBottomTabBarHeight();
  const {
    loading,
    formattedData,
    selectDailyData,
    selectMonthlyData,
    selectYearlyData,
    selectHourlyData,
  } = useHome();

  const [selected, setSelected] = useState({
    daily: true,
    monthly: false,
    yearly: false,
    hourly: false,
  });

  const [arcPeriod, setArcPeriod] = useState<string>('daily');

  const onHandleOpenModal = useCallback(() => {
    modalRef.current?.open();
  }, []);

  const title = useMemo(() => 'Summary', []);

  const onHandleDailyOption = useCallback(() => {
    modalRef.current?.close();
    selectDailyData();
    setSelected({daily: true, monthly: false, yearly: false, hourly: false});
    setArcPeriod('daily');
  }, [selectDailyData]);

  const onHandleMonthlyOption = useCallback(() => {
    modalRef.current?.close();
    selectMonthlyData();
    setSelected({daily: false, monthly: true, yearly: false, hourly: false});
    setArcPeriod('monthly');
  }, [selectMonthlyData]);

  const onHandleYearlyOption = useCallback(() => {
    modalRef.current?.close();
    selectYearlyData();
    setSelected({daily: false, monthly: false, yearly: true, hourly: false});
    setArcPeriod('yearly');
  }, [selectYearlyData]);

  const onHandleHourlyOption = useCallback(() => {
    modalRef.current?.close();
    selectHourlyData();
    setSelected({daily: false, monthly: false, yearly: false, hourly: true});
    setArcPeriod('hourly');
  }, [selectHourlyData]);

  return {
    loading,
    data: formattedData,
    onHandleOpenModal,
    modalRef,
    tabBarHeight,
    onHandleDailyOption,
    onHandleMonthlyOption,
    onHandleYearlyOption,
    onHandleHourlyOption,
    selected,
    arcPeriod,
    title,
  };
};
