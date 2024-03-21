import {
  MoneyInOutTabCardProps,
  tabsTriggerAmount,
  tabsTriggerAmountSpan,
} from '@/components/money-in-out-tab-card';

export const moneyInOutTabs: MoneyInOutTabCardProps = {
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
