import numeral from 'numeral';
import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetYearlyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {solarGenerationYearly, setSolarGenerationYearly} = useSolarStore();

  async function fetchYearlySolarGeneration() {
    try {
      const response = await api.get('/plant/generation/test-2023', {
        params: {dataType: 'yearly'},
      });
      setSolarGenerationYearly(response.data.data);
    } catch (error) {
      Alert.alert('Ops', 'Its not possible to load the information');
    } finally {
      setLoading(false);
    }
  }

  const formattedYearlyData = {
    period: solarGenerationYearly ? solarGenerationYearly?.x_labels : null,
    generation: solarGenerationYearly
      ? solarGenerationYearly?.generation
      : null,
    expected: solarGenerationYearly ? solarGenerationYearly?.expected : null,
    kwh: solarGenerationYearly
      ? numeral(solarGenerationYearly?.totals.kwh).format()
      : null,
    percentage: solarGenerationYearly
      ? solarGenerationYearly?.totals.percentage / 100
      : null,
    trees: solarGenerationYearly
      ? Math.round(solarGenerationYearly?.totals.trees)
      : null,
    co2: solarGenerationYearly
      ? numeral(solarGenerationYearly?.totals.co2).format()
      : null,
  };

  return {
    loading,
    fetchYearlySolarGeneration,
    formattedYearlyData,
  };
};
