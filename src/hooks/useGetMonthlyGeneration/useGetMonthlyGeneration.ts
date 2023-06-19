import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetMonthlyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {setSolarGenerationMonthly} = useSolarStore();

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

  return {
    loading,
    fetchMonthlySolarGeneration,
  };
};
