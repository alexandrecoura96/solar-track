import numeral from 'numeral';
import {useState} from 'react';
import {Alert} from 'react-native';
import {GetYearlyProps} from '../../models/hooks/useGetYearlyGeneration/types/useGetYearlyGeneration';
import {api} from '../../services/axios';

export const useGetYearlyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GetYearlyProps>();

  async function fetchYearlySolarGeneration() {
    try {
      const response = await api.get('/plant/generation/test-2023', {
        params: {dataType: 'yearly'},
      });
      setData(response.data.data);
    } catch (error) {
      Alert.alert('Ops', 'Its not possible to load the information');
    } finally {
      setLoading(false);
    }
  }

  const formattedData = {
    period: data ? data?.x_labels : null,
    generation: data ? data?.generation : null,
    expected: data ? data?.expected : null,
    kwh: data ? numeral(data?.totals.kwh).format('br') : null,
    percentage: data ? data?.totals.percentage / 100 : null,
    trees: data ? Math.round(data?.totals.trees) : null,
    co2: data ? Math.round(data?.totals.co2) : null,
  };

  return {
    loading,
    fetchYearlySolarGeneration,
    formattedData,
  };
};
