import numeral from 'numeral';
import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetYearlyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {solarGeneration, setSolarGeneration} = useSolarStore();

  async function fetchYearlySolarGeneration() {
    try {
      const response = await api.get('/plant/generation/test-2023', {
        params: {dataType: 'yearly'},
      });
      setSolarGeneration(response.data.data);
    } catch (error) {
      Alert.alert('Ops', 'Its not possible to load the information');
    } finally {
      setLoading(false);
    }
  }

  const formattedData = {
    period: solarGeneration ? solarGeneration?.x_labels : null,
    generation: solarGeneration ? solarGeneration?.generation : null,
    expected: solarGeneration ? solarGeneration?.expected : null,
    kwh: solarGeneration
      ? numeral(solarGeneration?.totals.kwh).format('br')
      : null,
    percentage: solarGeneration
      ? solarGeneration?.totals.percentage / 100
      : null,
    trees: solarGeneration ? Math.round(solarGeneration?.totals.trees) : null,
    co2: solarGeneration ? Math.round(solarGeneration?.totals.co2) : null,
  };

  return {
    loading,
    fetchYearlySolarGeneration,
    formattedData,
  };
};
