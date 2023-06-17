import {create} from 'zustand';
import {GetYearlyProps} from '../../models/hooks/useGetYearlyGeneration/types/useGetYearlyGeneration';

const initialState = {
  solarGeneration: {
    data_type: '',
    x_labels: [],
    generation: [],
    expected: [],
    totals: {
      kwh: 0,
      percentage: 0,
      trees: 0,
      co2: 0,
    },
  },
};

export const useSolarStore = create(
  (
    set,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    get: () => {
      solarGeneration: GetYearlyProps;
      setSolarGeneration: (value: GetYearlyProps) => void;
    },
  ) => ({
    setSolarGeneration: (value: GetYearlyProps) => {
      set({solarGeneration: value});
    },
    ...initialState,
  }),
);
