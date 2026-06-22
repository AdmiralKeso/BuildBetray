# BuildBetray — Tech Stack & Commands

## Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Backend   | Laravel 12 (PHP 8.2+)             |
| Frontend  | React 19 + TypeScript 5.7         |
| Bridge    | Inertia.js 2                      |
| Styling   | Tailwind CSS 4                    |
| UI        | Radix UI + shadcn/ui              |
| Icons     | Lucide React                      |
| Bundler   | Vite 6                            |
| Database  | MySQL (XAMPP)                     |
| Auth      | Laravel built-in (username/email) |

---

## First-Time Setup

```bash
# 1. Install PHP dependencies
composer install

# 2. Copy environment file and configure it
copy .env.example .env

# 3. Generate app key (required — app won't boot without it)
php artisan key:generate

# 4. Create the MySQL database in phpMyAdmin: buildbetray_db

# 5. Run migrations
php artisan migrate

# 6. Install JS dependencies
npm install

# 7. Start dev servers (run both in separate terminals)
php artisan serve
npm run dev
```

---

## Artisan Commands

### Application
```bash
php artisan key:generate          # Generate APP_KEY (run once after .env setup)
php artisan serve                 # Start Laravel dev server at http://localhost:8000
php artisan optimize:clear        # Clear all caches (config, route, view)
php artisan config:cache          # Cache config for production
php artisan route:cache           # Cache routes for production
```

### Database
```bash
php artisan migrate               # Run pending migrations
php artisan migrate:fresh         # Drop all tables and re-run all migrations
php artisan migrate:fresh --seed  # Fresh migrate + run seeders
php artisan migrate:rollback      # Roll back the last batch of migrations
php artisan migrate:status        # Show status of each migration
php artisan db:seed               # Run database seeders
```

### Make (Generators)
```bash
php artisan make:model ModelName -m       # Model + migration
php artisan make:controller Name          # Controller
php artisan make:controller Name --resource  # Resource controller (CRUD)
php artisan make:migration name           # Migration file
php artisan make:seeder NameSeeder        # Seeder
php artisan make:factory NameFactory      # Factory
php artisan make:request NameRequest      # Form request (validation)
php artisan make:middleware NameMiddleware # Middleware
php artisan make:command Name             # Custom artisan command
```

### Debugging
```bash
php artisan route:list            # List all registered routes
php artisan tinker                # Interactive REPL with full app context
php artisan about                 # Show app environment summary
php artisan pail                  # Tail application logs (real-time)
```

---

## NPM Commands

```bash
npm install          # Install all JS dependencies
npm run dev          # Start Vite dev server (HMR)
npm run build        # Production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting without writing
```

---