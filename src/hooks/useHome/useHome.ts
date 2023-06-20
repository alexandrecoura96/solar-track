import numeral from 'numeral';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {DataTypeProps} from '../../models/hooks/useHome/types/useHome';
import {useSolarStore} from '../../state/solar';
import {useGetDailyGeneration} from '../useGetDailyGeneration/useGetDailyGeneration';
import {useGetHourlyGeneration} from '../useGetHourlyGeneration/useGetHourlyGeneration';
import {useGetMonthlyGeneration} from '../useGetMonthlyGeneration/useGetMonthlyGeneration';
import {useGetYearlyGeneration} from '../useGetYearlyGeneration/useGetYearlyGeneration';

export const useHome = () => {
  const [loading, setLoading] = useState(false);

  const {fetchDailySolarGeneration} = useGetDailyGeneration();

  const {fetchMonthlySolarGeneration} = useGetMonthlyGeneration();

  const {fetchYearlySolarGeneration} = useGetYearlyGeneration();

  const {fetchHourlySolarGeneration} = useGetHourlyGeneration();

  const {
    solarGenerationDaily,
    solarGenerationMonthly,
    solarGenerationYearly,
    solarGenerationHourly,
  } = useSolarStore();

  const [selected, setSelected] = useState<DataTypeProps>({
    daily: true,
    monthly: false,
    yearly: false,
    hourly: false,
  });

  const dataType = {
    daily: solarGenerationDaily,
    monthly: solarGenerationMonthly,
    yearly: solarGenerationYearly,
    hourly: solarGenerationHourly,
  };

  const formattedData = useMemo(() => {
    if (selected.daily) {
      return {
        period: dataType.daily ? dataType.daily?.x_labels : null,
        generation: dataType.daily ? dataType.daily?.generation : null,
        expected: dataType.daily ? dataType.daily?.expected : null,
        kwh: dataType.daily
          ? numeral(dataType.daily?.totals.kwh).format()
          : null,
        percentage: dataType.daily
          ? dataType.daily?.totals.percentage / 100
          : null,
        trees: dataType.daily ? Math.round(dataType.daily?.totals.trees) : null,
        co2: dataType.daily
          ? numeral(dataType.daily?.totals.co2).format()
          : null,
      };
    }
    if (selected.monthly) {
      return {
        period: dataType.monthly ? dataType.monthly?.x_labels : null,
        generation: dataType.monthly ? dataType.monthly?.generation : null,
        expected: dataType.monthly ? dataType.monthly?.expected : null,
        kwh: dataType.monthly
          ? numeral(dataType.monthly?.totals.kwh).format()
          : null,
        percentage: dataType.monthly
          ? dataType.monthly?.totals.percentage / 100
          : null,
        trees: dataType.monthly
          ? Math.round(dataType.monthly?.totals.trees)
          : null,
        co2: dataType.monthly
          ? numeral(dataType.monthly?.totals.co2).format()
          : null,
      };
    }

    if (selected.yearly) {
      return {
        period: dataType.yearly ? dataType.yearly?.x_labels : null,
        generation: dataType.yearly ? dataType.yearly?.generation : null,
        expected: dataType.yearly ? dataType.yearly?.expected : null,
        kwh: dataType.yearly
          ? numeral(dataType.yearly?.totals.kwh).format()
          : null,
        percentage: dataType.yearly
          ? dataType.yearly?.totals.percentage / 100
          : null,
        trees: dataType.yearly
          ? Math.round(dataType.yearly?.totals.trees)
          : null,
        co2: dataType.yearly
          ? numeral(dataType.yearly?.totals.co2).format()
          : null,
      };
    }

    if (selected.hourly) {
      return {
        period: dataType.hourly ? dataType.hourly?.x_labels : null,
        generation: dataType.hourly ? dataType.hourly?.generation : null,
        expected: dataType.hourly ? dataType.hourly?.expected : null,
        kwh: dataType.hourly
          ? numeral(dataType.hourly?.totals.kwh).format()
          : null,
        percentage: dataType.hourly
          ? dataType.hourly?.totals.percentage / 100
          : null,
        trees: dataType.hourly
          ? Math.round(dataType.hourly?.totals.trees)
          : null,
        co2: dataType.hourly
          ? numeral(dataType.hourly?.totals.co2).format()
          : null,
      };
    }
    return;
  }, [
    dataType.daily,
    dataType.hourly,
    dataType.monthly,
    dataType.yearly,
    selected.daily,
    selected.hourly,
    selected.monthly,
    selected.yearly,
  ]);

  const selectDailyData = useCallback(() => {
    setSelected({daily: true});
  }, []);

  const selectMonthlyData = useCallback(() => {
    setSelected({monthly: true});
  }, []);

  const selectYearlyData = useCallback(() => {
    setSelected({yearly: true});
  }, []);

  const selectHourlyData = useCallback(() => {
    setSelected({hourly: true});
  }, []);

  const handlePromisses = useCallback(() => {
    setLoading(true);

    return Promise.all([
      fetchDailySolarGeneration(),
      fetchMonthlySolarGeneration(),
      fetchYearlySolarGeneration(),
      fetchHourlySolarGeneration(),
    ])
      .then(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [
    fetchDailySolarGeneration,
    fetchHourlySolarGeneration,
    fetchMonthlySolarGeneration,
    fetchYearlySolarGeneration,
  ]);

  useEffect(() => {
    if (
      !solarGenerationDaily.data_type.length ||
      !solarGenerationMonthly.data_type.length ||
      !solarGenerationYearly.data_type.length ||
      !solarGenerationHourly.data_type.length
    ) {
      handlePromisses();
    }
  }, [
    handlePromisses,
    solarGenerationDaily.data_type.length,
    solarGenerationHourly.data_type.length,
    solarGenerationMonthly.data_type.length,
    solarGenerationYearly.data_type.length,
  ]);

  return {
    loading,
    formattedData,
    selectDailyData,
    selectMonthlyData,
    selectYearlyData,
    selectHourlyData,
  };
};
