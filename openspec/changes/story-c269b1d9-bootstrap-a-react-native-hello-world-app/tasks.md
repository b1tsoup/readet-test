## 1. Application Bootstrap

- [x] 1.1 Create the managed React Native TypeScript project metadata, entry configuration, and npm scripts for development, type checking, linting, and testing; verify the declared scripts target the project configuration files.
- [x] 1.2 Implement the single initial screen so it visibly renders `Welcome to Readet`; verify the application entry renders that screen without requiring authentication, navigation, data services, or a domain model.
- [x] 1.3 Add an automated rendering test for the initial screen and its `Welcome to Readet` message; verify the test is included in the configured `npm test` command (do not install dependencies or run commands in the agent sandbox).

## 2. Contributor Onboarding

- [x] 2.1 Replace the README with prerequisites and exact commands for dependency installation, type checking, linting, testing, and starting the Expo development server; verify it identifies `Welcome to Readet` as the expected visible result.
- [ ] 2.2 Reviewer: From a clean checkout, run the README's install, typecheck, lint, test, and development-server commands, then open the app in Expo Go or an emulator and confirm it bundles without errors and visibly displays `Welcome to Readet`.

## 3. Initial Greeting Update

- [x] 3.1 Replace the initial screen's `Welcome to Readet` text with `Hello Egor!!!!!`; verify the automated rendering test asserts the exact `Hello Egor!!!!!` text.
- [x] 3.2 Update the application rendering test to cover the `Hello Egor!!!!!` greeting; verify it is run by `npm test` (do not install dependencies or run commands in the agent sandbox).

## 4. Contributor Guidance

- [x] 4.1 Update the README's expected visible result from `Welcome to Readet` to `Hello Egor!!!!!`; verify the README's install, validation, and launch commands remain unchanged.
- [ ] 4.2 Reviewer: From a clean checkout, follow the README through launching the app in Expo Go or an emulator and confirm it bundles without errors and visibly displays `Hello Egor!!!!!`.

## 5. Green Home Screen

- [ ] 5.1 Set the initial home screen's visible background to solid green without adding product functionality; verify the existing screen still renders `Hello Egor!!!!!`.
- [ ] 5.2 Extend the automated screen-rendering test to assert the home screen's green background and `Hello Egor!!!!!` greeting; verify the test is included in `npm test` (do not install dependencies or run commands in the agent sandbox).

## 6. Visual Review

- [ ] 6.1 Reviewer: Launch the app in Expo Go or an emulator and confirm the full initial home screen has a solid green background while `Hello Egor!!!!!` remains visible.
