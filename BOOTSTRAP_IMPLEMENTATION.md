# Bootstrap Implementation Documentation

## Overview
This document describes the Bootstrap CSS implementation in the MFS React application, replacing the previous Tailwind CSS approach.

## Installation

### Dependencies Added
- `bootstrap@5.x` - Core Bootstrap CSS framework
- `react-bootstrap@2.x` - React components for Bootstrap

### Dependencies Removed
- `tailwindcss` - Tailwind CSS framework
- `@tailwindcss/postcss` - PostCSS plugin for Tailwind

### Configuration Changes
- ✅ Removed `tailwind.config.ts`
- ✅ Updated `src/app/globals.css` to import Bootstrap CSS
- ✅ Removed all Tailwind directives (@tailwind base, @tailwind components, @tailwind utilities)

## Component Conversions

### Layout Components

#### Root Layout (`src/app/layout.tsx`)
**Bootstrap Classes Used:**
- `container-fluid` - Full-width container
- `d-flex` - Flexbox display
- `flex-row` - Horizontal flex direction
- `vh-100` - 100% viewport height
- `p-3` - Padding

**Before (Tailwind):**
```jsx
<div className="container mx-auto flex flex-row h-screen p-4">
```

**After (Bootstrap):**
```jsx
<div className="container-fluid d-flex flex-row vh-100 p-3">
```

#### Navigation Component (`src/components/nav.tsx`)
**Bootstrap Classes Used:**
- `border-end` - Right border
- `p-3` - Padding
- `btn`, `btn-light` - Button styles
- `w-100` - Width 100%
- `text-start` - Text alignment
- `border-start`, `border-primary`, `border-4` - Border styles
- `bg-light` - Background color
- `mt-*`, `ms-*`, `ps-*` - Margin and padding utilities
- `btn-outline-danger` - Outlined danger button
- `border-top` - Top border

### Form Components

#### Inventory Forms (`src/app/inventory/*/maintain.tsx`)
**Bootstrap Classes Used:**
- `mb-3` - Margin bottom
- `row` - Bootstrap grid row
- `align-items-center` - Vertical alignment
- `col-*` - Grid columns
- `text-end` - Text alignment
- `pe-3` - Padding end
- `form-control` - Form input styling
- `form-select` - Select dropdown styling
- `form-check-input` - Checkbox styling
- `btn`, `btn-primary` - Button styles

**Form Structure:**
```jsx
<div className="mb-3 row align-items-center">
  <label className="col-4 text-end pe-3">Label</label>
  <div className="col-8">
    <input className="form-control" />
  </div>
</div>
```

### Data Display

#### Datagrid Component (`src/components/datagrid.tsx`)
**Bootstrap Classes Used:**
- `table` - Basic table styling
- `table-bordered` - Table with borders

**Before (Tailwind):**
```jsx
<table className="w-full border-collapse">
```

**After (Bootstrap):**
```jsx
<table className="table table-bordered">
```

### Login Page (`src/app/login/login.tsx`)
**Approach:** Uses inline styles and minimal Bootstrap classes to maintain exact legacy design
- `float-start` - Float left
- `d-block` - Display block
- `clearfix` - Clear floats
- `mt-4` - Margin top

**Note:** Login page intentionally uses more inline styles to preserve the exact pixel-perfect legacy design.

### Other Components

#### Label Component (`src/components/Label.jsx`)
```jsx
<span className="d-block float-start" style={{ width: '102px' }}>
```

#### Home Page (`src/app/page.tsx`)
- `display-4` - Large display heading
- `fw-bold` - Bold font weight
- `mt-3` - Margin top

## Bootstrap Class Reference

### Common Patterns

#### Layout & Spacing
- `container`, `container-fluid` - Container widths
- `d-flex`, `flex-row`, `flex-column` - Flexbox
- `vh-100` - Viewport height
- `w-100` - Width 100%
- `m-*`, `mt-*`, `mb-*`, `ms-*`, `me-*` - Margins (0-5)
- `p-*`, `pt-*`, `pb-*`, `ps-*`, `pe-*` - Padding (0-5)

#### Grid System
- `row` - Grid row
- `col`, `col-*` - Grid columns
- `align-items-center` - Vertical center alignment
- `justify-content-*` - Horizontal alignment

