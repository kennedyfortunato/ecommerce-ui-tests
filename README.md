# UI Test Automation Project with Playwright and TypeScript

## Overview

This project implements a UI test automation framework for an E-commerce website developed with Playwright and TypeScript. The primary focus is to ensure the stability and functionality of key UI elements in a consistent and efficient manner.

## Technologies Used

- Playwright: A powerful browser automation tool supporting multiple platforms and browsers, with advanced features like video recording and network tracing.

- TypeScript: A typed programming language that enhances code reliability and maintainability.

- Node.js: The runtime environment that supports the tools and libraries required for this project.

## Design Decisions and Patterns Used

### Page Object Model (POM)

The project uses the Page Object Model pattern to structure the tests, encapsulating the logic for interacting with page elements in dedicated classes. This approach provides the following benefits:

1. Reusability: Components and methods can be reused across multiple tests.

2. Maintainability: UI changes require modifications in only one class, reducing the impact on tests.

3. Clarity: Separation between test logic and interaction logic improves readability.

### Configuration and Tools

1. playwright.config.ts: Configures Playwright, including browser navigation, default timeouts, and the directory for storing reports.

2. tsconfig.json: Configures TypeScript to compile and run with CommonJS, and type-checking support.

## How to Run the Project

### Prerequisites

- Node.js (v14 or higher)

- npm or yarn installed

### Installation

1. Clone the repository:

```
git clone git@github.com:kennedyfortunato/ecommerce-ui-tests.git
```

2. Install dependencies:
```
npm install
```

### Running Tests:

1. Run all tests:

```
npx playwright test
```

2. Run a specific test:
```
npx playwright test tests/createNewAccount.spec.ts
```

3. Generate a report:
```
npx playwright show-report
```
