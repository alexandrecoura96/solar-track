import {IHandles} from 'react-native-modalize/lib/options';
import {DataTypeProps} from '../../models/hooks/useHome/types/useHome';

type FormattedDataProps = {
  period: string[] | null;
  generation: number[] | null;
  expected: number[] | null;
  kwh: string | null;
  percentage: number | null;
  trees: number | null;
  co2: string | null;
};
export interface HomeViewProps {
  loading: boolean;
  data: FormattedDataProps;
  modalRef: React.RefObject<IHandles>;
  onHandleOpenModal: () => void;
  tabBarHeight: number;
  onHandleDailyOption: () => void;
  onHandleMonthlyOption: () => void;
  onHandleYearlyOption: () => void;
  onHandleHourlyOption: () => void;
  arcPeriod: string;
  title: string;
  selected: DataTypeProps;
}
