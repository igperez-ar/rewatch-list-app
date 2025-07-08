# Rewatch List App

A modern, cross-platform React Native application for managing and tracking movies you want to rewatch. Built with a focus on maintainability, scalability, and developer experience, this project leverages best practices such as Atomic Design for UI, Hexagonal Architecture for business logic, and a modular, type-safe codebase.

---

## ✨ Features

- **Movie Watchlist**: Add, update, and remove movies from your personal rewatch list.
- **Movie Details**: View and edit details, including ratings and genres.
- **Genre Management**: Browse and select genres for your movies.
- **Persistent Storage**: Data is managed via Supabase for real-time, cloud-based persistence.
- **Responsive UI**: Consistent experience across Android and iOS, with custom fonts and theming.

---

## 🏗️ Architecture & Best Practices

### Hexagonal Architecture (Ports & Adapters)
- **Domain Logic**: All business rules are isolated in the `domain` layer, making them framework-agnostic and easily testable.
- **Adapters**: Infrastructure (e.g., Supabase, mocks) is injected via adapters, allowing for easy swapping and mocking in tests.
- **Use Cases**: Application-specific workflows are encapsulated in use-case classes, promoting single responsibility and clarity.

### Atomic Design for UI
- **Atoms**: Smallest UI components (e.g., `Text`, `Box`, `Icon`).
- **Molecules**: Combinations of atoms (e.g., `Dropdown`, `Header`, `Input`).
- **Templates**: Layout scaffolds (e.g., `GradientContainer`, `MainContainer`).
- **Screens**: Full pages composed of templates, molecules, and atoms.

### Type Safety & Testing
- **TypeScript**: End-to-end type safety, including custom types for Supabase and global app types.
- **Unit & Integration Tests**: Located alongside use-cases and screens, with fixtures and mocks for reliable, isolated testing.

### State Management & Theming
- **Redux Toolkit**: Modular state slices for configuration and app state.
- **Theming**: Centralized theme management for consistent look and feel.

---

## 📁 Project Structure

```
src/
  app/           # App entry, theme, global types
  core/          # Business logic (hexagonal architecture)
    capabilities/
      movies/    # Movie domain, use-cases, adapters, repository
      genres/    # Genre domain, use-cases, adapters, repository
  presentation/  # UI (atomic design: atoms, molecules, templates, screens)
  shared/        # Shared enums, constants, types, utilities
  testing/       # Test fixtures, mocks, and utils
lib/
  supabase/      # Supabase instance and generated types
```

---

## 🚀 Getting Started (with Yarn)

### 1. Install Dependencies

```sh
yarn install
```

### 2. Set Up Native Dependencies

#### iOS (first time or after native dependency changes)
```sh
cd ios
bundle install
bundle exec pod install
cd ..
```

### 3. Start Metro Bundler

```sh
yarn start
```

### 4. Run the App

#### Android
```sh
yarn android
```

#### iOS
```sh
yarn ios
```

