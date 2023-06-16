type FormattedDataProps = {
  period: string[] | null;
  generation: number[] | null;
  expected: number[] | null;
  kwh: string | null;
  percentage: number | null;
  trees: number | null;
  co2: number | null;
};
export interface HomeViewProps {
  loading: boolean;
  data: FormattedDataProps;
}
