# Transitive dependencies for non-js

This project demonstrate how `js_library` does not allow for transitive dependency of non-js assets.

## Structure

- The project has three nested modules: `a`, `b` and `c`.
- Each module is packaged with a `js_library`.

You can run the project with:

```bash
bazel run //packages/a:run
```

The project fails because the file `c.txt` (a dependency of a dependency) is missing.