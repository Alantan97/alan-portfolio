# Alan Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It presents selected projects, skills, competition achievements, activities, education, and contact links.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Useful Scripts

```bash
npm run lint
npm run build
npm run start
```

## Main Files

- `app/page.tsx` controls the section order.
- `data/projects.ts` contains project card and modal content.
- `data/achievements.ts` contains achievements and activity entries.
- `data/profile.ts` contains profile, education, social links, and skills.
- `components/` contains reusable UI sections and cards.

## Assets

Static images and icons are stored in `public/` and referenced with root paths such as `/images/profile/profile4.png`.

## Notes

Run `npm run lint` and `npm run build` after changing code or removing assets.
