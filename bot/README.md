## Discord bot commands setup

### Prerequisites
- Create a Discord application and bot, invite it with scopes: `bot applications.commands`.
- In the Dev Portal, enable the intents you use. This project uses `Guilds`, `GuildMessages`, and `MessageContent`.

### Quick start

```
npm install
# set env in bot/.env (see below)
npm run deploy:commands
npm run start
```

### Environment
Create a `.env` file in `bot/` with:

```
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_bot_client_id_here
GUILD_ID=your_test_server_id_here
```

### Scripts
- `npm run start`: start the bot
- `npm run dev`: start with auto-reload (nodemon)
- `npm run deploy:commands`: register slash commands (run this after adding/editing commands)

### Folder structure
- `commands/`: One file per slash command exporting `{ data, execute }`.
- `events/`: Discord event handlers exporting `{ name, once?, execute }`.
- `index.js`: Bootstraps the client, loads commands and events.
- `deploy-commands.js`: Registers slash commands from `commands/`.

### Create a new command
Add a file under `commands/`, for example `hello.js`:

```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Say hello'),
  async execute(interaction) {
    await interaction.reply('Hello!');
  },
};
```

Then register it and start the bot:

```
npm run deploy:commands
npm run start
```




