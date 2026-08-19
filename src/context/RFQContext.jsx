import React, { createContext, useContext, useState } from 'react';

const RFQContext = createContext();

export const WHATSAPP_NUMBER = "923005120535";
export const DISPLAY_WHATSAPP = "+92-300-5120535";
export const OFFICIAL_EMAIL = "info@pakpse.com";

export function RFQProvider({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const generateWhatsAppUrl = (customMessage = null) => {
    const defaultText = "Hello Pak Solutions Enterprises, I would like to inquire regarding procurement and BOQ pricing for my organization.";
    const textToSend = customMessage || defaultText;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToSend)}`;
  };

  return (
    <RFQContext.Provider value={{
      isSearchOpen,
      setIsSearchOpen,
      notification,
      showNotification,
      generateWhatsAppUrl
    }}>
      {children}
    </RFQContext.Provider>
  );
}

export function useRFQ() {
  return useContext(RFQContext);
}
