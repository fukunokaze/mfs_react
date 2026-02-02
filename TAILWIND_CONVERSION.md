# Tailwind CSS Conversion Documentation

## Overview
This document tracks the conversion of legacy CSS classes to Tailwind CSS utilities to modernize the styling approach and ensure consistency across the application.

## Conversion Status

### ✅ Completed Conversions

#### Login Page (`src/app/login/login.tsx`)
The login page has been fully converted from custom CSS classes to inline Tailwind utilities:

**Custom CSS → Tailwind Equivalents:**
- `#logincontainer` → `bg-[#DFDFE1] overflow-auto min-h-screen`
- `.contentwrap` → `w-[583px] my-8 mx-auto bg-[#F2F2F2]`
- `.column` → `float-left w-[280px]`
- `.information` → `mt-6`
- `.footer.clear` → `bg-[#DFDFE1] text-[10px] text-[#777777] pt-2 clear-both`

#### Label Component (`src/components/Label.jsx`)
Updated to use Tailwind classes for consistent layout within the login form:
- Added: `w-[102px] block float-left`

### ✅ Already Using Tailwind
The following components are already using Tailwind CSS and required no conversion:
- Navigation component (`src/components/nav.tsx`)
- Datagrid component (`src/components/datagrid.tsx`)
- Layout component (`src/app/layout.tsx`)
- All inventory pages (`src/app/inventory/**`)
- Home page (`src/app/page.tsx`)

### Legacy CSS (Preserved)
The following legacy CSS in `src/app/globals.css` has been preserved for backward compatibility but is not actively used in modern components:
- Frame-related styles (`.mfsheader`, `.mfsbody`)
- Legacy button styles (`.button`, `.subbutton`)
- Legacy text field styles (`.textfield`, `.mantextfield`)
- Grid and table styles (`.resultstable`, `.simpleGrid`)
- Section styles (`.section`, `.sectiontitle`)

A deprecation notice has been added to `globals.css` documenting the login page conversion.

## Design Tokens Used

### Colors
- Background: `#DFDFE1` (light gray)
- Content background: `#F2F2F2` (off-white)
- Text: `#777777` (medium gray)
- Border: `#cccccc` (light gray)

### Spacing
- Container width: `583px`
- Column width: `280px`
- Input width: `120px`
- Label width: `102px`

## Guidelines for Future Development

### When Building New Components
1. ✅ **DO**: Use Tailwind utility classes
2. ✅ **DO**: Follow the existing color scheme using `bg-[#hex]` notation
3. ✅ **DO**: Use responsive utilities (`sm:`, `md:`, `lg:`) for breakpoints
4. ❌ **DON'T**: Add new custom CSS classes to `globals.css`
5. ❌ **DON'T**: Use inline styles unless absolutely necessary

### Common Tailwind Patterns in This Project

**Layouts:**
```jsx
// Container
<div className="container mx-auto flex flex-row h-screen p-4">

// Two-column layout
<div className="w-1/3 p-4 border-r border-gray-300">  // Sidebar
<div className="w-2/3 p-4">                            // Main content
```

**Forms:**
```jsx
// Form container
<form className="space-y-6">

// Form field
<div className="flex items-center">
  <label className="w-1/3 text-right pr-4">Label</label>
  <input className="w-2/3 border border-gray-300 p-2 rounded" />
</div>
```

**Buttons:**
```jsx
// Primary button
<button className="bg-blue-500 text-white px-4 py-2 rounded">

// Navigation button
<button className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg">
```

## Testing Checklist
- [x] Login page renders correctly with new Tailwind classes
- [x] Build succeeds without errors
- [x] TypeScript type checking passes
- [ ] Visual regression testing (manual verification recommended)
- [ ] Cross-browser testing

## References
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js + Tailwind Setup](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
- Project Tailwind config: `tailwind.config.ts`
