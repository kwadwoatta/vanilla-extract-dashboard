import {
  Accordion,
  AccordionContent,
  AccordionItem,
  accordionPrimitiveItemStyle,
  accordionPrimitiveRootStyle,
  AccordionTrigger,
  chevronDownIconStyle,
} from '@/components/accordion';
import { fontStyles } from '@/styles';
import { ReactNode } from 'react';
import AccountSelector from '../account-selector/account-selector';

import SearchInput from '../search-input/search-input';
import { ReactComponent as ChevronDownSvg } from './assets/chevron-down.svg';
import { ReactComponent as GlobeSvg } from './assets/globe.svg';
import { menuBarContainer, paragraph, row1, row2 } from './menu-bar.css';

export interface MenuBarItem {
  menuBarItemLabel: string;
  menuBarItemIcon: ReactNode;
  route: string;
  onClick: () => void;
  subMenu?: {
    route: string;
    onClick: () => void;
    subMenuBarItemLabel: string;
  }[];
}

export interface MenuBarProps {
  menuBarItems: MenuBarItem[];
}

export function MenuBar({ menuBarItems }: MenuBarProps) {
  return (
    <div className={menuBarContainer}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <AccountSelector />
          <SearchInput />
        </div>
        <Accordion
          style={{ marginTop: 20 }}
          className={accordionPrimitiveRootStyle}
          type="single"
          defaultValue={'Home'}
          collapsible
        >
          {menuBarItems.map(
            ({
              menuBarItemLabel,
              menuBarItemIcon,
              route,
              onClick,
              subMenu,
            }) => (
              <AccordionItem
                className={accordionPrimitiveItemStyle}
                value={menuBarItemLabel}
              >
                <AccordionTrigger>
                  <div className={row1}>
                    {menuBarItemIcon}
                    <p className={fontStyles.MANROPE_MED}>{menuBarItemLabel}</p>
                  </div>
                  {subMenu && subMenu.length > 0 && (
                    <ChevronDownSvg className={chevronDownIconStyle} />
                  )}
                </AccordionTrigger>
                {subMenu &&
                  subMenu.map((subMenuItem) => (
                    <AccordionContent>
                      {subMenuItem.subMenuBarItemLabel}
                    </AccordionContent>
                  ))}
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>

      <div className={row2}>
        <GlobeSvg />

        <p className={paragraph}> Help & Support</p>
      </div>
    </div>
  );
}

export default MenuBar;
