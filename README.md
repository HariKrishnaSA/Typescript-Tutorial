# TypeScript Tutorial 🚀

A hands-on, step-by-step tutorial repository designed to guide you from TypeScript fundamentals to advanced type-system patterns and modern Node.js/browser workflows.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Install Node Dependencies](#step-2-install-node-dependencies)
  - [Step 3: Verify TypeScript Compiler](#step-3-verify-typescript-compiler)
- [TypeScript Configuration (`tsconfig.json`)](#typescript-configuration-tsconfigjson)
- [Project Directory Structure](#project-directory-structure)
- [Available Scripts & How to Run](#available-scripts--how-to-run)
- [Tutorial Syllabus](#tutorial-syllabus)
- [Troubleshooting & FAQs](#troubleshooting--faqs)
- [License](#license)

---

## 📖 Overview

This repository provides clear, runnable code examples demonstrating:
- Core primitive types, interfaces, and type aliases.
- Generics, utility types, and union/intersection types.
- Modern TypeScript configuration (`tsconfig.json`) best practices.
- Live execution and development using `tsx` or `ts-node`.

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or higher (LTS recommended)
- **npm** (bundled with Node) or **pnpm** / **yarn**
- **Git**
- Recommended Editor: **VS Code** with the official TypeScript language support.

To verify your installation:
```bash
node -v
npm -v
```

---

## 🛠️ Project Setup

Follow these steps sequentially to set up and run the code locally.

### Step 1: Clone the Repository

```bash
git clone https://github.com/HariKrishnaSA/Typescript-Tutorial.git
cd Typescript-Tutorial
```

### Step 2: Install Node Dependencies

Install all necessary development dependencies (including the TypeScript compiler, type definitions, and live-runner tools):

```bash
npm install
```

> **Note:** If starting from a completely blank project, you can initialize and install these packages via:
> ```bash
> npm init -y
> npm install -D typescript tsx @types/node rimraf
> ```

### Step 3: Verify TypeScript Compiler

Check that the project TypeScript compiler is accessible:

```bash
npx tsc --version
```

---

## 🔧 TypeScript Configuration (`tsconfig.json`)

The project uses a structured `tsconfig.json` configuration designed for clean separation between source code (`src/`) and compiled JavaScript output (`dist/`).

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "ES2022",                          /* Specify ECMAScript target version */
    "module": "NodeNext",                        /* Specify module code generation */
    "moduleResolution": "NodeNext",              /* Resolve modules using modern Node.js resolution */
    "lib": ["ES2022"],                           /* Specify library files to include in compilation */

    /* Emit */
    "outDir": "./dist",                          /* Redirect output structure to the directory */
    "rootDir": "./src",                          /* Specify the root directory of input files */
    "sourceMap": true,                           /* Create source map files for debugging */
    "removeComments": false,                     /* Retain comments in output */
    
    /* Strict Type-Checking Options */
    "strict": true,                              /* Enable all strict type-checking options */
    "noImplicitAny": true,                       /* Enable error reporting for expressions with implied 'any' */
    "strictNullChecks": true,                    /* Ensure null and undefined are handled explicitly */
    "strictFunctionTypes": true,                 /* Ensure strict checking of function signatures */
    
    /* Additional Checks */
    "noUnusedLocals": true,                      /* Report errors on unused local variables */
    "noUnusedParameters": true,                  /* Report errors on unused function parameters */
    "noImplicitReturns": true,                   /* Report error when not all code paths return a value */
    "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch */
    
    /* Interop Constraints */
    "esModuleInterop": true,                     /* Enables emit interoperability between CommonJS and ES Modules */
    "forceConsistentCasingInFileNames": true,     /* Ensure that casing is correct in imports */
    "skipLibCheck": true                         /* Skip type checking of declaration files (.d.ts) */
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 📂 Project Directory Structure

```text
Typescript-Tutorial/
├── src/
│   ├── 01-basics/
│   │   ├── primitives.ts
│   │   ├── arrays-tuples.ts
│   │   └── enums.ts
│   ├── 02-interfaces-types/
│   │   ├── interfaces.ts
│   │   └── type-aliases.ts
│   ├── 03-functions/
│   │   ├── signatures.ts
│   │   └── overloads.ts
│   ├── 04-classes-oop/
│   │   ├── classes.ts
│   │   └── access-modifiers.ts
│   ├── 05-generics/
│   │   ├── generic-functions.ts
│   │   └── generic-interfaces.ts
│   ├── 06-advanced/
│   │   ├── union-intersection.ts
│   │   ├── type-guards.ts
│   │   └── utility-types.ts
│   └── index.ts
├── dist/                     # Auto-generated compiled JavaScript code
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Available Scripts & How to Run

Add or verify the following scripts in your `package.json`:

```json
"scripts": {
  "build": "tsc",
  "build:clean": "rimraf dist && tsc",
  "watch": "tsc --watch",
  "start": "node dist/index.js",
  "dev": "tsx watch src/index.ts",
  "type-check": "tsc --noEmit"
}
```

### Running Commands:

- **Run in Development Mode (Live reload, no manual build step):**
  ```bash
  npm run dev
  ```

- **Compile to JavaScript:**
  ```bash
  npm run build
  ```

- **Run the Compiled JavaScript:**
  ```bash
  npm start
  ```

- **Watch Mode (Auto-compiles on file save):**
  ```bash
  npm run watch
  ```

- **Type Check Without Emitting Files:**
  ```bash
  npm run type-check
  ```

- **Run Any Specific Lesson File Directly:**
  ```bash
  npx tsx src/05-generics/generic-functions.ts
  ```

---

## 📚 Tutorial Syllabus

| Chapter | Topic | Highlights |
|---|---|---|
| **01** | Basic Types | `string`, `number`, `boolean`, `any`, `unknown`, `never`, Tuples |
| **02** | Interfaces & Aliases | Shape definitions, optional fields `?`, `readonly`, extending interfaces |
| **03** | Functions | Parameter typing, return types, default values, rest params, overloads |
| **04** | OOP in TypeScript | `public`, `private`, `protected`, `implements`, `abstract` classes |
| **05** | Generics | Generic types `<T>`, constraints (`extends`), default generic types |
| **06** | Advanced Types | `Partial`, `Required`, `Pick`, `Omit`, `Record`, Conditional Types |

---

## ❓ Troubleshooting & FAQs

### 1. `Cannot find module` or import errors with `.ts` files:
Ensure your `tsconfig.json` has:
```json
"moduleResolution": "NodeNext"
```
When using native ESM with modern Node.js, imports typically omit the extension or use `.js` relative imports as resolved by the build output.

### 2. Variables clashing across different files:
If two files in `src/` declare the same variable name and throw `Cannot redeclare block-scoped variable`, ensure the file is treated as a module by adding:
```typescript
export {};
```
at the top or bottom of your practice files.

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).
