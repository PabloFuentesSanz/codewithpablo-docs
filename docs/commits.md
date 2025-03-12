# 📝 Commit Guidelines

We follow [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) to maintain a structured and meaningful commit history.

## ✅ Commit Message Format

Each commit message should follow this format:

```sh
<type>(<optional scope>): <short message>
```

### **🔹 Common Commit Types**

| Type       | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| `feat`     | Introduces a new feature                                         |
| `fix`      | Fixes a bug                                                      |
| `docs`     | Documentation updates                                            |
| `chore`    | Maintenance tasks (e.g., build scripts, dependencies)            |
| `test`     | Adding or modifying tests                                        |
| `refactor` | Code restructuring without changing functionality                |
| `style`    | Formatting changes, missing semi-colons, etc. (no logic changes) |
| `perf`     | Performance improvements                                         |
| `ci`       | Changes to CI/CD workflows                                       |

### **📌 Example Commit Messages**

```sh
git commit -m "feat(auth): add login functionality"
git commit -m "fix(cart): resolve issue with item removal"
git commit -m "docs(readme): update installation instructions"
git commit -m "chore(deps): update eslint dependencies"
```

### **💡 Best Practices**

- ✅ **Use imperative mood** → `fix issue` instead of `fixed issue`
- ✅ **Keep messages concise but descriptive**
- ✅ **Use scopes when relevant** → `(auth)`, `(cart)`, `(docs)`, etc.
- ✅ **Separate concerns into different commits**

By following **Conventional Commits**, we maintain a clear and meaningful commit history that improves collaboration and project tracking. 🚀
