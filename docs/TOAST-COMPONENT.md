# Toast Component

A reusable toast notification component that auto-dismisses after a specified duration.

## Usage

```tsx
import Toast from "../common/ui/toast";

{toastMessage && (
  <Toast
    type="error"
    message={toastMessage}
    duration={5000}
    onClose={() => setToastMessage("")}
  />
)}
```

## Props

- `type`: `'success' | 'warning' | 'error' | 'info'` - The type of toast
- `message`: `string` - The message to display
- `duration`: `number` (optional) - Auto-dismiss duration in milliseconds (default: 5000ms)
- `onClose`: `() => void` - Handler called when toast is closed
- `className`: `string` (optional) - Additional CSS classes

## Features

- Auto-dismisses after specified duration (default 5 seconds)
- Smooth slide-in animation from right
- Positioned at top-right of viewport
- Click to close manually
- Fixed z-index of 9999 to appear above all content

## Types

### Success
- Green background with white text
- Checkmark icon

### Warning
- Yellow background with white text
- Warning triangle icon

### Error
- Red background with white text
- Error X icon

### Info
- Blue background with white text
- Information icon (default)

## Notes

- Toast appears in fixed position at top-right
- Multiple toasts can be shown but will overlap (consider implementing a toast queue if needed)
- Automatically cleans up on unmount
