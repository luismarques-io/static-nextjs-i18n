This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Configure Page not found (404)

1. Add 404.html file at root_level
2. Add this line in the `.htaccess` file: `ErrorDocument 404 /404.html`

**Note:** Both .htaccess and 404.html files are at root_level

## Thanks

Based on:

- https://medium.com/@kitagolda/next-js-v13-multilingual-server-components-adding-internationalization-in-a-statically-exported-a94e1c927d49 (https://github.com/kitagolda/static-nextjs-i18n)
- https://medium.com/@ferlat.simon/internationalize-your-next-js-static-site-with-app-router-772f9f16e63 (https://github.com/RockyStrongo/next-i18n-static/)
- 404:
  - https://stackoverflow.com/a/66311478
  - https://stackoverflow.com/a/78382676
- Language Detection:
  - https://locize.com/blog/next-i18n-static/
  - https://github.com/i18next/next-language-detector/
  - https://github.com/i18next/next-language-detector/tree/main/examples/basic

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
