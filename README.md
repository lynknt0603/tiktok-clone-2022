# TikTok Clone

This learning project recreates the TikTok interface and several of its core features with React, Node.js, and MongoDB.

The original source code was created in 2022 and remains close to its initial structure. A small number of maintenance changes have been made so the project can be installed, run, and built again with current Node.js environments. Some warnings from older dependencies may still appear, but they do not prevent a successful build.

## Maintenance Updates

- Removed personal attribution left in the interface and source code.
- Added environment examples, setup documentation, and complete build instructions.
- Fixed loading states so the interface no longer displays skeletons indefinitely when an API request fails.
- Removed artificial delays when loading videos and sidebar data.
- Added an automatic demo mode for environments without MongoDB.
- Included a minimal demo media set so the project works immediately after cloning.
- Added backend URL configuration through `REACT_APP_BASE_URL`.

## Main Features

- Recommended video feed.
- Following feed.
- User profiles and video lists.
- Video details, comments, likes, and sharing.
- Registration, login, and password recovery.
- Video uploads.
- Music and hashtag pages.
- Admin dashboard for accounts, users, videos, music, trends, requests, and statistics.

## Main Pages

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | Recommended video feed. |
| Following | `/following` | Videos from followed accounts. |
| Profile | `/:nickname` | User information and uploaded videos. |
| Video details | `/:nickname/video/:id` | Video player, metadata, and comments. |
| Music | `/music/:name-:id` | Videos that use a specific sound. |
| Hashtag | `/tag/:name` | Videos associated with a hashtag. |
| Upload | `/upload` | Upload a new video. |
| Live | `/live` | Live page placeholder. |
| Login | `/login` | Select a login method. |
| Email or phone login | `/login/phone-or-email` | Login form. |
| Register | `/register` | Select a registration method. |
| Email or phone registration | `/register/phone-or-email` | Account registration form. |
| Forgot password | `/login/forget-password` | Password recovery interface. |

## Admin Dashboard

The project includes an admin dashboard at `/admin/dashboard`. This route redirects to account management. The login flow sends accounts whose role is not `user` to the dashboard.

| Feature | Route |
| --- | --- |
| Account management | `/admin/dashboard/manageAccount` |
| User management | `/admin/dashboard/manageUser` |
| Video management | `/admin/dashboard/manageVideo` |
| Music management | `/admin/dashboard/manageMusic` |
| Trend and hashtag management | `/admin/dashboard/manageTrendy` |
| Request management | `/admin/dashboard/manageReport` |
| Statistics | `/admin/dashboard/manageTotal` |

Administrative operations require the backend, MongoDB, and a valid access token. The frontend does not currently have a dedicated route guard for the dashboard routes.

## Technology Stack

- Frontend: React 18, React Router, Sass, Material UI, and Axios.
- Backend: Node.js, Express, JWT, Multer, and Mongoose.
- Database: MongoDB.

## Project Structure

```text
client/                 React frontend and build configuration
server/                 Express API
server/demo-assets/     Minimal media set used by demo mode
server/Public/          Local and uploaded media, excluded from Git
```

## Requirements

- Node.js 18 or newer.
- npm.
- MongoDB on port `27017` for real data and write operations.

MongoDB is optional if you only want to explore the interface and demo videos.

## First-Time Setup

Clone the repository and enter the project directory:

```bash
git clone https://github.com/lynknt0603/tiktok-clone-2022.git
cd tiktok-clone-2022
```

### 1. Install and run the backend

```bash
cd server
npm ci
```

Create `server/.env` from `server/.env.example`. On PowerShell:

```powershell
Copy-Item .env.example .env
```

Default configuration:

```env
PORT=5000
PORT_MONGO=27017
DATABASE_NAME=tiktok
SECRECT_JWT=replace-with-your-own-random-secret
```

Replace `SECRECT_JWT` with your own secret when using real authentication. The `SECRECT_JWT` spelling is intentionally preserved because it matches the current source code.

Start the backend:

```bash
npm start
```

The backend runs at [http://localhost:5000](http://localhost:5000).

### 2. Install and run the frontend

Open a second terminal in the project directory:

```bash
cd client
npm ci
```

Create `client/.env` from `client/.env.example`. On PowerShell:

```powershell
Copy-Item .env.example .env
```

Default value:

```env
REACT_APP_BASE_URL=http://localhost:5000
```

Start the frontend in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Demo Mode Without MongoDB

If MongoDB is unavailable, the backend automatically serves demo data from the main read-only APIs. The home feed, videos, suggested accounts, hashtags, and music remain available through media stored in `server/demo-assets`.

Both the backend and frontend must still be running. Write operations such as registration, login, uploads, follows, and likes require MongoDB.

## Running With MongoDB

1. Install and start MongoDB at `localhost:27017`.
2. Keep `DATABASE_NAME=tiktok`, or replace it with your preferred database name.
3. Restart the backend.
4. Import the original data if you have a backup. This repository does not include the original database dump.

Once MongoDB connects successfully, the API automatically uses database records instead of demo data.

## Production Frontend Build

Install the frontend dependencies and create the optimized build:

```bash
cd client
npm ci
npm run build
```

The production output is generated in `client/build`. A successful build may still display warnings about ESLint, an outdated Browserslist database, or bundle size.

To preview the production build:

```bash
npx serve -s build -l 3000
```

Keep the backend running in another terminal:

```bash
cd server
npm start
```

If the backend is deployed at a different address, create `client/.env.production` before building:

```env
REACT_APP_BASE_URL=https://api.example.com
```

Run `npm run build` again after changing the environment configuration. Some older actions in the project still reference `localhost:5000` directly and require additional cleanup for a complete production deployment.

## Verified Build

The current version was verified with:

```bash
cd client
npm run build
```

The command completes successfully and generates `client/build`. The remaining warnings do not block the build.

## Notes

This is a learning project that uses several dependencies from 2022. Demo mode is intended for exploring the interface and sample videos; it is not a full replacement for the application database.
