# Implementation Plan - ZENITH Login & Dashboard Enhancements

## 1. Login Component (`src/components/Login.tsx`)
- **UI Structure**: Use shadcn `Tabs` to switch between 'Login' and 'Sign Up'.
- **Login Flow**:
  - Fields: Email/Phone (shadcn `Input`), Password (shadcn `Input` type="password").
  - Buttons: 'Authenticate' (Primary), 'Enroll Biometrics' (Icon/Secondary).
  - Use `Fingerprint` animation from original for biometric simulation.
- **Sign Up Flow**:
  - Fields: Email/Phone, Password, Confirm Password.
  - Step 1: User enters details and clicks 'Sign Up'.
  - Step 2: Show OTP Verification (shadcn `InputOTP`) simulated after sign-up click.
  - Step 3: Success message and redirect to Login or auto-login.
- **Visuals**: Glassmorphic card design with backdrop-blur-xl, border-white/10, and cyan/blue gradients.
- **Feedback**: Use `sonner` for error messages and success notifications.

## 2. Dashboard Component (`src/components/Dashboard.tsx`)
- **Central Hub**: Enhance the ZENITH logo with complex CSS/Tailwind layers, pulsing glows, and rotating decorative rings.
- **Orbital Animation**: 
  - Use `framer-motion` to animate module buttons in continuous circular paths on desktop.
  - Use different `duration`, `radius`, and `delay` for each module to create a dynamic, celestial feel.
  - Mobile: Maintain responsive grid but add subtle floating animations to each card.
- **Theme**: Integrate the generated futuristic background image or enhance existing gradients for a "deep tech" aesthetic.
- **Interactivity**: Modules remain clickable and navigate to their respective views via `onSelectModule`.

## 3. Tech Stack Consistency
- Maintain React 19 standards.
- Use `lucide-react` for all icons.
- Use `framer-motion` for all transitions and orbital paths.
- Ensure full accessibility (aria-labels, focus states).
