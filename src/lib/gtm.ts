// Google Tag Manager utility functions

// Extend Window interface to include gtag and dataLayer
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// GTM Configuration
export const GTM_ID = 'GTM-W6SNWF23'; // Replace with your actual GTM ID

// Initialize GTM (this is handled by the script in index.html)
export const initGTM = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
};

// Send GTM Events
export const sendGTMEvent = (eventData: {
  event: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
    console.log('GTM Event sent:', eventData);
  } else {
    console.warn('GTM not initialized or dataLayer not available');
  }
};

// Predefined events for your real estate project
export const GTMEvents = {
  // Contact Form Events
  submitContactForm: () => sendGTMEvent({
    event: 'submit_contact_form',
    event_category: 'engagement',
    event_label: 'contact_form',
  }),

  // Site Visit Events
  requestSiteVisit: () => sendGTMEvent({
    event: 'request_site_visit',
    event_category: 'engagement',
    event_label: 'site_visit',
  }),

  // Brochure Download Events
  downloadBrochure: () => sendGTMEvent({
    event: 'download_brochure',
    event_category: 'engagement',
    event_label: 'brochure',
  }),

  // Phone Click Events
  clickPhone: (phone: string) => sendGTMEvent({
    event: 'click_phone',
    event_category: 'contact',
    event_label: phone,
  }),

  // Email Click Events
  clickEmail: (email: string) => sendGTMEvent({
    event: 'click_email',
    event_category: 'contact',
    event_label: email,
  }),

  // Page View Events
  pageView: (pageName: string) => sendGTMEvent({
    event: 'page_view',
    page_title: pageName,
    page_location: window.location.href,
  }),

  // Custom Events
  customEvent: (eventName: string, category: string, label: string, value?: number) => sendGTMEvent({
    event: eventName,
    event_category: category,
    event_label: label,
    value: value,
  }),
};

// Enhanced event tracking with user properties
export const trackUserAction = (action: string, properties: Record<string, any> = {}) => {
  sendGTMEvent({
    event: 'user_action',
    action,
    ...properties,
    timestamp: new Date().toISOString(),
  });
};

// Track form interactions
export const trackFormInteraction = (formName: string, action: string, fieldName?: string) => {
  sendGTMEvent({
    event: 'form_interaction',
    form_name: formName,
    form_action: action,
    field_name: fieldName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  sendGTMEvent({
    event: 'button_click',
    button_name: buttonName,
    button_location: location,
  });
}; 