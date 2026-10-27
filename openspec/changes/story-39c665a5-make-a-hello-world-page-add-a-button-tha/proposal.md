# Hello World Page with Button

## Why

The home page is currently empty, so visitors have no indication that the application is available. A simple hello-world page provides a clear first screen and a visible button for the requested interface.

## What Changes

- Replace the empty home page with a prominent “Hello world” heading and a “Click me” button.
- Make the heading use the requested 5xl text size.
- Install and use shadcn/ui for the button.
- Add automated coverage for the home page content and button.

## Capabilities

### New Capabilities

### Modified Capabilities
- `empty-nextjs-project`: Replace the requirement that the home page is empty with the required hello-world heading and button.

## Assumptions

- The heading text will be “Hello world” and the button label will be “Click me,” matching the story’s wording with conventional capitalization.
- The button is a visible, operable button; no click outcome is specified by the story, so it does not need to trigger an additional action.
- The 5xl heading size is a visual requirement and will be verified by a reviewer in addition to automated content checks.

## Impact

- Updates the `/` page and its automated tests.
- Adds shadcn/ui setup and its required UI and styling dependencies/configuration.
- No API or route changes.
