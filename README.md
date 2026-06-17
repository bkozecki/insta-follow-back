# Folo

Find out who doesn't follow you back on Instagram — free, private, no account needed.

Upload your Instagram data export and Folo tells you who doesn't follow you back, who you don't follow back, and who your mutual followers are. Everything runs in your browser. No data is uploaded, stored, or sent anywhere.

## Features

- Analyse followers vs following from your Instagram JSON export
- See three lists: not following back, you don't follow back, mutual followers
- Search within each list
- Export any list as CSV or TXT
- English and Polish UI
- Fully client-side — zero backend, zero tracking

## Getting started

```bash
pnpm install
pnpm dev
```

## How to get your Instagram data

Instagram → Account Center → Your information and permissions → Export your information → Download or transfer information → Select JSON format.

You need two files: `followers.json` and `following.json`.

## Tech stack

React 19 · TypeScript · Vite · react-i18next · CSS Modules

## License

MIT
