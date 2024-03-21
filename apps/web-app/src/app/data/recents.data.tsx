import { Recent } from '@/components/recents';
import { vars } from '@/styles';

export const recents: Recent[] = [
  {
    type: 'EXPENSE',
    description: (
      <>
        {' '}
        Christopher Walker made a{' '}
        <span style={{ color: vars.colors.onSurface }}>₦320</span> unreconciled
        Expense
      </>
    ),
    time: '15 min ago',
  },
  {
    type: 'OFFER',
    description: (
      <>
        {' '}
        New Offer of {''}
        <span style={{ color: vars.colors.onSurface }}>₦25,000</span> to{' '}
        <span style={{ color: vars.colors.onSurface }}>Jesse Holmes</span> made
      </>
    ),
    time: '2 hrs ago',
  },
  {
    type: 'INVENTORY_ADDITION',
    description: (
      <>
        New item {''}
        <span style={{ color: vars.colors.onSurface }}>
          Skincare Package
        </span>{' '}
        added to Inventory
      </>
    ),
    time: '6 hrs ago',
  },
  {
    type: 'CONTACT_ADDITION',
    description: (
      <>
        You added{' '}
        <span style={{ color: vars.colors.onSurface }}>KFC Ghana</span> to your
        Contacts list
      </>
    ),
    time: 'Yesterday',
  },
];
