# 🔗 Aliases in Vite & TypeScript

To simplify imports and improve code readability, we use **aliases** in this project. Instead of using long relative paths like:

```ts
import Home from "../../pages/Home";
```

You can use an alias:

```ts
import Home from "@/pages/Home";
```

This makes the code cleaner and easier to maintain.

---

## ⚙️ **Where are Aliases Configured?**

Aliases are set up in the following files:

### **1️⃣ `vite.config.ts` (Main Configuration)**

In Vite, aliases are configured using the `resolve.alias` option:

```ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

### **2️⃣ `tsconfig.json` (For TypeScript Support)**

To ensure TypeScript recognizes the alias, add it to the `paths` field:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### **3️⃣ `vite.config.ts` (Vitest Section - For Testing)**

If using **Vitest** for testing, you need to ensure that aliases work in test environments:

```ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

---

## ✅ **Benefits of Using Aliases**

🔹 **Improves readability** → No more long relative imports (`../../../`).  
🔹 **Easier refactoring** → Moving files won't break imports.  
🔹 **Better organization** → Code structure is cleaner and more maintainable.  
🔹 **Compatible with TypeScript & Vitest** → Ensures smooth development and testing experience.

With these configurations, you can now use `@/` to reference the `src` folder in any part of your project! 🚀
