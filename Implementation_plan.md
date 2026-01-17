Implementation Plan - Vulcano Website
Build a minimalist, elegant one-page website for "VULCANO — Dinner to club" targeting a 30s demographic.

User Review Required
None currently.
Proposed Changes
Project Structure
Initialize a new Vite project with React.
src/App.jsx: Main one-page structure.
src/components/Hero.jsx: Video intro handling.
src/components/Section.jsx: Reusable section component.
src/index.css: Tailwind directives (if used) or custom CSS variables for colors.
Assets
Link 
VULCANO_ERUPTION.mp4
 from project root (move to public/).
Generate necessary images for sections to avoid placeholders.
Tech Stack
Vite + React
GSAP for animations
CSS Modules or Tailwind (will use standard CSS as per "Web Application Development" guidelines which say "Use Vanilla CSS for maximum flexibility... Avoid using TailwindCSS unless the USER explicitly requests it". Okay, I will use Vanilla CSS).
Styling & Branding [STRICT]
Colors (Exact Match):
Magma: #cb3426
Ash: #9d8060
Cream: #fbeed9
Black: #000000 (from brief)
Typography:
Primary Font: Elegant, minimalist sans-serif.
Logo: Use $\Delta$ as primary icon.
Tagline: "Dinner to club" (NOT "La Pizza di Giuseppe Vesi").
Content:
Kitchen Section: MUST focus on "Cucina Mediterranea" (Mediterranean Cuisine), NOT Pizza.
Copy: Use exact text from 
vulcano-copy.md
.
Verification Plan
Automated Tests
Build check: npm run build
Manual Verification
Visual Check: Verify Hex codes match Brand Identity exactly.
Content Check: Ensure Kitchen section describes Mediterranean Cuisine.
Branding Check: Verify "Dinner to club" subtitle and $\Delta$ logo visibility.
Run npm run dev
Check Hero video autoplay and freeze.
Check responsive layout on mobile/desktop.