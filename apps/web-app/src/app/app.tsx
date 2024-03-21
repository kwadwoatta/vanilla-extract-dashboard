import { BarChartCard } from '@/components/bar-chart-card';
import { Header } from '@/components/header';
import { LineChart } from '@/components/line-chart';
import { MenuBar } from '@/components/menu-bar';
import { MoneyInOutTabCard } from '@/components/money-in-out-tab-card';
import { Recents } from '@/components/recents';
import { SalesAndPurchasesCard } from '@/components/sales-and-purchases-card';
import {
  flexibleColumn,
  fullPageRow,
  grid,
  hundredByHundredPercentColumn,
  span2,
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

            <div className={span2}>
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