#### Typography
- `text-start`, `text-center`, `text-end` - Text alignment
- `fw-bold`, `fw-semibold` - Font weights
- `h1`-`h6`, `display-*` - Heading sizes
- `text-decoration-none` - Remove underline from links

#### Borders
- `border`, `border-top`, `border-end`, `border-start`, `border-bottom`
- `border-primary`, `border-danger` - Border colors
- `border-*` (1-5) - Border widths
- `rounded` - Border radius

#### Colors
- `bg-light` - Light background
- `text-*` - Text colors
- `btn-primary`, `btn-light`, `btn-outline-danger` - Button colors

#### Forms
- `form-control` - Text inputs and textareas
- `form-select` - Select dropdowns
- `form-check-input` - Checkboxes and radios
- `mb-3` - Standard form field spacing

#### Buttons
- `btn` - Base button class
- `btn-primary`, `btn-light`, `btn-outline-danger` - Button variants
- `w-100` - Full-width buttons

#### Display
- `d-block`, `d-flex`, `d-none` - Display properties
- `float-start`, `float-end` - Float utilities

## Migration from Tailwind

### Common Conversions

| Tailwind | Bootstrap | Notes |
|----------|-----------|-------|
| `flex` | `d-flex` | Display flex |
| `flex-row` | `flex-row` | Same |
| `w-full` | `w-100` | Full width |
| `h-screen` | `vh-100` | Full viewport height |
| `container mx-auto` | `container` or `container-fluid` | Centered container |
| `p-4` | `p-3` or `p-4` | Padding (scale 0-5) |
| `mt-4` | `mt-3` or `mt-4` | Margin top |
| `text-left` | `text-start` | Text alignment |
| `text-right` | `text-end` | Text alignment |
| `border-r` | `border-end` | Right border |
| `border-l` | `border-start` | Left border |
| `bg-gray-100` | `bg-light` | Light background |
| `rounded-lg` | `rounded` | Rounded corners |
| `font-semibold` | `fw-semibold` | Font weight |
| `text-3xl` | `display-4` or `h1` | Large text |

### Custom Width/Height
For specific pixel values (e.g., `w-[583px]`), use inline styles:
```jsx
style={{ width: '583px' }}
```

## Best Practices

### When to Use Bootstrap Classes
- ✅ Standard layouts, grids, and spacing
- ✅ Form controls and inputs
- ✅ Buttons and navigation
- ✅ Tables and data display
- ✅ Typography and text utilities

### When to Use Inline Styles
- ✅ Exact pixel dimensions required for legacy designs
- ✅ Specific color values (e.g., `#DFDFE1`)
- ✅ Custom spacing that doesn't fit Bootstrap scale

### Responsive Design
Bootstrap provides responsive utilities:
- `d-none d-md-block` - Hide on mobile, show on medium+
- `col-12 col-md-6` - Full width mobile, half on medium+
- `mb-3 mb-md-4` - Different spacing at breakpoints

Breakpoints:
- `sm` - ≥576px
- `md` - ≥768px
- `lg` - ≥992px
- `xl` - ≥1200px
- `xxl` - ≥1400px

## Testing

### Build Verification
```bash
npm run build  # ✅ Passes
npm run type-check  # ✅ Passes
```

### Visual Testing
All components maintain their original appearance using Bootstrap equivalents or inline styles where necessary.

## Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Bootstrap Utilities](https://getbootstrap.com/docs/5.3/utilities/spacing/)
- [React Bootstrap](https://react-bootstrap.github.io/)

## Future Improvements

Optional enhancements for consideration:

1. **Use React Bootstrap Components**
   - Replace raw Bootstrap classes with `<Button>`, `<Form>`, `<Table>` components
   - Better TypeScript integration
   - More React-friendly API

2. **Modernize Login Page**
   - Replace inline styles with Bootstrap classes
   - Use Bootstrap grid system instead of floats
   - Improve responsive behavior

3. **Theme Customization**
   - Create custom Bootstrap theme with company colors
   - Override default Bootstrap variables
   - Add custom components

4. **Accessibility**
   - Add proper ARIA labels
   - Improve keyboard navigation
   - Enhance form validation

## Notes

- Bootstrap 5 is used (latest stable version)
- No jQuery dependency (Bootstrap 5 uses vanilla JavaScript)
- Compatible with React 19 and Next.js 16
- All original functionality preserved
- Visual appearance maintained
