# CIBC Online Banking

A modern online banking application built with Angular that replicates the user interface and core functionality of CIBC's online banking platform.

## Project Overview

This project is a front-end implementation of an online banking dashboard that allows users to:
- Sign in with card number and password
- View account balances across multiple account types:
  - Deposit accounts (Chequing)
  - Credit cards
  - Lending accounts
  - Mortgage
- Navigate between different banking sections
- Update account balances (for demonstration purposes)

## Tech Stack

- **Framework**: Angular 18
- **UI Components**: Angular Material
- **Backend Integration**: Firebase Realtime Database
- **State Management**: Angular's built-in services
- **Styling**: Custom CSS
- **Authentication**: Simulated authentication flow

## Key Features

### Authentication
- Card number input with formatting
- Password field with show/hide functionality
- Form validation
- Simulated login process

### Dashboard
- Responsive layout with sidebar navigation
- Account cards displaying balances
- Quick action buttons for common banking tasks
- Profile section

### Data Management
- Real-time data synchronization with Firebase
- Update form for modifying account balances
- Formatted currency display

## Project Structure

- **Components**:
  - Login: Handles user authentication
  - Main Dashboard: Displays account information and banking options
  - Update Form: Allows modification of account balances
  - Login Header/Footer: Reusable components for the login page

- **Services**:
  - Firebase Service: Manages data operations with Firebase Realtime Database

## Getting Started

### Prerequisites
- Node.js and npm installed
- Angular CLI

### Installation

1. Clone the repository
```
git clone [repository-url]
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
ng serve
```

4. Navigate to `http://localhost:4200/` in your browser

## Building for Production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Testing

Run `ng test` to execute the unit tests via Karma.

