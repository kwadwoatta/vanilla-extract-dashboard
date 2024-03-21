import { menuItemIconStyle } from '@/components/accordion';
import { MenuBarItem } from '@/components/menu-bar';
import { ReactComponent as AssetsSvg } from '../../assets/svg/assets.svg';
import { ReactComponent as ContactsSvg } from '../../assets/svg/contacts.svg';
import { ReactComponent as FinancialSvg } from '../../assets/svg/financial.svg';
import { ReactComponent as HomeSvg } from '../../assets/svg/home.svg';
import { ReactComponent as InventorySvg } from '../../assets/svg/inventory.svg';
import { ReactComponent as PurchasesSvg } from '../../assets/svg/purchases.svg';
import { ReactComponent as ReportsSvg } from '../../assets/svg/reports.svg';
import { ReactComponent as SalesSvg } from '../../assets/svg/sales.svg';

export const menuBarItems: MenuBarItem[] = [
  {
    menuBarItemLabel: 'Home',
    menuBarItemIcon: <HomeSvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
    subMenu: [],
  },
  {
    menuBarItemLabel: 'Sales',
    menuBarItemIcon: <SalesSvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
    subMenu: [
      {
        route: '/',
        onClick: () => ({}),
        subMenuBarItemLabel: '1.  Item 1',
      },
    ],
  },
  {
    menuBarItemLabel: 'Purchases',
    menuBarItemIcon: <PurchasesSvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
  },
  {
    menuBarItemLabel: 'Financial',
    menuBarItemIcon: <FinancialSvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
    subMenu: [],
  },
  {
    menuBarItemLabel: 'Contacts',
    menuBarItemIcon: <ContactsSvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
    subMenu: [],
  },
  {
    menuBarItemLabel: 'Reports',
    menuBarItemIcon: <ReportsSvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
    subMenu: [],
  },
  {
    menuBarItemLabel: 'Assets',
    menuBarItemIcon: <AssetsSvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
    subMenu: [],
  },
  {
    menuBarItemLabel: 'Inventory',
    menuBarItemIcon: <InventorySvg className={menuItemIconStyle} />,
    route: '/',
    onClick: () => ({}),
    subMenu: [
      {
        route: '/',
        onClick: () => ({}),
        subMenuBarItemLabel: '1.  Item 1',
      },
      {
        route: '/',
        onClick: () => ({}),
        subMenuBarItemLabel: '2.  Item 2',
      },
    ],
  },
];
