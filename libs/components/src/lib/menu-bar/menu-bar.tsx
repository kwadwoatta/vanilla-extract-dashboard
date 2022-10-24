import {
  Accordion,
  AccordionContent,
  AccordionItem,
  accordionPrimitiveItemStyle,
  accordionPrimitiveRootStyle,
  AccordionTrigger,
  chevronDownIconStyle,
} from '@prince-assessment/components/accordion';
import { fontStyles, vars } from '@prince-assessment/styles';
import { ReactNode } from 'react';
import AccountSelector from '../account-selector/account-selector';

import SearchInput from '../search-input/search-input';
import { menuBarContainer } from './menu-bar.css';

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
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      gap: 10,
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    {menuBarItemIcon}
                    <p className={fontStyles.MANROPE_MED}>{menuBarItemLabel}</p>
                  </div>
                  {subMenu && subMenu.length > 0 && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={chevronDownIconStyle}
                      aria-hidden
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.52859 7.52861C5.78894 7.26826 6.21105 7.26826 6.4714 7.52861L10 11.0572L13.5286 7.52861C13.7889 7.26826 14.2111 7.26826 14.4714 7.52861C14.7318 7.78896 14.7318 8.21107 14.4714 8.47141L10.4714 12.4714C10.2111 12.7318 9.78894 12.7318 9.52859 12.4714L5.52859 8.47141C5.26824 8.21107 5.26824 7.78896 5.52859 7.52861Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </AccordionTrigger>
                {subMenu &&
                  subMenu.map(() => (
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  ))}
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>

      <div
        style={{
          height: 32,
          display: 'flex',
          gap: 9.6,
          paddingLeft: 9.6,
          justifyContent: 'start',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4 7.99998C14.4 9.69736 13.7257 11.3252 12.5255 12.5255C11.3253 13.7257 9.69739 14.4 8.00001 14.4C6.30262 14.4 4.67476 13.7257 3.47452 12.5255C2.27429 11.3252 1.60001 9.69736 1.60001 7.99998C1.60001 6.30259 2.27429 4.67472 3.47452 3.47449C4.67476 2.27426 6.30262 1.59998 8.00001 1.59998C9.69739 1.59998 11.3253 2.27426 12.5255 3.47449C13.7257 4.67472 14.4 6.30259 14.4 7.99998ZM12.8 7.99998C12.8 8.79437 12.6072 9.54317 12.2656 10.2032L11.0464 8.98318C11.229 8.41813 11.2506 7.81341 11.1088 7.23677L12.3584 5.98718C12.6416 6.59918 12.8 7.27998 12.8 7.99998ZM8.66801 11.1304L9.93201 12.3944C9.32321 12.6624 8.6652 12.8006 8.00001 12.8C7.30495 12.8008 6.61806 12.6501 5.98721 12.3584L7.23681 11.1088C7.70614 11.2238 8.19541 11.2312 8.66801 11.1304ZM4.92641 8.89357C4.76897 8.3515 4.75766 7.77743 4.89361 7.22958L4.82961 7.29357L3.60561 6.06718C3.33745 6.67622 3.19931 7.33451 3.20001 7.99998C3.20001 8.76318 3.37841 9.48477 3.69521 10.1256L4.92721 8.89357H4.92641ZM5.79681 3.73358C6.47778 3.38159 7.23344 3.19858 8.00001 3.19998C8.76321 3.19998 9.48481 3.37838 10.1256 3.69518L8.89361 4.92718C8.27942 4.74828 7.62572 4.75747 7.01681 4.95358L5.79681 3.73438V3.73358ZM9.60001 7.99998C9.60001 8.42432 9.43143 8.83129 9.13138 9.13135C8.83132 9.4314 8.42435 9.59998 8.00001 9.59998C7.57566 9.59998 7.16869 9.4314 6.86864 9.13135C6.56858 8.83129 6.40001 8.42432 6.40001 7.99998C6.40001 7.57563 6.56858 7.16866 6.86864 6.8686C7.16869 6.56855 7.57566 6.39998 8.00001 6.39998C8.42435 6.39998 8.83132 6.56855 9.13138 6.8686C9.43143 7.16866 9.60001 7.57563 9.60001 7.99998Z"
            fill="#ABB3B9"
          />
        </svg>

        <p
          className={fontStyles.MANROPE_MED}
          style={{
            fontWeight: 500,
            color: vars.colors.onSurface,
            lineHeight: '20px',
          }}
        >
          {' '}
          Help & Support
        </p>
      </div>
    </div>
  );
}

export default MenuBar;
