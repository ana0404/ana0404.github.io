# Anamika Dashore - Portfolio

A modern, technical portfolio website built with React, TypeScript, and Tailwind CSS.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`

## Google Analytics

1. Create a `.env` file at the project root (do not commit it) and set your Measurement ID:

```bash
# .env
VITE_GA_ID=G-XXXXXXXXXX
```

2. The app automatically initializes Google Analytics on load and sends pageviews. To track custom events from your components, import `trackEvent` from `src/hooks/useAnalytics`:

```ts
import { trackEvent } from './hooks/useAnalytics';

trackEvent('signup', { method: 'newsletter' });
```

3. For Vite deployments, ensure the `VITE_GA_ID` environment variable is set in your deployment provider's build environment.
