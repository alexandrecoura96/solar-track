export type BarChartDataProps = {
  label: string;
  value: number;
  expected: number;
};

export interface BarChartProps {
  data: BarChartDataProps[];
  smallerFont?: boolean;
}
