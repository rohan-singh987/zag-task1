This is a [Next.js](https://nextjs.org/) project

## Installation
To set up this project on your local machine, follow these steps:

```
git clone https://github.com/rohan-singh987/zag-task1

# Navigate to the project directory:

# Install dependencies:
npm install
yarn add

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Libraries:
1. Redux-toolkit
2. antdesign
3. Tailwindcss

## Folder Structure
- `src/`: Source code
  - `components/`: Header, Footer
  - `app/`:
      1. Cart Page
      2. Discover Page
      3. Product Page (dynamic: render details based on product id)
  - `redux/`:
      1. Store
      2. Provider
      3. CartSlice
      4. ProductSlice
- `public/`: Static assets
