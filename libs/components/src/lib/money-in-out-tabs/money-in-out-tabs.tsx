import { fontStyles, vars } from '@prince-assessment/styles';
import { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tab';
import { Table } from '../table';
import { ReactComponent as MoneyInSvg } from './assets/money-in.svg';
import {
  box,
  tabsPrimitiveContent,
  tabsPrimitiveList,
  tabsPrimitiveRoot,
  tabsPrimitiveTrigger,
  tabsTriggerIcon,
  tabsTriggerLabelContainer,
  tabsTriggerLabelText,
} from './money-in-out-tabs.css';

export interface MoneyInOutTabsProps {
  defaultValue: string;
  tabs: {
    value: string;
    triggerLabel: string;
    triggerSubLabel: ReactNode;
  }[];
}

export function MoneyInOutTabs({ defaultValue, tabs }: MoneyInOutTabsProps) {
  return (
    <div className={box}>
      <Tabs defaultValue={defaultValue} className={tabsPrimitiveRoot}>
        <TabsList aria-label="Transactions" className={tabsPrimitiveList}>
          {tabs.map(({ value, triggerLabel, triggerSubLabel }) => (
            <TabsTrigger className={tabsPrimitiveTrigger} value={value}>
              <div className={tabsTriggerLabelContainer}>
                <MoneyInSvg className={tabsTriggerIcon} />
                <p className={tabsTriggerLabelText}>{triggerLabel}</p>
              </div>

              {triggerSubLabel}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(({ value }) => (
          <TabsContent value={value} className={tabsPrimitiveContent}>
            <Table />
          </TabsContent>
        ))}
      </Tabs>

      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          className={fontStyles.MANROPE_MED}
          style={{ fontWeight: 600, color: vars.colors.primary }}
        >
          View All
        </p>
      </div>
    </div>
  );
}

export default MoneyInOutTabs;
