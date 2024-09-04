# CS191/192 Blog

## Development

This project uses [`pnpm`](https://pnpm.io/) as the package manager for [Node.js](https://nodejs.org/en). To install, see the instructions written [here](https://pnpm.io/installation).

To get started, it is recommended that you first fork this project then clone the fork rather than directly cloning this repository.

After cloning the project, install the project dependencies with the following command in the project directory:

```bash
# Install the project dependencies.
pnpm install
```

To start a development server run either of the following commands in the project directory:

```bash
# Same as the file watcher, but also starts a developer server at `localhost:5173` by default.
pnpm dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Before pushing or submitting a pull request to the repository, be sure to run the formatters and linters. This is done to ensure that the codebase remains clean and consistent.

```bash
# Fix code formatting with Prettier.
pnpm format

# Checks code with Prettier & ESLint.
pnpm lint
```

## Building

To build/create a production version of the app, run:

```bash
# Build and optimize the project. Static assets are saved to `build/` use this when deploying.
pnpm build
```

Afterwards, preview the app with:

```bash
# Locally preview the production website after building.
pnpm preview
```
