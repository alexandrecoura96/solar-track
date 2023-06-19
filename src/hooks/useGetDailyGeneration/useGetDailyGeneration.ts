import numeral from 'numeral';
import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetDailyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {solarGenerationDaily, setSolarGenerationDaily} = useSolarStore();

  async function fetchDailySolarGeneration() {
    try {
      const response = await api.get('/plant/generation/test-2023', {
        params: {dataType: 'daily'},
      });
      setSolarGenerationDaily(response.data.data);
    } catch (error) {
      Alert.alert('Ops', 'Its not possible to load the information');
    } finally {
      setLoading(false);
    }
  }

  const formattedDailyData = {
    period: solarGenerationDaily ? solarGenerationDaily?.x_labels : null,
    generation: solarGenerationDaily ? solarGenerationDaily?.generation : null,
    expected: solarGenerationDaily ? solarGenerationDaily?.expected : null,
    kwh: solarGenerationDaily
      ? numeral(solarGenerationDaily?.totals.kwh).format()
      : null,
    percentage: solarGenerationDaily
      ? solarGenerationDaily?.totals.percentage / 100
      : null,
    trees: solarGenerationDaily
      ? Math.round(solarGenerationDaily?.totals.trees)
      : null,
    co2: solarGenerationDaily
      ? numeral(solarGenerationDaily?.totals.co2).format()
      : null,
  };

  return {
    loading,
    fetchDailySolarGeneration,
    formattedDailyData,
  };
};
