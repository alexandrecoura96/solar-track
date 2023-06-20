import {useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/axios';
import {useSolarStore} from '../../state/solar';

export const useGetHourlyGeneration = () => {
  const [loading, setLoading] = useState(true);
  const {setSolarGenerationHourly} = useSolarStore();

  async function fetchHourlySolarGeneration() {
    try {
      const response = await api.get('/plant/generation/test-2023', {
        params: {dataType: 'hourly'},
      });
      setSolarGenerationHourly(response.data.data);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ops', 'Its not possible to load the information');
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    fetchHourlySolarGeneration,
  };
};
