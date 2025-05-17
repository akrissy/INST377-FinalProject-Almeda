# GameMatch: Personalized Video Game Recommender

## Final Report

### Project Title
**GameMatch: Personalized Video Game Recommender**

### Short Description
GameMatch helps players find video games they’ll actually enjoy. Instead of relying on generic popularity lists, our site recommends games based on each user’s favorite genres, platforms, and play styles. You can also team up with friends to discover multiplayer games you’ll both love using our Discover Together feature. 

We pull game data from RAWG, IGDB, Steam, and YouTube to give you detailed info, reviews, and trailers all in one place. GameMatch saves you time and makes your next game night more fun.

### Target Browsers
- Google Chrome (latest)
- Mozilla Firefox (latest)
- iOS Safari (iPhone and iPad)
- Android Chrome

---

## Developer Manual

### 1. How to Install the App and Dependencies
```bash
git clone https://github.com/YOUR_USERNAME/gamematch.git
cd gamematch
npm install
```
Create `.env` files:
- **client/.env**
```
VITE_RAWG_API_KEY=your_rawg_key
VITE_YOUTUBE_API_KEY=your_youtube_key
```
- **server/.env**
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 2. How to Run Locally
```bash
cd server
npm install
node index.js
```
```bash
cd client
npm install
npm run dev
```
Visit `http://localhost:5173`

### 3. How to Deploy
Frontend: Vercel
Backend: Render or Railway

### 4. How to Run Any Tests
N/A (manual testing only)

### 5. API Endpoints
**GET /api/preferences/:userId** – returns stored genres/platforms  
**POST /api/preferences** – saves preferences to Supabase
```json
{
  "userId": "andrea123",
  "genres": ["action"],
  "platforms": ["4"]
}
```

### 6. Known Bugs and Roadmap
- YouTube API sometimes fails rate limits
- Add Firebase login in future
- Improve multiplayer filtering by shared tags

---

## Pages and Features

### Homepage (`/`)
- Shows trending games from RAWG
- Each game links to detailed trailer page

### Recommend Page (`/recommend`)
- Genre + platform filters
- Saves preferences to backend

### Multiplayer Page (`/multiplayer`)
- Finds multiplayer games with genre filters

### Game Details Page (`/game/:id`)
- Displays game info and trailers from YouTube

### Navbar
- Links to all main pages
- Includes GameMatch logo

### Backend (Express + Supabase)
- Stores user preferences (genres and platforms)
- Fetch and save with two REST API endpoints

---

## File Tree (Simplified)
```
gamematch/
├── client/
│   ├── src/pages/
│   │   ├── Homepage.jsx
│   │   ├── RecommendPage.jsx
│   │   ├── MultiplayerPage.jsx
│   │   └── GameDetails.jsx
│   ├── src/components/Navbar.jsx
│   ├── src/assets/gamematch-logo.png
│   ├── App.jsx
│   └── .env
├── server/
│   ├── index.js
│   └── .env
└── docs/README.md (this file)
```

---

## Final Notes
- All frontend code is in React + Tailwind CSS
- Backend built with Express + Supabase
- Deployed frontend to Vercel and backend to Railway
- Used RAWG, IGDB, Steam, and YouTube APIs
