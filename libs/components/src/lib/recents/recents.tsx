import { ReactNode } from 'react';
import { ReactComponent as ContactSvg } from './assets/contact.svg';
import { ReactComponent as ExpenseSvg } from './assets/expense.svg';
import { ReactComponent as InventorySvg } from './assets/inventory.svg';
import { ReactComponent as OfferSvg } from './assets/offer.svg';
import {
  column,
  dashedLine,
  descriptionStyle,
  flexColumn,
  heading,
  recentsCard,
  row1,
  row2,
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
            <div className={row1}>
              <div className={column}>
                <Icon />

                <div className={dashedLine} />
              </div>

              <div className={row2}>
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
