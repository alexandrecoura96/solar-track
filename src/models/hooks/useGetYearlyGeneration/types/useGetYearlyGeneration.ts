export interface GetYearlyProps {
  data_type: string;
  x_labels: Array<string>;
  generation: Array<number>;
  expected: Array<number>;
  totals: {
    kwh: number;
    percentage: number;
    trees: number;
    co2: number;
  };
}
