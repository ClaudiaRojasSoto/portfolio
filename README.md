# Claudia Rojas, portfolio

Personal portfolio. React renders the site. Profile, projects, experience, and stack live in PostgreSQL and are served by a Rails API.

## Requirements

- Node.js 24
- Ruby 3.1.2
- PostgreSQL in development, test, and production

## Setup

```bash
cd api
bin/rails db:prepare db:seed
cd ..
bin/dev
```

- API: http://localhost:3000/api/v1/portfolio
- Site: http://localhost:5173

The résumé buttons use the profile `resume_path`. The seeded value is the Google Drive file.

Production also uses PostgreSQL. Set `DATABASE_URL`, or `DATABASE_USERNAME`, `DATABASE_PASSWORD`, and `DATABASE_HOST`.

After Ruby changes, run QLTY FMT.
