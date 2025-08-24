# Bikuafor App Screenshot Guide

## Overview

This guide details the specific app screenshots needed for the BiMakas landing page. Each screenshot should showcase a key part of the customer journey.

## Screenshot Requirements

### 1. Home & Discovery Flow

**File:** `public/images/screens/home-discovery.png`
**Screens to capture:** Customer Home → Search Results → Barber Profile

**Content to show:**

- **Home Screen (`/c/home`):**
    - Header with location and search
    - Nearby barbers section with photos
    - Service categories (Saç, Sakal, Güzellik)
    - Featured/recommended barbers
    - Clear "Book Now" buttons

- **Search Results (`/c/results`):**
    - Filter options (distance, price, rating)
    - List of barbers with photos, ratings, distance
    - Map view toggle
    - Sort options

- **Barber Profile (`/c/profile/:id`):**
    - Barber photo and name
    - Rating and reviews count
    - Services offered with prices
    - Photo gallery/portfolio
    - "Book Appointment" CTA

**Design Notes:**

- Use coral (#FF6B6B) for primary buttons and highlights
- Show realistic Turkish names and locations
- Include 4.5-5 star ratings for social proof
- Display diverse barber profiles

### 2. Booking & Checkout Flow

**File:** `public/images/screens/booking-checkout.png`
**Screens to capture:** Services Selection → Checkout

**Content to show:**

- **Services Screen (`/c/services`):**
    - Service categories (Saç Kesimi, Sakal, Şekillendirme)
    - Price list with duration estimates
    - Add-on services (Yıkama, Masaj, etc.)
    - Selected services summary

- **Checkout Screen (`/c/checkout`):**
    - Selected barber and services summary
    - Date and time selection
    - Location confirmation (home/office address)
    - Payment method selection
    - Total price breakdown
    - "Confirm Booking" button

**Design Notes:**

- Show reasonable pricing (₺50-150 range)
- Include service duration (30-60 min)
- Display multiple payment options (card, cash, digital wallet)
- Show booking for convenient time slots

### 3. Live Tracking Flow

**File:** `public/images/screens/live-tracking.png`
**Screens to capture:** Tracking Screen

**Content to show:**

- **Tracking Screen (`/c/tracking/:id`):**
    - Live map with barber's location
    - Barber photo and contact info
    - ETA countdown (e.g., "15 dakika kaldı")
    - Status updates ("Yolda", "Kapınızda")
    - Chat/call buttons
    - Trip progress indicator

**Design Notes:**

- Use real Istanbul map locations
- Show barber moving toward customer location
- Include status messages in Turkish
- Show clear ETA and progress indicators

### 4. Service & Review Flow

**File:** `public/images/screens/service-review.png`
**Screens to capture:** In-Service → Review & Rating

**Content to show:**

- **In-Service Screen (`/b/inservice/:id`):**
    - Service in progress indicator
    - Timer showing service duration
    - Barber and customer info
    - "Service Complete" button

- **Review Screen (post-service):**
    - 5-star rating interface
    - Review text input
    - Photo upload for before/after
    - Tip option
    - "Rate & Finish" button

- **Booking History (`/c/bookings`):**
    - Completed booking card
    - Service details and total paid
    - "Book Again" option
    - Receipt download

**Design Notes:**

- Show positive experience (4-5 stars)
- Include before/after photos
- Display completed service with receipt
- Show "Book Again" for repeat business

## Technical Specifications

### Image Requirements

- **Resolution:** 375x812px (iPhone X/11/12 standard)
- **Format:** PNG with transparency
- **Quality:** High resolution for retina displays
- **Orientation:** Portrait mobile view
- **Background:** Use actual app background colors

### Branding Guidelines

- **Primary Color:** Coral #FF6B6B
- **Secondary Color:** Ivory #FDFCFB
- **Accent Colors:** Dark grays for text, light grays for backgrounds
- **Typography:** Clean, modern sans-serif (similar to app's actual font)
- **Icons:** Consistent with app's icon style

### Content Guidelines

- **Language:** Turkish for all text content
- **Names:** Use realistic Turkish names for barbers and customers
- **Locations:** Istanbul neighborhoods (Kadıköy, Beşiktaş, Şişli, etc.)
- **Pricing:** Realistic service prices in Turkish Lira (₺)
- **Ratings:** High ratings (4.2-4.9 stars) for social proof
- **Times:** Show convenient booking times (evening, weekend slots)

## Screenshot Capture Process

### For Each Screen:

1. **Setup:** Use a clean device with full battery, good signal
2. **Content:** Populate with realistic Turkish content
3. **Timing:** Capture during optimal lighting for screenshots
4. **Consistency:** Maintain consistent status bar appearance
5. **Quality:** Use native screenshot tools for best quality

### Post-Processing:

1. **Crop:** Remove any unwanted UI elements
2. **Enhance:** Adjust brightness/contrast if needed
3. **Optimize:** Compress for web while maintaining quality
4. **Verify:** Ensure all text is readable at landing page display size

## Integration Notes

### AppScreens Component

The screenshots will be displayed in an interactive carousel that shows:

- Customer discovery and selection process
- Booking and payment flow
- Live tracking experience
- Service completion and review

### Landing Page Context

These screenshots demonstrate the complete customer journey and serve as visual proof of the app's capabilities to potential users and barber partners.

### Call-to-Action Alignment

Each screenshot should support the landing page's conversion goals:

- Show ease of use for customer acquisition
- Display professional features for barber onboarding
- Demonstrate trust and safety features
- Highlight convenience and time-saving benefits
