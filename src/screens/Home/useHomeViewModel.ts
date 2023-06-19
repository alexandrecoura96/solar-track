import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useGetDailyGeneration} from '../../hooks/useGetDailyGeneration/useGetDailyGeneration';
import {useGetMonthlyGeneration} from '../../hooks/useGetMonthlyGeneration/useGetMonthlyGeneration';
import {useGetYearlyGeneration} from '../../hooks/useGetYearlyGeneration/useGetYearlyGeneration';

export const useHomeViewModel = () => {
  const modalRef = useRef<Modalize>(null);
  const tabBarHeight = useBottomTabBarHeight();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({
    daily: true,
    monthly: false,
    yearly: false,
  });

  const {formattedDailyData, fetchDailySolarGeneration} =
    useGetDailyGeneration();

  const {formattedMonthlyData, fetchMonthlySolarGeneration} =
    useGetMonthlyGeneration();

  const {formattedYearlyData, fetchYearlySolarGeneration} =
    useGetYearlyGeneration();

  const fetchAll = async () => {
    try {
      await fetchDailySolarGeneration();
      await fetchYearlySolarGeneration();
      await fetchMonthlySolarGeneration();
    } catch (error) {
      Alert.alert('Ops, error');
    } finally {
      setLoading(false);
    }
  };

  const [selectedData, setSelectedData] = useState(formattedDailyData);

  const onHandleOpenModal = useCallback(() => {
    modalRef.current?.open();
  }, []);

  const onHandleDailyOption = useCallback(() => {
    setSelectedData(formattedDailyData);
    setSelected({daily: true, monthly: false, yearly: false});
    modalRef.current?.close();
  }, [formattedDailyData]);

  const onHandleMonthlyOption = useCallback(() => {
    setSelectedData(formattedMonthlyData);
    setSelected({daily: false, monthly: true, yearly: false});

    modalRef.current?.close();
  }, [formattedMonthlyData]);

  const onHandleYearlyOption = useCallback(() => {
    setSelectedData(formattedYearlyData);
    setSelected({daily: false, monthly: false, yearly: true});
    modalRef.current?.close();
  }, [formattedYearlyData]);

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    data: selectedData,
    onHandleOpenModal,
    modalRef,
    tabBarHeight,
    onHandleDailyOption,
    onHandleMonthlyOption,
    onHandleYearlyOption,
    selected,
  };
};
