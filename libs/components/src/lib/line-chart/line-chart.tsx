import { faker } from '@faker-js/faker';
import { fontStyles, vars } from '@prince-assessment/styles';
import { ReactComponent as ChevronDownSvg } from './assets/chevron-down.svg';
import { ReactComponent as SuccessArrowSvg } from './assets/success-arrow.svg';

import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineControllerChartOptions,
  LineElement,
  PluginChartOptions,
  PointElement,
  ScaleChartOptions,
  ScriptableContext,
  Title,
  Tooltip,
} from 'chart.js';
import { _DeepPartialObject } from 'chart.js/types/utils';
import { Line } from 'react-chartjs-2';
import { button, cashOnHand, from, lineContainer } from './line-chart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options:
  | _DeepPartialObject<
      CoreChartOptions<'line'> &
        ElementChartOptions<'line'> &
        PluginChartOptions<'line'> &
        DatasetChartOptions<'line'> &
        ScaleChartOptions<'line'> &
        LineControllerChartOptions
    >
  | undefined = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        padding: 20,
        color: '#848C96',
      },
      grid: {
        borderColor: '#DEE5E9',
        lineWidth: 2,
        borderDash: [11, 11],
        drawTicks: false,
      },
    },
    y: {
      display: false,
      ticks: {},
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ['', 'Mar 19', 'Mar 24', 'Mar 29', 'Apr 04', 'Apr 09', ''];

export const data: ChartData<'line', number[], string> = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      borderColor: '#398AFA',
      fill: 'start',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx;

        // linear-gradient(180deg, #398AFA -347.93%, rgba(57, 138, 250, 0) 47.57%);
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#398AFA ');
        gradient.addColorStop(1, 'rgba(57, 138, 250, 0)');
        return gradient;
      },
      tension: 0.1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      borderColor: '#9585F4',
      fill: 'start',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx;

        // 'linear-gradient(180deg, #9585F4 -854.12%, rgba(149, 133, 244, 0) 100%)',
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#9585F4');
        gradient.addColorStop(1, 'rgba(149, 133, 244, 0)');
        return gradient;
      },
      tension: 0.1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ],
};

export function LineChart() {
  return (
    <div
      style={{
        height: '100%',
        backgroundColor: vars.colors.surface,
        boxShadow: vars.shadows.tiny,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '32px 24px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            className={fontStyles.MANROPE_MED}
            style={{
              marginBottom: 14,
              color: vars.colors.onSurfaceVariant,
            }}
          >
            Cash on Hand
          </p>
          <p className={fontStyles.MANROPE_XXLARGE} style={{ fontWeight: 600 }}>
            ₦ 7,006,923
            <span
              style={{ fontWeight: 400, color: vars.colors.onSurfaceVariant }}
            >
              .14
            </span>
          </p>
          <div
            style={{
              display: 'flex',
              gap: 4,
              marginTop: 10,
              alignItems: 'center',
            }}
          >
            <SuccessArrowSvg />

            <p
              className={fontStyles.MANROPE_MED}
              style={{
                marginRight: 4,
                color: vars.colors.onSuccess,
              }}
            >
              0.3%
            </p>
            <p
              className={fontStyles.MANROPE_MED}
              style={{ color: vars.colors.onSurfaceVariant }}
            >
              Past Week
            </p>
          </div>
        </div>

        <button className={button}>
          <p className={from}>From:</p>
          <p className={cashOnHand}>Cash on Hand</p>
          <ChevronDownSvg />
        </button>
      </div>
      <div className={lineContainer}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default LineChart;
