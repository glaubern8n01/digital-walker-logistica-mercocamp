/**
 * Helper for Meta Pixel tracking
 * These functions can be updated to include real window.fbq calls later.
 */

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    console.log(`[Tracking] Event: ${eventName}`, params);

    if (typeof window !== 'undefined' && (window as any).fbq) {
        const standardEvents = ['PageView', 'Lead', 'Schedule', 'Contact'];
        if (standardEvents.includes(eventName)) {
            (window as any).fbq('track', eventName, params);
        } else {
            (window as any).fbq('trackCustom', eventName, params);
        }
    } else {
        console.warn(`[Tracking] Meta Pixel (fbq) not found for event: ${eventName}`);
    }
};

export const TRACKING_EVENTS = {
    PAGE_VIEW: 'PageView',
    QUIZ_STARTED: 'QuizStarted',
    QUIZ_COMPLETED: 'QuizCompleted',
    LEAD_SUBMITTED: 'LeadSubmitted',
    WHATSAPP_CLICKED: 'WhatsAppClicked',
    SCHEDULE_CLICKED: 'ScheduleClicked',
};
