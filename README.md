# Employees Directory 👥

A test project for **Gromcode University** — an interactive employees directory allowing users to search, filter, sort, and view detailed employee profiles.

---
## 🔗 Live Demo
[View the Live Project](https://i1yaremechko.github.io/employees-directory/)

---

## 🛠 Tech Stack

- **Core:** React 19, TypeScript
- **Bundler:** Vite
- **Routing:** React Router v7
- **Styling:** SCSS Modules, Flexbox / CSS Grid, CSS Variables
- **Code Quality & Linting:** ESLint (Flat Config), Prettier, Husky, lint-staged

---

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```
  Once started, the application will be available at http://localhost:5173.

## 📂 Project Structure

```bash
src/
├── api/          # API requests and configuration (mockapi.io)
├── components/   # Reusable UI components (Header, Skeleton, EmployeeList, etc.)
├── hooks/        # Custom React hooks (useEmployees, useEmployeeFilters)
├── pages/        # Page views (EmployeesPage, ProfilePage, NotFoundPage)
├── styles/       # Global styles, SCSS variables, and mixins
├── types/        # TypeScript types and interfaces (@app-types)
└── utils/        # Utility functions for sorting, filtering, and data formatting
```