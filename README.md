# Test Interview Project for NexTeam

This project was created by Yohann Person using TypeScript, React, Vite and SCSS.

## Features

This project implements three coding exercises:

1. **Like/Dislike Button** - Interactive double button component with state management
2. **Countdown Timer** - Configurable countdown functionality
3. **IsCycle Check** - Algorithm to detect cycles in a graph

## Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn package manager

## Installation

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:
    ```bash
    npm install
    ```

## Build

To build the project for production:

```bash
npm run build
```

## Run

To run the project in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
src/
├── components/
│   ├── feature/        # Individual problem solutions
│   │   ├── problem1/
│   │   ├── problem2/
│   │   ├── problem3/
│   │   └── problemSelect/
│   └── ui/            # Reusable UI components
│       ├── button/
│       ├── likeDislikeBtn/
│       ├── returnBtn/
│       └── runningClock/
├── App.scss
├── App.tsx
├── index.css
└── main.tsx
```

-   **components/feature/** - Contains a folder for each problem that was asked to be solved
-   **components/ui/** - Contains the different reusable components used throughout the project

## Usage

To check a problem solution:

1. Start the development server with `npm run dev`
2. Open your browser and navigate to the local server URL
3. Click on the corresponding link for each exercise to view the implementation

## Technologies Used

-   **TypeScript** - For type safety and better development experience
-   **React** - Frontend framework for building user interfaces
-   **Vite** - Build tool and development server
-   **SCSS** - CSS preprocessor for enhanced styling capabilities

---

_Created as part of the NexTeam technical interview process._
