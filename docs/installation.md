# 📦 Installation Guide

This boilerplate provides multiple installation methods depending on your preferred workflow.

---

## 🚀 **Using NPM (Recommended)**

The easiest way to create a new project using this boilerplate is via **NPM**:

```sh
npm create codewithpablo my-new-project
```

🔹 **What this does:**

- Creates a new project folder named `my-new-project`.
- Downloads the latest version of the boilerplate.
- Sets up the required dependencies automatically.

Once the installation is complete, navigate to your new project directory:

```sh
cd my-new-project
```

Then, install dependencies and start the development server:

```sh
npm install
npm run dev
```

---

## 🔹 **Using NPX** (Alternative Method)

If you don’t want to globally install the `create-codewithpablo` package, you can use **NPX**:

```sh
npx create-codewithpablo my-new-project
```

🔹 **What this does:**

- Runs the latest version of `create-codewithpablo` without installing it globally.
- Sets up the project exactly like the NPM method.

Then, proceed with:

```sh
cd my-new-project
npm install
npm run dev
```

---

## 🔹 **Cloning the Repository (For Full Customization)**

If you want full control over the boilerplate and modify it before using it, you can clone the repository manually:

```sh
git clone https://github.com/PabloFuentesSanz/codewithpablo-boilerplate.git
cd codewithpablo-boilerplate
npm install
```

🔹 **Why use this method?**

- Ideal if you plan to modify the boilerplate itself.
- Gives you direct access to the source code.

To start the development server after cloning:

```sh
npm run dev
```

---

## ✅ **Next Steps**

After installation, check out these commands:

- **Run the development server**:
  ```sh
  npm run dev
  ```
- **Run ESLint checks**:
  ```sh
  npm run lint
  ```
- **Format code with Prettier**:
  ```sh
  npm run format
  ```
- **Run tests**:
  ```sh
  npm run test
  ```

Now you're ready to start coding with **CodeWithPablo Boilerplate**! 🚀
