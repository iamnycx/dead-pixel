# dead-pixel-icons

Animated pixel icon library for React, designed for modern UIs. Each icon is crafted with pixel-perfect precision and supports multiple visual styles.

## Features

- Animated pixel-style SVG icons
- Supports `stroke`, `fill`, and `duotone` types
- Zero dependencies (except React and Motion)
- Tree-shakable, ESM & CJS support
- TypeScript types included

## Installation

```sh
bun add dead-pixel-icons
# or
npm install dead-pixel-icons
# or
yarn add dead-pixel-icons
# or
pnpm add dead-pixel-icons
```

## Usage

```tsx
import { HeartIcon, MoonIcon, SunIcon, SearchIcon } from "dead-pixel-icons";

function Example() {
  return (
    <div>
      <HeartIcon type="stroke" />
      <MoonIcon type="fill" />
      <SunIcon type="duotone" />
      <SearchIcon />
    </div>
  );
}
```

### Icon Props

- `type`: `'stroke' | 'fill' | 'duotone'` (optional, default: `'stroke'`)

## Available Icons

- `HeartIcon`
- `MoonIcon`
- `SunIcon`
- `SearchIcon`

## Development

- Build: `bun run build` (uses tsup)
- Source: `src/`
- Output: `dist/`

## License

MIT

---

Made with ❤️ by [nycx](https://nycx.is-a.dev/)
