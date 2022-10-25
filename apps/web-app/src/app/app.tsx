import { Header } from '@prince-assessment/components/header';
import { MenuBar } from '@prince-assessment/components/menu-bar';
import { MoneyInOutTabs } from '@prince-assessment/components/money-in-out-tabs';
import { Recents } from '@prince-assessment/components/recents';
import { vars } from '@prince-assessment/styles';
import { grid, headerGridColumn, menuBarGridColumn } from './app.css';
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

      <div
        style={{
          backgroundColor: vars.colors.surface,
          boxShadow: vars.shadows.tiny,
          borderRadius: 10,
          gridColumn: 'span 2',
        }}
      ></div>

      <div
        style={{
          backgroundColor: vars.colors.surface,
          height: 413,
          boxShadow: vars.shadows.tiny,
          borderRadius: 10,
        }}
      >
        <MoneyInOutTabs
          defaultValue={moneyInOutTabs.defaultValue}
          tabs={moneyInOutTabs.tabs}
        />
      </div>

      <div
        style={{
          backgroundColor: 'yellow',
          height: 413,
          boxShadow: vars.shadows.tiny,
          borderRadius: 10,
        }}
      ></div>

      <div
        style={{
          backgroundColor: 'orange',
          height: 413,
          boxShadow: vars.shadows.tiny,
          borderRadius: 10,
        }}
      ></div>
    </div>
  );
}

export default App;
