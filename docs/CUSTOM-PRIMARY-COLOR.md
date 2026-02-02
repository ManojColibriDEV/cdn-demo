# Custom Primary Color Feature

The Colibri Identity Widget supports overriding the brand's primary color with a custom color of your choice.

## Overview

The `custom-primary-color` attribute allows you to customize the widget's appearance by overriding:
- Primary button backgrounds
- Button hover states
- Input field focus borders
- Links and interactive elements
- All primary color variants throughout the widget

## Usage

### Basic HTML Usage

```html
<!-- Using hex color -->
<keycloak-widget 
  authority="dev"
  subsidiary="elite"
  customPrimaryColor="#dc3545">
</keycloak-widget>

<!-- Using hex without # -->
<keycloak-widget customPrimaryColor="6f42c1"></keycloak-widget>

<!-- Using named CSS color -->
<keycloak-widget customPrimaryColor="red"></keycloak-widget>

<!-- Using RGB -->
<keycloak-widget customPrimaryColor="rgb(220, 53, 69)"></keycloak-widget>
```

### React/TypeScript Usage

```tsx
import { useRef, useState } from 'react';
import '@colibri/identity-widget';

function App() {
  const [primaryColor, setPrimaryColor] = useState('#dc3545');

  return (
    <div>
      <keycloak-widget
        authority="dev"
        subsidiary="elite"
        customPrimaryColor={primaryColor}
        show-login="true"
      />
      
      <button onClick={() => setPrimaryColor('#28a745')}>
        Change to Green
      </button>
      <button onClick={() => setPrimaryColor('#6f42c1')}>
        Change to Purple
      </button>
    </div>
  );
}
```

### Dynamic Color Change (Vanilla JS)

```javascript
const widget = document.querySelector('keycloak-widget');

// Change to purple
widget.setAttribute('customPrimaryColor', '#6f42c1');

// Change to green
widget.setAttribute('customPrimaryColor', '#28a745');

// Reset to brand default
widget.removeAttribute('customPrimaryColor');
```

## Supported Color Formats

### Hex Colors
```html
<!-- With # prefix -->
<keycloak-widget customPrimaryColor="#FF5733"></keycloak-widget>

<!-- Without # prefix (automatically added) -->
<keycloak-widget customPrimaryColor="FF5733"></keycloak-widget>
```

### Named Colors
```html
<keycloak-widget customPrimaryColor="red"></keycloak-widget>
<keycloak-widget customPrimaryColor="blue"></keycloak-widget>
<keycloak-widget customPrimaryColor="green"></keycloak-widget>
<keycloak-widget customPrimaryColor="purple"></keycloak-widget>
```

### RGB/RGBA
```html
<keycloak-widget customPrimaryColor="rgb(220, 53, 69)"></keycloak-widget>
<keycloak-widget customPrimaryColor="rgba(220, 53, 69, 0.8)"></keycloak-widget>
```

### HSL/HSLA
```html
<keycloak-widget customPrimaryColor="hsl(9, 100%, 60%)"></keycloak-widget>
<keycloak-widget customPrimaryColor="hsla(9, 100%, 60%, 0.8)"></keycloak-widget>
```

## Use Cases

### Brand Customization
Override default brand colors for specific campaigns or events:
```html
<!-- Holiday theme -->
<keycloak-widget customPrimaryColor="#c41e3a"></keycloak-widget>

<!-- Earth Day theme -->
<keycloak-widget customPrimaryColor="#228B22"></keycloak-widget>
```

### User Preference
Allow users to choose their preferred accent color:
```javascript
const userPreferredColor = localStorage.getItem('preferred_color') || '#007bff';
widget.setAttribute('customPrimaryColor', userPreferredColor);
```

### A/B Testing
Test different colors to optimize conversion:
```javascript
const variantColors = ['#007bff', '#28a745', '#dc3545'];
const randomColor = variantColors[Math.floor(Math.random() * variantColors.length)];
widget.setAttribute('customPrimaryColor', randomColor);
```

### White-Label Implementation
Dynamically apply client-specific colors:
```javascript
const clientConfig = {
  'client-a': '#FF5733',
  'client-b': '#6f42c1',
  'client-c': '#28a745'
};

const clientId = getCurrentClientId();
widget.setAttribute('customPrimaryColor', clientConfig[clientId]);
```

## Interactive Example

See `widget-test.html` for a complete working example with a color picker button that cycles through different colors.

```bash
# Build the widget
npm run build

# Open the test page
# Open widget-test.html in your browser
```

Click the "Change Primary Color" button to cycle through different colors and see the widget update in real-time.

## Notes

- The custom color overrides the brand theme colors loaded from the CDN
- Changes are applied immediately when the attribute changes
- The custom color works with Shadow DOM isolation (styles won't leak)
- The custom color does not persist across page reloads (use localStorage if needed)
- If an invalid color is provided, the widget falls back to the brand theme color

## Implementation Details

The custom primary color is implemented by:
1. Detecting the `custom-primary-color` attribute on the web component
2. Creating a style element in the Shadow DOM
3. Overriding CSS variables:
   - `--color-primary`
   - `--color-primary-light`
   - `--button-primary-bg`
   - `--button-primary-bg-hover`
   - `--color-border-focus`

This ensures the custom color applies consistently throughout the widget while maintaining style isolation from the host page.
