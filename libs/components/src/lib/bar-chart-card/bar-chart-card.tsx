import { fontStyles, vars } from '@/styles';
import { StackedBarChart } from '../stacked-bar-chart/stacked-bar-chart';
import { ReactComponent as ChevronDownSvg } from './assets/chevron-down.svg';
import {
  barChartCardContainer,
  button,
  label,
  labelSpan,
  stackedBarChartContainer,
} from './bar-chart-card.css';
import { data, options } from './bar-chart-card.data';

export function BarChartCard() {
  return (
    <div className={barChartCardContainer}>
      <p className={label}>
        Invoices <span className={labelSpan}>vs</span> Purchases / Expenses
      </p>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <p className={fontStyles.MANROPE_XXLARGE} style={{ fontWeight: 600 }}>
          56 / 271
        </p>
        <p style={{ color: vars.colors.onSurfaceVariant, fontWeight: 600 }}>
          Jan -{'>'} Apr 22
        </p>
      </div>

      <div className={stackedBarChartContainer}>
        <StackedBarChart options={options} data={data} />
      </div>

      <div style={{ display: 'flex', gap: 8, width: '100%' }}>
        <div className={button}>
          <p
            className={fontStyles.MANROPE_LARGE}
            style={{ color: vars.colors.primary }}
          >
            ●
          </p>
          <p>Invoices</p>
        </div>

        <div className={button}>
          <p
            className={fontStyles.MANROPE_LARGE}
            style={{ color: vars.colors.CDC5FF }}
          >
            ●
          </p>
          <p>Purchases</p>
        </div>

        <div className={button} style={{ alignSelf: 'self-end' }}>
          <p>Monthly</p>
          <ChevronDownSvg />
        </div>
      </div>
    </div>
  );
}

export default BarChartCard;
