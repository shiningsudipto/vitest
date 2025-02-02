## Vitest - https://vitest.dev/guide

## React Testing Library - https://testing-library.com/docs/react-testing-library/intro

---

- query && get

---

## TS

tsConfig.json

- "types":["vitest/globals"]

setupTest.ts

- import "@testing-library/jest-dom";

## Script

```
"test": "vitest --run --reporter verbose",
```

> **--run** turns off watch mood
> **--reporter verbose** shows test details

## File and Folder

### File structure

- FileName.test.extension
- FileName.spec.extension

### Folder structure

```
Folder name > __test__
```

- If follow this folder structure then don't need to add .test with file name: fileName.extension
- All files of this **test** folder will be test
- Config:

```
vite.config.ts
test: {
    include: ['**/__test__/**/*.{ts,tsx}', '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
```

## What to test in React

- Component renders correctly
- Render with passed props
- State changes are properly reflected
- Component properly handles API calls and updates the UI
- Components reacts properly to events
