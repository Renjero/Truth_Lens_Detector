# TruthLens Frontend

React + Vite + Tailwind CSS frontend for the TruthLens news verification platform.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Source structure

```text
src/
├── components/
│   ├── common/                 # Shared UI components
│   ├── home/                   # Homepage sections
│   └── layout/                 # Navbar, footer and shared layout
├── features/
│   ├── auth/                   # Authentication UI and API functions
│   ├── detector/               # News detector UI and API functions
│   └── feed/                   # Article/feed UI and API functions
├── pages/                      # Page-level components
├── routes/                     # Route definitions
├── services/                   # Shared API helper
├── utils/                      # Small helper functions
├── App.jsx
├── main.jsx
└── index.css
```

## Integration status

- The original TruthLens design and demo interactions are preserved.
- The frontend is reorganized into page, layout and feature folders.
- `src/services/api.js` is a shared fetch helper for the TruthLens News backend.
- Authentication and detector service files are intentionally prepared but not connected yet. Before connecting them, confirm the real Authentication-Service routes, request fields, cookie/token behavior and response format. The detector backend routes are also not available yet.
- The current login and detector interactions remain demos; do not treat them as production authentication or real AI verification.

Copy `.env.example` to `.env` and update URLs when the backend services are ready.
