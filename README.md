# TikTok Clone

This learning project recreates the TikTok interface and several core features with React, Node.js, and MongoDB. Some features are still unfinished.

## Main Features

- Video feed, user profiles, and a following page.
- Registration, login, and video uploads.
- Content pages organized by music and hashtags.
- An admin dashboard for accounts, users, videos, music, and hashtags.

## Main Pages

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | Main recommended-video feed. |
| Following | `/following` | Videos and accounts followed by the current user. |
| Profile | `/:nickname` | Public profile and the user's videos. |
| Video detail | `/:nickname/video/:id` | Video player, metadata, and comments. |
| Music | `/music/:name-:id` | Videos associated with a music track. |
| Hashtag | `/tag/:name` | Videos associated with a hashtag. |
| Upload | `/upload` | Upload a new video. |
| Live | `/live` | Live page placeholder. |
| Login | `/login` | Choose a login method. |
| Email/phone login | `/login/phone-or-email` | Log in with an email address or phone number. |
| Register | `/register` | Choose a registration method. |
| Email/phone registration | `/register/phone-or-email` | Create a new account. |
| Forgot password | `/login/forget-password` | Password recovery page. |

## Admin Dashboard

The project includes an admin dashboard. Visiting `/admin/dashboard` redirects to account management. The login flow also redirects accounts whose role is not `user` to the dashboard.

| Dashboard page | Route |
| --- | --- |
| Account management | `/admin/dashboard/manageAccount` |
| User management | `/admin/dashboard/manageUser` |
| Video management | `/admin/dashboard/manageVideo` |
| Music management | `/admin/dashboard/manageMusic` |
| Trending/hashtag management | `/admin/dashboard/manageTrendy` |
| Request/report management | `/admin/dashboard/manageReport` |
| Statistics | `/admin/dashboard/manageTotal` |

Dashboard data and actions require the backend, MongoDB, and a valid access token. The frontend routes themselves do not currently include a dedicated route guard.

## Tech Stack

- Frontend: React 18, React Router, Sass, Material UI, and Axios.
- Backend: Node.js, Express, JWT, and Multer.
- Database: MongoDB with Mongoose.

## Project Structure

- `client/`: React frontend and build configuration.
- `server/`: Express API, data processing, and media file storage.

## Running Locally

You need Node.js, npm, and MongoDB. Copy `client/.env.example` to `client/.env` and `server/.env.example` to `server/.env`, then adjust the values for your local environment and replace the sample JWT secret. The backend uses `PORT`, `PORT_MONGO`, `DATABASE_NAME`, and `SECRECT_JWT` (spelled as it appears in the source code). Several frontend requests use `http://localhost:5000`, so keep the backend on port 5000 for the existing setup.

Local environment files and uploaded media in `server/Public` are excluded from Git. Existing database records and uploaded files need to be restored separately if you want to use the original data.

From the directory containing this README, open a terminal and start the backend:

```bash
cd server
npm install
npm start
```

Open another terminal in the same directory and start the frontend:

```bash
cd client
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app. Features that access application data require the backend and MongoDB to be running.

## Building the Frontend

Run this command inside the `client` directory:

```bash
npm run build
```

The production build is generated in `client/build`. To run the development server, use `npm start`.

## Notes

This project was created for learning. It uses dependencies from 2022, so installing or building it in a newer environment may produce compatibility warnings.
