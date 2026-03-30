# Todo App

A simple Node.js Express todo list web application with CI/CD pipeline.

## Features

- Add, toggle, and delete todos
- RESTful API
- Automated testing with Jest
- Linting with ESLint
- CI/CD with GitHub Actions
- Deployment to Vercel

## Installation

1. Clone the repository
2. Run `npm install`

## Usage

- Development: `npm run dev`
- Production: `npm start`
- Test: `npm test`
- Lint: `npm run lint`

## API Endpoints

- GET /api/todos - Get all todos
- POST /api/todos - Add a new todo (body: { text: string })
- PUT /api/todos/:id - Toggle todo completion (body: { completed: boolean })
- DELETE /api/todos/:id - Delete a todo

## Deployment

The app is automatically deployed to Vercel on pushes to the main branch via GitHub Actions.

To set up Vercel deployment:
1. Create a Vercel account and project
2. Add VERCEL_TOKEN, VERCEL_ORG_ID, and VERCEL_PROJECT_ID to GitHub repository secrets