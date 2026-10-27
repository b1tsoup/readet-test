## MODIFIED Requirements

### Requirement: The home page is empty
The home page SHALL display a “Hello world” heading and a “Click me” button, and SHALL contain no unrelated starter or demo content.

#### Scenario: Open the new project's home page
- **WHEN** a visitor opens `/`
- **THEN** the page displays a “Hello world” heading styled at the 5xl text size and a button labeled “Click me”, with no unrelated starter or demo content

#### Scenario: Use the home page button
- **WHEN** a visitor focuses and activates the “Click me” button
- **THEN** the button is operable as a button and retains its “Click me” label
