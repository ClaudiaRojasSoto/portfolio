# Portfolio API

Rails API for the portfolio. Every environment uses PostgreSQL.

```bash
bin/rails db:prepare db:seed
bin/rails server -p 3000
bin/rails test
```

`GET /api/v1/portfolio` returns the seeded profile, work, experience, and toolbox.

See the repository README for the React app and `bin/dev`.
