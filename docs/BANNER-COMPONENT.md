# Banner Component

A reusable banner component for displaying informational messages with different status types.

## Usage

```tsx
import Banner from "../common/ui/banner";

<Banner
  type="info"
  message="We found an existing account."
  actionText="Want to sign in instead?"
  onActionClick={() => handleSignIn()}
  onClose={() => closeBanner()}
/>
```

## Props

- `type`: `'success' | 'warning' | 'error' | 'info'` - The type of banner
- `message`: `string` - The message to display
- `actionText`: `string` (optional) - Text for action button
- `onActionClick`: `() => void` (optional) - Handler for action button click
- `onClose`: `() => void` (optional) - Handler for close button click
- `className`: `string` (optional) - Additional CSS classes
- `children`: `ReactNode` (optional) - Additional content to render

## Types

### Success
- Green background
- Checkmark icon
- Use for successful operations

### Warning
- Yellow background
- Warning triangle icon
- Use for warnings or important notices

### Error
- Red background
- Error X icon
- Use for error messages

### Info
- Blue background
- Information icon
- Use for informational messages (default)
