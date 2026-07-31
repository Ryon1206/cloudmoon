# CloudMoon Web Gaming Portal

CloudMoon Web Gaming Portal - High performance web gaming portal supporting HD, 60 FPS, Unlimited Play Time, and No Ads.

## Features
- ⏱ **Unlimited Play Time**: Play games without time limits.
- 🚫 **No Ads**: Clean interface with ad blocking enabled.
- 🚀 **Direct Game Launch**: "Enter Game" modal bypassed for auto-start.
- 📺 **HD Quality & 60 FPS**: Crisp HD video streaming at 60 FPS.
- ✖ **Exit Confirmation**: Quit game anytime with a confirmation popup returning to the games list.

## Deployment Instructions

### 1. Vercel Deployment
1. Push this repository to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect `vercel.json` and deploy your app.

### 2. Render Deployment
1. Push this repository to GitHub.
2. Log in to [Render](https://render.com/) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Select **Node** as the environment.
5. Set Build Command: `npm install`
6. Set Start Command: `npm start`
7. Click **Create Web Service**.

## Local Development
```bash
npm install
npm start
```
Open `http://localhost:3000` in your browser.
