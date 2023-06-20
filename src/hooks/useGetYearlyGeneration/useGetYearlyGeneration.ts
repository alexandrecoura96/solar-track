import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetYearlyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {setSolarGenerationYearly} = useSolarStore();

  async function fetchYearlySolarGeneration() {
    try {
      const response = await api.get('/plant/generation/test-2023', {
        params: {dataType: 'yearly'},
      });
      setSolarGenerationYearly(response.data.data);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ops', 'Its not possible to load the information');
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    fetchYearlySolarGeneration,
  };
};
