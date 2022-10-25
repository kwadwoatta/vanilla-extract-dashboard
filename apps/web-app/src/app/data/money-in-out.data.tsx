import { MoneyInOutTabsProps } from '@prince-assessment/components/money-in-out-tabs';
import {
  tabsTriggerAmount,
  tabsTriggerAmountSpan,
} from 'libs/components/src/lib/money-in-out-tabs/money-in-out-tabs.css';

export const moneyInOutTabs: MoneyInOutTabsProps = {
  defaultValue: 'tab1',
  tabs: [
    {
      value: 'tab1',
      triggerLabel: 'Money In',
      triggerSubLabel: (
        <p className={tabsTriggerAmount}>
          ₦ 1,010,271
          <span className={tabsTriggerAmountSpan}>.18</span>
        </p>
      ),
    },
    {
      value: 'tab2',
      triggerLabel: 'Money Out',
      triggerSubLabel: (
        <p className={tabsTriggerAmount}>
          ₦ 403,736
          <span className={tabsTriggerAmountSpan}>.12</span>
        </p>
      ),
    },
  ],
};
