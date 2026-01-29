# Lendsqr Frontend Assessment

This project is a responsive admin dashboard built as part of the Lendsqr Frontend Engineering Assessment.  
The application closely follows the provided Figma design and focuses on clean UI implementation, maintainable architecture, and predictable state-driven behavior.

---

## Features

- User dashboard with tabular data
- Client-side pagination
- Multi-field filtering:
  - Organization
  - Username
  - Email
  - Phone number
  - Date joined
- User details page
- Reusable UI components
- Fully responsive layout

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- SCSS (SASS Modules)
- Mock API (JSON Generator)
- Icon library with custom adaptations

---

## Design Notes

Some icons used in the Figma design were not readily available in the chosen icon library.  
In such cases, visually similar alternatives were used to preserve design intent and usability while maintaining overall visual consistency.

---

## Architectural Decisions

- Client-side pagination was implemented since the dataset is fetched once and remains relatively small.
- Filtering is applied before pagination to ensure accurate page counts and consistent user experience.
- Shared UI elements such as the sidebar were extracted into reusable components to improve maintainability and reduce duplication.
- SCSS modules were used to ensure scoped, predictable styling aligned with the provided design.

---

## Getting Started

### Installation

```
npm install
```

## Run Locally

```
npm run dev
```
The application will be available at http://localhost:3000

## Project Structure

- ```app/``` : Contains the application routes and pages.
- ```components/``` : Contains reusable UI components.
- ```styles/``` : Contains SCSS modules for styling.

## Improvements With More Time

- Abstract filtering and pagination logic into reusable hooks

- Introduce server-side pagination for large datasets

- Expand accessibility support (ARIA roles, keyboard navigation)

- Add unit and integration tests

## Author

- [Chikaima Uwakwe](https://github.com/CodeWithMiguelll)