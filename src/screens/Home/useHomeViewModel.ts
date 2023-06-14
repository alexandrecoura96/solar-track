import {useEffect} from 'react';
import {useGetYearlyGeneration} from '../../hooks/useGetYearlyGeneration/useGetYearlyGeneration';

export const useHomeViewModel = () => {
  const {loading, data, fetchYearlySolarGeneration} = useGetYearlyGeneration();

  useEffect(() => {
    fetchYearlySolarGeneration();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    data,
  };
};
