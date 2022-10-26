import { faker } from '@faker-js/faker';
import { StackedBarChartProps } from '../stacked-bar-chart/stacked-bar-chart';

export const options: StackedBarChartProps['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,

      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        borderColor: '#DEE5E9',
        lineWidth: 2,
        borderDash: [10, 5],
        drawTicks: false,
      },
      ticks: {
        padding: 20,
        color: '#848C96',
      },
    },
  },
  datasets: {
    bar: {
      borderRadius: 3,
      barPercentage: 0.3,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ['Jan ‘ 22', 'Feb ‘ 22', 'Mar ‘ 22', 'Apr ‘ 22'];

export const data: StackedBarChartProps['data'] = {
  labels,
  datasets: [
    {
      label: 'Invoices',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 175 })),
      backgroundColor: '#398AFA',
    },
    {
      label: 'Purchases',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 175 })),
      backgroundColor: '#CDC5FF',
    },
  ],
};
