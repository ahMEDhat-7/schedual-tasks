# Scheduled Tasks

A backend service for managing and executing scheduled tasks using cron expressions. Built with TypeScript, Node.js, and node-cron.

## Features

- Schedule tasks using cron expressions
- Validate cron expressions
- File system operations for backups
- TypeScript support with strict type checking
- Development and production modes

## Installation

```bash
pnpm install
```

## Usage

### Development

Run the service in development mode with hot-reloading:

```bash
pnpm dev
```

### Build

Compile TypeScript to JavaScript:

```bash
pnpm build
```

### Production

Start the compiled application:

```bash
pnpm start
```

## Project Structure

```
src/
  index.ts          # Main application entry point
dist/               # Compiled JavaScript output
package.json        # Project dependencies and scripts
tsconfig.json       # TypeScript configuration
```

## Dependencies

- **node-cron**: `^4.2.1` - Task scheduling library

## Dev Dependencies

- **typescript**: `^5.7.0` - TypeScript compiler
- **tsx**: `^4.19.0` - TypeScript execution engine
- **@types/node**: `^22.0.0` - Node.js type definitions

## Configuration

The cron expression format uses the standard 6-field format:
```
* * * * * *
┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │ │
│ │ │ │ │ └─── Day of week (0-7, Sunday=0 or 7)
│ │ │ │ └───── Month (1-12)
│ │ │ └─────── Day of month (1-31)
│ │ └───────── Hour (0-23)
│ └─────────── Minute (0-59)
└───────────── Second (0-59)
```

## License

ISC 
