import numeral from 'numeral';
import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetMonthlyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {solarGenerationMonthly, setSolarGenerationMonthly} = useSolarStore();

  async function fetchMonthlySolarGeneration() {
    try {
      const response = await api.get('/plant/generation/test-2023', {
        params: {dataType: 'monthly'},
      });
      setSolarGenerationMonthly(response.data.data);
    } catch (error) {
      Alert.alert('Ops', 'Its not possible to load the information');
    } finally {
      setLoading(false);
    }
  }

  const formattedMonthlyData = {
    period: solarGenerationMonthly ? solarGenerationMonthly?.x_labels : null,
    generation: solarGenerationMonthly
      ? solarGenerationMonthly?.generation
      : null,
    expected: solarGenerationMonthly ? solarGenerationMonthly?.expected : null,
    kwh: solarGenerationMonthly
      ? numeral(solarGenerationMonthly?.totals.kwh).format()
      : null,
    percentage: solarGenerationMonthly
      ? solarGenerationMonthly?.totals.percentage / 100
      : null,
    trees: solarGenerationMonthly
      ? Math.round(solarGenerationMonthly?.totals.trees)
      : null,
    co2: solarGenerationMonthly
      ? numeral(solarGenerationMonthly?.totals.co2).format()
      : null,
  };

  return {
    loading,
    fetchMonthlySolarGeneration,
    formattedMonthlyData,
  };
};
