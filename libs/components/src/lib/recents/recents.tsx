import { ReactNode } from 'react';
import { ReactComponent as ContactSvg } from './assets/contact.svg';
import { ReactComponent as ExpenseSvg } from './assets/expense.svg';
import { ReactComponent as InventorySvg } from './assets/inventory.svg';
import { ReactComponent as OfferSvg } from './assets/offer.svg';
import {
  descriptionStyle,
  flexColumn,
  heading,
  recentsCard,
  timeStyle,
} from './recents.css';

type RecentType =
  | 'EXPENSE'
  | 'OFFER'
  | 'INVENTORY_ADDITION'
  | 'CONTACT_ADDITION';

export interface Recent {
  type: RecentType;
  description: ReactNode;
  time: string;
}

const icons: Record<RecentType, React.FunctionComponent> = {
  EXPENSE: ExpenseSvg,
  OFFER: OfferSvg,
  INVENTORY_ADDITION: InventorySvg,
  CONTACT_ADDITION: ContactSvg,
};

export interface RecentsProps {
  recents: Recent[];
}

export function Recents({ recents }: RecentsProps) {
  return (
    <div className={recentsCard}>
      <p className={heading}>Recents</p>
      <div className={flexColumn}>
        {recents.map(({ type, description, time }) => {
          const Icon = icons[type];

          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: 4,
                  width: 24,
                  height: 82.25,
                  marginRight: 16,
                  paddingBottom: 14,
                  marginTop: -5,
                }}
              >
                <Icon />

                <div
                  style={{
                    width: 1,
                    border: '2px dashed #EEF2F4',
                    flexGrow: 1,
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                }}
              >
                <p className={descriptionStyle}>{description}</p>
                <p className={timeStyle}>{time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recents;
