# slugid-convert

A basic frontend-only web service for encoding and decoding slugIDs using [taskcluster/slugid](https://github.com/taskcluster/slugid).

## Features

- **UUID to SlugID**: Convert standard UUIDs to URL-safe base64 slugs
- **SlugID to UUID**: Convert slugs back to standard UUID format
- **Generate SlugIDs**: Create new random slugs using either `v4()` (max entropy) or `nice()` (command-line safe)

## What is a SlugID?

SlugIDs are URL-safe base64 encoded v4 UUIDs, compressed from 36 characters to just 22 characters. They conform to the pattern `[A-Za-z0-9_-]{22}`.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts a development server at `http://localhost:5173`.

### Build

```bash
npm run build
```

This creates a production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- [Vite](https://vitejs.dev/) - Build tool
- [slugid](https://github.com/taskcluster/slugid) - UUID to slug conversion library

## License

MIT