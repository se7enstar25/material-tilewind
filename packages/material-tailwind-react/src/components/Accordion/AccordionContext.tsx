import React from "react";

// types
import type { open, icon, animate, children } from "../../types/components/accordion";
import { propTypesValue, propTypesChildren } from "../../types/components/accordion";

export interface AccordionContextType {
  open: open;
  icon: icon;
  animate: animate;
}

export const AccordionContext = React.createContext<AccordionContextType>(null);
AccordionContext.displayName = "MaterialTailwind.AccordionContext";

export function useAccordion() {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "useAccordion() must be used within an Accordion. It happens when you use AccordionHeader or AccordionBody components outside of Accordion component.",
    );
  }

  return context;
}

export interface AccordionContextProviderProps {
  value: AccordionContextType;
  children: children;
}

export function AccordionContextProvider({ value, children }: AccordionContextProviderProps) {
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
}

AccordionContextProvider.propTypes = {
  value: propTypesValue,
  children: propTypesChildren,
};
