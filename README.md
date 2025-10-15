# Vendora Product Page

A modern, conversion-driven product page for Vendora — The Future-Ready Commerce Platform.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Framer Motion** for animations
- **Lucide React** for icons

## Features

- Professional corporate blue theme
- Smooth scroll animations
- Responsive design (mobile to desktop)
- Modular component architecture
- Type-safe with TypeScript
- Ready for API integration

## Project Structure

```
src/
├── components/       # UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── WhyChoose.tsx
│   ├── Capabilities.tsx
│   ├── Integrations.tsx
│   ├── IdealFor.tsx
│   ├── Glance.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts    # Static content (mock data)
├── store/
│   └── useProductPageStore.ts  # Zustand store
├── App.tsx
└── main.tsx
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Replacing with API Data

The content is currently managed via Zustand with mock data from `src/data/content.ts`. To integrate with a backend:

1. Update the `setContent` method in `useProductPageStore.ts`
2. Add API calls to fetch content
3. Replace static imports with dynamic data loading

## Design System

**Colors:**
- Primary: `#2563EB` (blue-600)
- Secondary: `#0EA5E9` (sky-500)
- Dark: `#1E3A8A` (blue-900)

**Typography:**
- Clear, readable headings
- Professional tone for business audiences

**Components:**
- Rounded-2xl borders
- Soft shadows with blue tints
- Gentle hover animations
- Blue gradient accents
