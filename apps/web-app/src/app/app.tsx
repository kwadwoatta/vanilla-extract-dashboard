import { BarChartCard } from '@prince-assessment/components/bar-chart-card';
import { Header } from '@prince-assessment/components/header';
import { LineChart } from '@prince-assessment/components/line-chart';
import { MenuBar } from '@prince-assessment/components/menu-bar';
import { MoneyInOutTabCard } from '@prince-assessment/components/money-in-out-tab-card';
import { Recents } from '@prince-assessment/components/recents';
import { SalesAndPurchasesCard } from '@prince-assessment/components/sales-and-purchases-card';
import {
  flexibleColumn,
  fullPageRow,
  grid,
  hundredByHundredPercentColumn,
  lineChartGrid,
} from './app.css';
import { menuBarItems } from './data/menubar.data';
import { moneyInOutTabs } from './data/money-in-out.data';
import { recents } from './data/recents.data';

export function App() {
  return (
    <div className={fullPageRow}>
      <MenuBar menuBarItems={menuBarItems} />
      <div className={hundredByHundredPercentColumn}>
        <Header />

        <div className={flexibleColumn}>
          <div className={grid}>
            <Recents recents={recents} />

            <div className={lineChartGrid}>
              <LineChart />
            </div>

            <MoneyInOutTabCard
              defaultValue={moneyInOutTabs.defaultValue}
              tabs={moneyInOutTabs.tabs}
            />

            <SalesAndPurchasesCard />

            <BarChartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
