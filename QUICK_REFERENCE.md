# Quick Reference: Tailwind → Bootstrap Migration

## 🎯 What Changed

This project has been migrated from **Tailwind CSS** to **Bootstrap 5**.

## 📦 Dependencies

### Installed
- `bootstrap@5.3.8` - Bootstrap CSS framework
- `react-bootstrap@2.10.10` - React components for Bootstrap

### Removed
- `tailwindcss` ❌
- `@tailwindcss/postcss` ❌
- `tailwind.config.ts` ❌

## 🗂️ Documentation

- **📖 BOOTSTRAP_IMPLEMENTATION.md** - Full implementation guide with examples
- **📊 MIGRATION_SUMMARY.md** - Complete migration details and patterns
- **📄 README.md** - Updated to reflect Bootstrap

## 🔄 Common Class Conversions

### Layout
```
Tailwind          → Bootstrap
---------------------------------------
flex              → d-flex
flex-row          → flex-row
w-full            → w-100
h-screen          → vh-100
container mx-auto → container
p-4               → p-3
mt-4              → mt-3
```

### Typography
```
Tailwind          → Bootstrap
---------------------------------------
text-left         → text-start
text-right        → text-end
text-3xl          → display-4 or h1
font-bold         → fw-bold
font-semibold     → fw-semibold
```

### Borders
```
Tailwind          → Bootstrap
---------------------------------------
border-r          → border-end
border-l          → border-start
border-t          → border-top
border-b          → border-bottom
rounded-lg        → rounded
```

### Forms
```
Tailwind                               → Bootstrap
--------------------------------------------------------------------
Custom input classes                   → form-control
Custom select classes                  → form-select
Custom checkbox classes                → form-check-input
Custom button (bg-blue-500 text-white) → btn btn-primary
```

## 🎨 Bootstrap Classes by Category

### Most Used Classes

**Layout:**
- `container`, `container-fluid`
- `d-flex`, `flex-row`, `flex-column`
- `row`, `col-*`

**Spacing:**
- `m-*`, `mt-*`, `mb-*`, `ms-*`, `me-*` (0-5)
- `p-*`, `pt-*`, `pb-*`, `ps-*`, `pe-*` (0-5)

**Sizing:**
- `w-100` (width 100%)
- `vh-100` (viewport height 100%)

**Forms:**
- `form-control` (inputs, textareas)
- `form-select` (dropdowns)
- `form-check-input` (checkboxes)
- `btn btn-primary` (primary button)
- `btn btn-light` (light button)
- `btn btn-outline-danger` (outlined red button)

**Typography:**
- `text-start`, `text-center`, `text-end`
- `fw-bold`, `fw-semibold`
- `h1` - `h6`, `display-1` - `display-6`

**Borders:**
- `border`, `border-top`, `border-end`, `border-start`, `border-bottom`
- `border-primary`, `border-danger`
- `border-*` (1-5 for thickness)

**Tables:**
- `table`
- `table-bordered`
- `table-striped`

## 💡 Quick Start

### Using Bootstrap Classes
```jsx
// Before (Tailwind)
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Submit
</button>

// After (Bootstrap)
<button className="btn btn-primary">
  Submit
</button>
```

### Form Example
```jsx
<div className="mb-3 row align-items-center">
  <label className="col-4 text-end">Name:</label>
  <div className="col-8">
    <input type="text" className="form-control" />
  </div>
</div>
```

### Grid Layout
```jsx
<div className="container-fluid">
  <div className="row">
    <div className="col-md-4">Sidebar</div>
    <div className="col-md-8">Main Content</div>
  </div>
</div>
```

## 🔍 Where to Find More Info

1. **For developers** → Read `BOOTSTRAP_IMPLEMENTATION.md`
2. **For details** → Read `MIGRATION_SUMMARY.md`
3. **For Bootstrap docs** → https://getbootstrap.com/docs/5.3/

## ✅ Status

- Build: **✅ Passing**
- Type Check: **✅ Passing**
- Security: **✅ No vulnerabilities**
- Components: **✅ All converted (9 files)**
- Tests: **✅ All passing**

## 🚀 Next Steps

To start development:
```bash
npm install  # Install dependencies (including Bootstrap)
npm run dev  # Start dev server
```

To build for production:
```bash
npm run build  # Build with Bootstrap
```

## 📝 Notes

- Bootstrap is imported in `src/app/globals.css`
- Some components use inline styles for exact pixel values
- All original functionality is preserved
- Visual appearance is maintained

---

**Need help?** Check `BOOTSTRAP_IMPLEMENTATION.md` for detailed examples!
