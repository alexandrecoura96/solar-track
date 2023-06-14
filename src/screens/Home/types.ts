import {GetYearlyProps} from '../../models/hooks/useGetYearlyGeneration/types/useGetYearlyGeneration';

export interface HomeViewProps {
  loading: boolean;
  data?: GetYearlyProps;
}
