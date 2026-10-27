## MODIFIED Requirements

### Requirement: The home page is empty
The home page SHALL display a “Hello world” level-one heading styled at the 5xl text size and a button labeled exactly “click me”, and SHALL contain no unrelated starter or demo content.

#### Scenario: Open the new project's home page
- **WHEN** a visitor opens `/`
- **THEN** the page displays a “Hello world” level-one heading styled at the 5xl text size and a button labeled exactly “click me”, with no unrelated starter or demo content

#### Scenario: Use the home page button
- **WHEN** a visitor focuses and activates the “click me” button
- **THEN** the button is operable as a button and retains its “click me” label
