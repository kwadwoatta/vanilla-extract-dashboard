import { Header } from '@prince-assessment/components/header';
import { LineChart } from '@prince-assessment/components/line-chart';
import { MenuBar } from '@prince-assessment/components/menu-bar';
import { MoneyInOutTabCard } from '@prince-assessment/components/money-in-out-tab-card';
import { Recents } from '@prince-assessment/components/recents';
import { SalesAndPurchasesCard } from '@prince-assessment/components/sales-and-purchases-card';
import BarChartCard from 'libs/components/src/lib/bar-chart-card/bar-chart-card';
import {
  grid,
  headerGridColumn,
  lineChartGrid,
  menuBarGridColumn,
} from './app.css';
import { menuBarItems } from './data/menubar.data';
import { moneyInOutTabs } from './data/money-in-out.data';
import { recents } from './data/recents.data';

export function App() {
  return (
    <div className={grid}>
      <div className={menuBarGridColumn}>
        <MenuBar menuBarItems={menuBarItems} />
      </div>

      <div className={headerGridColumn}>
        <Header />
      </div>

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
  );
}

export default App;
