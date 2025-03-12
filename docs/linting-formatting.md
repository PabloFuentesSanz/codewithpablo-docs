# 🔧 Linting & Formatting

This boilerplate includes **ESLint** and **Prettier**.

## 🚀 Running ESLint
```sh
npm run lint
```

## ✨ Formatting with Prettier
```sh
npm run format
```

Make sure to run `npm run check` before pushing changes.

---

## ⚙️ ESLint Configuration

This project uses **ESLint** with TypeScript and Prettier integration to enforce coding standards and best practices.

### **📌 ESLint Plugins and Extensions:**
- **`@eslint/js`** – Base ESLint rules for JavaScript.
- **`typescript-eslint`** – Rules specific to TypeScript.
- **`eslint-plugin-react-hooks`** – Ensures proper usage of React hooks.
- **`eslint-plugin-react-refresh`** – Helps detect issues with React Fast Refresh.
- **`eslint-plugin-prettier`** – Runs Prettier as an ESLint rule.
- **`eslint-config-prettier`** – Disables ESLint rules que puedan interferir con Prettier.

### **🔍 ESLint Rules**
The following key rules are enforced:
- ✅ **React Hooks Best Practices** (`react-hooks/recommended`)
- ✅ **React Refresh Only Export Components** (`react-refresh/only-export-components` – Warns for non-component exports)
- ✅ **Prettier Formatting Enforcement** (`prettier/prettier` – Ensures code follows Prettier formatting rules)
- ✅ **Strict TypeScript Linting**:
  - `strict: true` (TypeScript strict mode)
  - `noUnusedLocals: true` (Prevents unused variables)
  - `noUnusedParameters: true` (Avoids unused function parameters)
  - `noFallthroughCasesInSwitch: true` (Prevents fallthrough cases in switch statements)
  - `noUncheckedSideEffectImports: true` (Avoids unchecked side-effect imports)

---

## 🎨 Prettier Configuration

Prettier is used to enforce consistent code formatting. The default configuration is:
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2,
  "semi": false
}
```
### **🔍 Prettier Rules Explained:**
- **`singleQuote: true`** → Uses single quotes instead of double quotes.
- **`trailingComma: all`** → Adds trailing commas where valid.
- **`printWidth: 80`** → Wraps lines at 80 characters.
- **`tabWidth: 2`** → Uses 2 spaces per indentation level.
- **`semi: false`** → No semicolons at the end of statements.

---

By using **ESLint + Prettier**, we ensure a well-structured, readable, and maintainable codebase! 🚀

