import React from 'react';

export type SettingsContextType = {
  hideAmounts: boolean
  toggleHideAmounts: () => void;
}

export const SettingsContext = React.createContext<SettingsContextType>({
  hideAmounts: false,
  toggleHideAmounts: () => { }
});

export const useSettingsContext = () => {
  const context = React.useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettingsContext must be used within a SettingsProvider')
  }
  return context
}
