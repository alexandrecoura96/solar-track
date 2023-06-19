import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetDailyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {setSolarGenerationDaily} = useSolarStore();

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

  return {
    loading,
    fetchDailySolarGeneration,
  };
};
