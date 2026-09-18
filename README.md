# My Portfolio

Vite + React + TypeScript rewrite of the personal portfolio site.

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs to `dist/`. Static assets (images, compiled CSS) live in `public/`
and are copied into `dist/` as-is.

## Notes

- `legacy-static/` holds the original static HTML/CSS/JS version of the site, kept for reference.
- The contact form is currently UI-only — it doesn't send anywhere yet. The old PHPMailer backend (`mail.php`) was removed since it stored a live SMTP password in source control; wire up a new backend (e.g. a serverless function or a service like Resend/EmailJS) before relying on it.
