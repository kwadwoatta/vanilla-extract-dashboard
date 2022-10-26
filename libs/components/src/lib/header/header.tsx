import { fontStyles } from '@prince-assessment/styles';
import { ReactComponent as AddSvg } from './assets/add.svg';
import { ReactComponent as ChevronLeftSvg } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRightSvg } from './assets/chevron-right.svg';
import { button, buttonP, headerContainer } from './header.css';

export function Header() {
  return (
    <div className={headerContainer}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <ChevronLeftSvg />
        <ChevronRightSvg />

        <p className={fontStyles.MANROPE_LARGE} style={{ fontWeight: 700 }}>
          Tectonic Ltd
        </p>
      </div>
      <button className={button}>
        <AddSvg />

        <p className={buttonP}>New Action</p>
      </button>
    </div>
  );
}

export default Header;
