# Bootstrap a React Native Hello World App

## Why

The initial reader-network screen needs a recognizable visual treatment in addition to its greeting. A green home background establishes that requested appearance while keeping the starter application intentionally small.

## What Changes

- Display the initial reader-network home screen on a solid green background.
- Extend the automated screen-rendering test to cover the green home background.

## Capabilities

### New Capabilities
- `reader-app-bootstrap`: Provides a runnable mobile application that displays the reader-network welcome screen.

### Modified Capabilities

- None.

## Impact

Updates the application entry point and its rendering test. It changes no APIs, dependencies, backend systems, contributor commands, or stored user data.

## Assumptions

- The existing exact greeting "Hello Egor!!!!!" remains on the initial screen.
- The entire visible home screen uses a solid green background; no particular brand shade was supplied.
- This visual update will not add product functionality.
