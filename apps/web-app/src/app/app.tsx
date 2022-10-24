import { Header } from '@prince-assessment/components/header';
import { MenuBar } from '@prince-assessment/components/menu-bar';
import { vars } from '@prince-assessment/styles';
import { Recents } from 'libs/components/src/lib/recents';
import { grid, headerGridColumn, menuBarGridColumn } from './app.css';
import { menuBarItems } from './data/menubar.data';
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
          backgroundColor: 'black',
          height: 413,
          boxShadow: vars.shadows.tiny,
          borderRadius: 10,
          gridColumn: 'span 2',
        }}
      ></div>

      <div
        style={{
          backgroundColor: 'gray',
          height: 413,
          boxShadow: vars.shadows.tiny,
          borderRadius: 10,
        }}
      ></div>

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
