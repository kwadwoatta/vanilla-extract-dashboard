import {
  BarControllerChartOptions,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  Legend,
  LinearScale,
  PluginChartOptions,
  ScaleChartOptions,
  Title,
  Tooltip,
} from 'chart.js';
import { _DeepPartialObject } from 'chart.js/types/utils';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface StackedBarChartProps {
  options:
    | _DeepPartialObject<
        CoreChartOptions<'bar'> &
          ElementChartOptions<'bar'> &
          PluginChartOptions<'bar'> &
          DatasetChartOptions<'bar'> &
          ScaleChartOptions<'bar'> &
          BarControllerChartOptions
      >
    | undefined;
  data: ChartData<'bar', number[], string>;
}

export function StackedBarChart({ options, data }: StackedBarChartProps) {
  return <Bar options={options} data={data} />;
}
