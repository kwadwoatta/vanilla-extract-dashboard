import { fontStyles, vars } from '@/styles';
import { DoughnutChart, DoughnutChartProps } from '../doughnut-chart';
import {
  doughnutChartContainer,
  header,
  headerSpan,
  salesAndPurchasesCard,
} from './sales-and-purchases-card.css';

const data: DoughnutChartProps['data'] = {
  labels: ['Sales', 'Purchases'],
  datasets: [
    {
      label: '# of Sales and Purchases',
      data: [95, 5],
      backgroundColor: ['#398AFA', '#CDC5FF'],
      borderColor: ['#398AFA', '#CDC5FF'],
    },
  ],
};

const options: DoughnutChartProps['options'] = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: 80,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    arc: {},
  },
  datasets: {
    doughnut: {
      spacing: 4,
      borderRadius: 8,
      rotation: 85,
    },
  },
};

const plugins: DoughnutChartProps['plugins'] = [
  {
    id: '1',
    beforeDraw: function (chart) {
      if (chart?.config?.options?.elements?.arc) {
        // Get ctx from string
        const ctx = chart.ctx;

        // calculate the center of the canvas (cx,cy)
        const cx = chart.width / 2;
        const cy = chart.height / 2;

        // horizontally align text around the specified point (cx)
        ctx.textAlign = 'center';

        // vertically align text around the specified point (cy)
        ctx.textBaseline = 'middle';

        // draw the first text
        ctx.font = '600 12px Manrope';
        ctx.fillStyle = '#848C96';
        ctx.fillText('Transactions', cx, cy - 13);

        // draw the second text
        ctx.fillStyle = '#575F6A';
        ctx.font = '600 22px Manrope';
        ctx.fillText('June 2022', cx, cy + 10);
      }
    },
  },
];

export function SalesAndPurchasesCard() {
  return (
    <div className={salesAndPurchasesCard}>
      <p className={header}>
        Sales <span className={headerSpan}>&</span> Purchases
      </p>

      <div className={doughnutChartContainer}>
        <DoughnutChart data={data} options={options} plugins={plugins} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          width: '100%',
        }}
      >
        <BottomRowThingy label="Sales" color="#398AFA" amount="₦ 102,004.77" />
        <BottomRowThingy
          label="Purchases"
          color="#CDC5FF"
          amount="₦ 15,111.02"
        />
      </div>
    </div>
  );
}

interface BottomRowThingyProps {
  label: string;
  color: string;
  amount: string;
}

function BottomRowThingy({ label, color, amount }: BottomRowThingyProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <div
          style={{
            width: 4,
            height: 20,
            backgroundColor: color,
            borderRadius: 8,
          }}
        />
        <p style={{ fontWeight: 600 }}>{label}</p>
      </div>

      <p className={fontStyles.MANROPE_LARGE} style={{ fontWeight: 600 }}>
        {amount.split('.')[0]}
        <span style={{ color: vars.colors.onSurfaceVariant }}>
          .{amount.split('.')[1]}
        </span>
      </p>
    </div>
  );
}

export default SalesAndPurchasesCard;
