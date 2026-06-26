# Notification Application

## Overview

This project is a React-based Notification Management System developed as part of the Afford Medical Technologies Frontend Evaluation.

The application allows users to:

- View all notifications
- Filter notifications by type
- View priority notifications
- Track read/unread notifications
- Experience a responsive Material UI interface
- Utilize a reusable logging middleware

---

## Technologies Used

- React
- Vite
- Material UI (MUI)
- JavaScript (JSX)

---

## Features

### Notifications

- Display all notifications
- Notification type filtering
  - Placement
  - Result
  - Event

### Priority Notifications

- Displays top-priority notifications based on ranking

### Read / Unread Tracking

- New notifications are highlighted
- Viewed notifications are stored using Local Storage

### Logging Middleware

- Reusable logging utility
- Designed for integration with evaluation logging APIs

---

## Project Structure

src/
├── api/
├── components/
├── hooks/
├── middleware/
├── pages/
├── App.jsx
└── main.jsx

---



## Run Locally

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

---
