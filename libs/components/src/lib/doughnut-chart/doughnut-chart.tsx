import {
  ArcElement,
  Chart as ChartJS,
  ChartData,
  CoreChartOptions,
  DatasetChartOptions,
  DoughnutControllerChartOptions,
  ElementChartOptions,
  Legend,
  Plugin,
  PluginChartOptions,
  ScaleChartOptions,
  Tooltip,
} from 'chart.js';
import { AnyObject } from 'chart.js/types/basic';
import { _DeepPartialObject } from 'chart.js/types/utils';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DoughnutChartProps {
  data: ChartData<'doughnut', number[], string>;
  options:
    | _DeepPartialObject<
        CoreChartOptions<'doughnut'> &
          ElementChartOptions<'doughnut'> &
          PluginChartOptions<'doughnut'> &
          DatasetChartOptions<'doughnut'> &
          ScaleChartOptions<'doughnut'> &
          DoughnutControllerChartOptions
      >
    | undefined;
  plugins?: Plugin<'doughnut', AnyObject>[] | undefined;
}

export function DoughnutChart({ data, options, plugins }: DoughnutChartProps) {
  return <Doughnut data={data} options={options} plugins={plugins} />;
}

export default DoughnutChart;
