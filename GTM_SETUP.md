# Google Tag Manager Setup Instructions

## 📊 GTM Integration Complete!

Your project now has Google Tag Manager (GTM) fully integrated. Here's what's been set up:

### ✅ What's Already Configured:

1. **GTM Scripts Added** (in `index.html`):
   - GTM Container ID: `GTM-W6SNWF23`
   - Both `<head>` and `<noscript>` tags are properly placed

2. **GTM Utility Library** (`src/lib/gtm.ts`):
   - Event tracking functions
   - TypeScript support
   - Pre-built events for real estate

3. **ContactModal Integration**:
   - Form submissions trigger GTM events
   - Automatic tracking of form completions

### 🎯 Available Events:

The following events are automatically tracked:

- `submit_contact_form` - When contact form is submitted
- `request_site_visit` - Site visit requests  
- `download_brochure` - Brochure downloads
- `click_phone` - Phone number clicks
- `click_email` - Email clicks
- `page_view` - Page views

### 🚀 How to Use:

```typescript
import { GTMEvents, trackButtonClick } from '@/lib/gtm';

// Track predefined events
GTMEvents.submitContactForm();
GTMEvents.requestSiteVisit();
GTMEvents.downloadBrochure();

// Track custom button clicks
trackButtonClick('CTA Button', 'Hero Section');

// Track phone/email clicks
GTMEvents.clickPhone('9264296043');
GTMEvents.clickEmail('info@motiinfraheights.com');
```

### 🔧 Setup in GTM Dashboard:

1. **Create Account**: Go to [tagmanager.google.com](https://tagmanager.google.com)
2. **Container ID**: Use `GTM-W6SNWF23` (already configured)
3. **Set up Google Analytics 4**: 
   - Create GA4 tag
   - Set trigger for all pages
4. **Create Custom Events**:
   - Event Name: `submit_contact_form`
   - Category: `engagement`
   - Label: `contact_form`

### 📈 Recommended GTM Tags:

1. **Google Analytics 4 Configuration**
2. **Contact Form Submission** (Event: `submit_contact_form`)
3. **Site Visit Request** (Event: `request_site_visit`)
4. **Brochure Download** (Event: `download_brochure`)
5. **Phone Click Tracking** (Event: `click_phone`)
6. **Conversion Tracking** for Google Ads/Facebook

### 🛠️ Environment Variables:

Create a `.env` file with:
```bash
VITE_GTM_ID=GTM-XXXXXX
VITE_API_BASE_URL=https://theroguepixxel.com/waapi
VITE_PROJECT_UID=moti_infraheights
```

### 🔍 Testing:

1. **GTM Preview Mode**: Use GTM's preview feature
2. **Browser Console**: Events are logged to console
3. **Google Analytics Real-time**: Check real-time reports

### 🚨 Important Notes:

- The GTM container `GTM-XXXXXXX` needs to be claimed in your GTM account
- Replace with your actual GTM ID if different
- Make sure to set up conversion goals in Google Analytics
- Test thoroughly before going live

### 🎨 Future Enhancements:

- Enhanced E-commerce tracking for property sales
- Scroll depth tracking
- Video engagement tracking
- Heat map integration
- A/B testing capabilities

Your GTM setup is now complete and ready for advanced marketing analytics! 🎉 