import { fontStyles, vars } from '@prince-assessment/styles';
import { ReactComponent as AddSvg } from './assets/add.svg';
import { ReactComponent as ChevronLeftSvg } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRightSvg } from './assets/chevron-right.svg';
import { headerContainer } from './header.css';

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
      <button
        style={{
          width: 128,
          height: 40,
          border: '1px solid #EEF2F4',
          backgroundColor: vars.colors.surface,
          boxShadow: vars.shadows.tiny,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <AddSvg />

        <p
          className={fontStyles.MANROPE_MED}
          style={{ fontWeight: 600, color: vars.colors.onSurface }}
        >
          New Action
        </p>
      </button>
    </div>
  );
}

export default Header;
