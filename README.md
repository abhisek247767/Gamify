
# 🕹️ GAMIFY — Turn Any Goal into a Game

<div align="center">

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/API-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Discord.js](https://img.shields.io/badge/Bot-Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**🎯 An open-source platform to gamify productivity, collaboration, and community engagement.**

[![Stars](https://img.shields.io/github/stars/gollabharath/gamify?style=social)](https://github.com/gollabharath/gamify/stargazers)
[![Forks](https://img.shields.io/github/forks/gollabharath/gamify?style=social)](https://github.com/gollabharath/gamify/forks)
[![Issues](https://img.shields.io/github/issues/gollabharath/gamify)](https://github.com/gollabharath/gamify/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/gollabharath/gamify)](https://github.com/gollabharath/gamify/pulls)

</div>

---

## 📊 Project Statistics

<div align="center">

<table>
<tr>
<td align="center">
<img src="https://img.shields.io/github/stars/gollabharath/gamify?style=social" alt="GitHub Stars">
<br><b>Stars</b>
</td>
<td align="center">
<img src="https://img.shields.io/github/forks/gollabharath/gamify?style=social" alt="GitHub Forks">
<br><b>Forks</b>
</td>
<td align="center">
<img src="https://img.shields.io/github/issues/gollabharath/gamify" alt="GitHub Issues">
<br><b>Issues</b>
</td>
<td align="center">
<img src="https://img.shields.io/github/issues-pr/gollabharath/gamify" alt="GitHub Pull Requests">
<br><b>Pull Requests</b>
</td>
<td align="center">
<img src="https://img.shields.io/github/contributors/gollabharath/gamify" alt="GitHub Contributors">
<br><b>Contributors</b>
</td>
</tr>
</table>

</div>

---

## 💡 Why Choose Gamify?

- 🆓 **Free & Open-Source** — MIT licensed and community-driven  
- 🛠️ **Fully Self-Hostable** — Complete control over your data and deployment  
- 🌍 **Multi-Platform** — Web dashboard and Discord integration  
- 🧱 **Modular Architecture** — Easy to customize and extend  
- 🎮 **Gamify Anything** — From study groups to corporate teams  
- 🧑‍🤝‍🧑 **Built for Teams & Communities** — Role-based collaboration baked in

---

## 🚀 Core Features

- 🎯 **Event Creation** — Define your own events, tasks, and currency system  
- 👥 **Role-Based Permissions** — Owners, Admins, Moderators, Members  
- ✅ **Task Management** — Admins create tasks, moderators verify them  
- 🎁 **Reward Store** — Members redeem points for real or virtual rewards  
- 🖥️ **Web Dashboard** — Full-featured dashboard for managing events  
- 🤖 **Discord Bot** — Seamless interaction with Discord for members

---

## 🖼️ Screenshots

<div align="center">

<table>
<tr>
<td align="center">
<img src="https://via.placeholder.com/400x250.png?text=Web+Dashboard" width="100%">
<br><i>📊 Web Dashboard</i>
</td>
<td align="center">
<img src="https://via.placeholder.com/400x250.png?text=Discord+Bot" width="100%">
<br><i>🤖 Discord Bot Integration</i>
</td>
</tr>
</table>

</div>

---

## 🧱 Tech Stack & Architecture

<div align="center">

<table>
<tr>
<th>Directory</th>
<th>Description</th>
<th>Technology</th>
</tr>

<tr>
<td><code>client/</code></td>
<td>Frontend UI built with React</td>
<td>React, Tailwind CSS</td>
</tr>

<tr>
<td><code>server/</code></td>
<td>RESTful API backend</td>
<td>Node.js, Express</td>
</tr>

<tr>
<td><code>bot/</code></td>
<td>Discord companion bot</td>
<td>Discord.js</td>
</tr>

<tr>
<td><code>Database</code></td>
<td>Stores events, users, tasks, and rewards</td>
<td>MongoDB</td>
</tr>
</table>

</div>

---

## ⚡ Quick Start / Installation

### Prerequisites

- Node.js (v16+)
- MongoDB (Atlas or local)
- A Discord Bot Token ([Get one here](https://discord.com/developers/applications))

### 1. Clone the Repository

```bash
git clone https://github.com/gollabharath/gamify.git
cd gamify
```

### 2. Install Dependencies

```bash
cd client && npm install
cd ../server && npm install
cd ../bot && npm install
```

### 3. Setup Environment Variables

Create `.env` files in `client/`, `server/`, and `bot/` directories.

#### Example: `server/.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

#### Example: `bot/.env`

```env
DISCORD_TOKEN=your_discord_bot_token
GUILD_ID=your_guild_id
API_URL=http://localhost:5000
```

### 4. Run the App

#### In separate terminals:

```bash
# Terminal 1
cd server && npm run dev

# Terminal 2
cd client && npm run dev

# Terminal 3
cd bot && node index.js
```

---

## 🤝 Contributing

We love contributions from the community! To contribute:

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request

> For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](https://github.com/gollabharath/gamify/blob/main/LICENSE) file for details.

<div align="center">

![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>
