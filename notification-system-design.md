# Stage 1

## Logging Middleware Design

A reusable logging middleware was created to support centralized logging across the frontend application.

### Objectives

- Consistent logging mechanism
- Error tracking
- Debugging support
- Easy integration throughout the application

### Design

The logger exposes:

```javascript
Log(stack, level, package, message)
```

Example:

```javascript
Log(
  "frontend",
  "info",
  "hook",
  "Fetching notifications"
);
```

### Integration Points

- Notification fetching
- Error handling
- Application lifecycle events

---

# Stage 2

## Notification System

### Features

- All Notifications View
- Priority Notifications View
- Notification Filtering
- Read / Unread Tracking
- Responsive UI

### Notification Priority

Priority ranking:

1. Placement
2. Result
3. Event

Notifications are sorted according to priority and timestamp.

### Read / Unread Tracking

Viewed notifications are stored in Local Storage.

### UI Framework

Material UI (MUI) was used throughout the application to ensure consistency and responsiveness.

### Error Handling

The application handles:

- Loading state
- Empty state
- API errors

### Architecture

src/
├── api/
├── components/
├── hooks/
├── middleware/
├── pages/

This structure separates presentation, business logic, API handling, and middleware concerns.
