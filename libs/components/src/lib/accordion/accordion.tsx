import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React from 'react';

import {
  accordionPrimitiveContentStyle,
  accordionPrimitiveHeaderStyle,
  accordionPrimitiveTriggerStyle,
  ContentTextStyle,
} from './accordion.css';

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.AccordionItem;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, any>(
  (props, forwardedRef) => (
    <AccordionPrimitive.Header className={accordionPrimitiveHeaderStyle}>
      <AccordionPrimitive.Trigger
        className={accordionPrimitiveTriggerStyle}
        {...props}
        ref={forwardedRef}
      >
        {props.children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AccordionContent = React.forwardRef<HTMLDivElement, any>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content
      className={accordionPrimitiveContentStyle}
      {...props}
      ref={forwardedRef}
    >
      <div className={ContentTextStyle}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
