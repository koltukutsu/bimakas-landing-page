# Bikuafor App Screens Documentation

## Overview

Bikuafor is a dual-sided marketplace app connecting customers with professional barbers for on-demand services. The app supports two user types: **Customers** (seeking barber services) and **Barbers** (providing services).

## Customer Journey Flow

### 1. Authentication & Role Selection

- **Role Gate Screen** (`/role`) - Choose between Customer or Barber
- **Phone Input Screen** (`/login`) - Enter phone number for authentication
- **OTP Verification Screen** (`/otp-verification`) - Verify phone with OTP code

### 2. Customer Onboarding Flow

The onboarding process guides new customers through essential setup:

1. **Gender Selection** (`/onboarding/customer/gender`) - Choose gender for personalized services
2. **Service Preferences** (`/onboarding/customer/services`) - Select preferred barber services
3. **Location Setup** (`/onboarding/customer/location`) - Set primary location for services
4. **Payment Setup** (`/onboarding/customer/payment`) - Add payment methods
5. **Profile Completion** (`/onboarding/customer/profile`) - Complete personal profile
6. **Onboarding Success** (`/onboarding/success`) - Welcome confirmation
7. **Mock Booking** (`/onboarding/mock-booking/:barberId`) - Tutorial booking experience
8. **Mock Tracking** (`/onboarding/mock-tracking`) - Tutorial tracking experience

### 3. Customer Main App Flow

**Core Navigation (CustomerShell):**

- **Home Screen** (`/c/home`) - Main dashboard with nearby barbers and services
- **Search/Results** (`/c/search`, `/c/results`) - Search and browse available barbers
- **Bookings** (`/c/bookings`) - View current and past bookings
- **Profile** (`/c/profile`) - Customer profile and settings

**Booking Flow:**

1. **Services Screen** (`/c/services`) - Browse available services and pricing
2. **Barber Profile** (`/c/profile/:id`) - View barber details, reviews, portfolio
3. **Location Picker** (`/c/location-picker`) - Set service location
4. **Checkout Screen** (`/c/checkout`) - Confirm booking and payment
5. **Tracking Screen** (`/c/tracking/:id`) - Real-time barber tracking during service

**Support Screens:**

- **Payment Methods** (`/c/payment-methods`) - Manage payment options

### 4. Barber Onboarding & Main Flow

**Barber Onboarding:**

- **Business Setup** (`/onboarding/barber/business`) - Professional profile and services setup

**Core Navigation (BarberShell):**

- **Requests Screen** (`/b/requests`) - View and accept service requests
- **Jobs Screen** (`/b/jobs`) - Active and scheduled jobs
- **Earnings Screen** (`/b/earnings`) - Income tracking and analytics
- **Profile Screen** (`/b/profile`) - Barber profile management

**Service Flow:**

1. **Navigate Screen** (`/b/navigate/:id`) - GPS navigation to customer location
2. **In-Service Screen** (`/b/inservice/:id`) - Service delivery interface
3. **Location Setup** (`/b/location-setup`) - Set service areas
4. **Bank Accounts** (`/b/bank-accounts`) - Payment/withdrawal settings

## Key Features by Screen Category

### Authentication & Onboarding

- Smooth phone-based authentication
- Role-based user flow (Customer vs Barber)
- Progressive onboarding with tutorial experiences
- Location permissions and setup
- Payment method integration

### Customer Experience

- Location-based barber discovery
- Service browsing and selection
- Real-time booking and tracking
- In-app payments and receipt management
- Rating and review system

### Barber Experience

- Request management and acceptance
- GPS navigation to customers
- Service delivery tracking
- Earnings and analytics dashboard
- Professional profile management

## Landing Page Integration Strategy

### Hero Section

- Showcase the **Home Screen** mockup as the main hero image
- Highlight the core value proposition: "Professional barber services at your location"

### App Screens Showcase

Focus on the customer journey screens that demonstrate value:

1. **Discovery Flow**: Home → Search/Results → Barber Profile
2. **Booking Flow**: Services → Checkout → Confirmation
3. **Service Flow**: Tracking → In-Service → Completion
4. **Management**: Bookings History → Payment Methods

### Key Screens for Screenshots

**Priority 1 (Must Have):**

- Customer Home Screen - shows nearby barbers and services
- Barber Profile Screen - displays professional details and reviews
- Checkout Screen - booking confirmation and payment
- Tracking Screen - real-time barber location during service

**Priority 2 (Nice to Have):**

- Services Screen - available services and pricing
- Search Results - barber discovery interface
- Bookings History - past and upcoming appointments
- Barber Requests - barber view of incoming requests

### Design Notes for Screenshots

- Use realistic but branded content (Bikuafor branding)
- Show diverse barber profiles and services
- Include positive ratings and reviews
- Display clean, modern UI with coral (#FF6B6B) accent colors
- Show location-based features (maps, nearby services)
- Include payment and security elements for trust
