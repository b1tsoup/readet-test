## 1. Application Bootstrap

- [x] 1.1 Create the managed React Native TypeScript project metadata, entry configuration, and npm scripts for development, type checking, linting, and testing; verify the declared scripts target the project configuration files.
- [x] 1.2 Implement the single initial screen so it visibly renders `Welcome to Readet`; verify the application entry renders that screen without requiring authentication, navigation, data services, or a domain model.
- [x] 1.3 Add an automated rendering test for the initial screen and its `Welcome to Readet` message; verify the test is included in the configured `npm test` command (do not install dependencies or run commands in the agent sandbox).

## 2. Contributor Onboarding

- [x] 2.1 Replace the README with prerequisites and exact commands for dependency installation, type checking, linting, testing, and starting the Expo development server; verify it identifies `Welcome to Readet` as the expected visible result.
- [ ] 2.2 Reviewer: From a clean checkout, run the README's install, typecheck, lint, test, and development-server commands, then open the app in Expo Go or an emulator and confirm it bundles without errors and visibly displays `Welcome to Readet`.

## 3. Initial Greeting Update

- [ ] 3.1 Replace the initial screen's `Welcome to Readet` text with `Hello Egor`; verify the automated rendering test asserts the exact `Hello Egor` text.
- [ ] 3.2 Update the application rendering test to cover the `Hello Egor` greeting; verify it is run by `npm test` (do not install dependencies or run commands in the agent sandbox).

## 4. Contributor Guidance

- [ ] 4.1 Update the README's expected visible result from `Welcome to Readet` to `Hello Egor`; verify the README's install, validation, and launch commands remain unchanged.
- [ ] 4.2 Reviewer: From a clean checkout, follow the README through launching the app in Expo Go or an emulator and confirm it bundles without errors and visibly displays `Hello Egor`.
