## Purpose

Provide a dependable, minimal mobile starting point so contributors can run the reader network locally and confirm that its first screen is available.

## ADDED Requirements

### Requirement: Runnable reader application
The project SHALL provide a runnable mobile application through its documented standard development workflow.

#### Scenario: Contributor starts the application
- **WHEN** a contributor installs the documented dependencies and runs the documented development command
- **THEN** the development workflow starts without application bundling errors and makes the application available on a supported development target

### Requirement: Reader-network welcome screen
The application SHALL display a single initial screen containing the text "Hello Egor" when it opens.

#### Scenario: Application opens successfully
- **WHEN** the application is launched on a supported development target
- **THEN** the initial screen visibly shows "Hello Egor"

### Requirement: Reproducible contributor setup
The project README SHALL state the prerequisites and exact commands to install dependencies, run automated checks, launch the application, and identify "Hello Egor" as the expected screen text.

#### Scenario: New contributor follows setup documentation
- **WHEN** a new contributor follows the README from a fresh checkout
- **THEN** they can install the project, run its documented automated checks, start the application, and know to expect "Hello Egor"
