import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import numeral from 'numeral';
import {useCallback, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {useSolarStore} from '../../state/solar';

export const useHomeViewModel = () => {
  const modalRef = useRef<Modalize>(null);
  const tabBarHeight = useBottomTabBarHeight();
  const [loading] = useState(false);
  const [selected, setSelected] = useState({
    daily: true,
    monthly: false,
    yearly: false,
  });
  const {solarGenerationDaily, solarGenerationMonthly, solarGenerationYearly} =
    useSolarStore();

  const [selectedData, setSelectedData] = useState(solarGenerationDaily);

  const formattedData = {
    period: selectedData ? selectedData?.x_labels : null,
    generation: selectedData ? selectedData?.generation : null,
    expected: selectedData ? selectedData?.expected : null,
    kwh: selectedData ? numeral(selectedData?.totals.kwh).format() : null,
    percentage: selectedData ? selectedData?.totals.percentage / 100 : null,
    trees: selectedData ? Math.round(selectedData?.totals.trees) : null,
    co2: selectedData ? numeral(selectedData?.totals.co2).format() : null,
  };

  const onHandleOpenModal = useCallback(() => {
    modalRef.current?.open();
  }, []);

  const onHandleDailyOption = useCallback(() => {
    setSelectedData(solarGenerationDaily);
    setSelected({daily: true, monthly: false, yearly: false});
    modalRef.current?.close();
  }, [solarGenerationDaily]);

  const onHandleMonthlyOption = useCallback(() => {
    setSelectedData(solarGenerationMonthly);
    setSelected({daily: false, monthly: true, yearly: false});

    modalRef.current?.close();
  }, [solarGenerationMonthly]);

  const onHandleYearlyOption = useCallback(() => {
    setSelectedData(solarGenerationYearly);
    setSelected({daily: false, monthly: false, yearly: true});
    modalRef.current?.close();
  }, [solarGenerationYearly]);

  return {
    loading,
    data: formattedData,
    onHandleOpenModal,
    modalRef,
    tabBarHeight,
    onHandleDailyOption,
    onHandleMonthlyOption,
    onHandleYearlyOption,
    selected,
  };
};
