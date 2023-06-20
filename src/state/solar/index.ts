import {create} from 'zustand';
import {GetYearlyProps} from '../../models/hooks/useGetYearlyGeneration/types/useGetYearlyGeneration';

const initialState = {
  solarGenerationDaily: {
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
  solarGenerationMonthly: {
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
  solarGenerationYearly: {
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
  solarGenerationHourly: {
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
      solarGenerationYearly: GetYearlyProps;
      setSolarGenerationYearly: (value: GetYearlyProps) => void;
      solarGenerationDaily: GetYearlyProps;
      setSolarGenerationDaily: (value: GetYearlyProps) => void;
      solarGenerationMonthly: GetYearlyProps;
      setSolarGenerationMonthly: (value: GetYearlyProps) => void;
      solarGenerationHourly: GetYearlyProps;
      setSolarGenerationHourly: (value: GetYearlyProps) => void;
    },
  ) => ({
    setSolarGenerationYearly: (value: GetYearlyProps) => {
      set({solarGenerationYearly: value});
    },
    setSolarGenerationDaily: (value: GetYearlyProps) => {
      set({solarGenerationDaily: value});
    },
    setSolarGenerationMonthly: (value: GetYearlyProps) => {
      set({solarGenerationMonthly: value});
    },
    setSolarGenerationHourly: (value: GetYearlyProps) => {
      set({solarGenerationHourly: value});
    },
    ...initialState,
  }),
);
