# 📂 Project Structure

The boilerplate follows a clean and scalable structure:

```sh
codewithpablo-boilerplate/
│── src/
│   ├── assets/          # Static assets (images, fonts, icons, etc.)
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layouts (e.g., header, sidebar)
│   ├── pages/           # Page-level components (e.g., Home, About)
│   ├── services/        # API calls and external services
│   ├── store/           # Global state management (if needed)
│   ├── utils/           # Utility functions/helpers
│   ├── styles/          # Global styles
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   ├── router.tsx       # React Router configuration (if used)
│   ├── setupTests.ts    # Vitest setup file
│── __tests__/           # Unit tests
│── public/              # Static files (index.html, favicon, etc.)
│── .husky/              # Husky hooks
│── .eslint.config.js        # ESLint config
│── .prettierrc.json          # Prettier config
│── tsconfig.json        # TypeScript config
│── vite.config.ts       # Vite config
│── README.md            # Documentation
│── package.json         # Dependencies and scripts
│── node_modules/        # Dependencies (ignored in Git)
│── ...                  #
```