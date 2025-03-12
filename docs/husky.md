# 🛠 Husky Configuration

This project uses **Husky** to enforce pre-commit and pre-push hooks, ensuring that only properly formatted and linted code is committed and pushed.

## **📌 Husky Hooks Explained:**

### **🔹 Commit Message Validation (`commit-msg` hook)**
This hook ensures that commit messages follow the conventional commit format by running `commitlint`.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx --no -- commitlint --edit "$1"
```

✅ **What it does:**
- Ensures commit messages follow [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/).
- Prevents commits con mensajes inválidos.

### **🔹 Pre-Commit Hook (`pre-commit` hook)**
This hook runs `npm run check` before allowing a commit to proceed.

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npm run check
```

✅ **What it does:**
- Runs **ESLint**, **Prettier**, and any additional checks before committing.
- Prevents commits si el código no pasa las validaciones.

### **🔹 Pre-Push Hook (`pre-push` hook)**
This hook runs the test suite before allowing a push.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run test -- --run
```

✅ **What it does:**
- Ensures that **all tests pass** before pushing changes.
- Prevents pushing código que pueda romper la aplicación.

---

By using **ESLint + Prettier + Husky**, we ensure a well-structured, readable, and maintainable codebase while enforcing best practices! 🚀

