require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');

// Collect command JSON from files in bot/commands
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
if (fs.existsSync(commandsPath)) {
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter(fileName => fileName.endsWith('.js'));

  for (const fileName of commandFiles) {
    const filePath = path.join(commandsPath, fileName);
    const command = require(filePath);
    if (command && command.data && typeof command.data.toJSON === 'function') {
      commands.push(command.data.toJSON());
    }
  }
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    const clientId = process.env.CLIENT_ID;
    const guildId = process.env.GUILD_ID;
    if (!clientId) {
      throw new Error('CLIENT_ID is not set in environment');
    }

    console.log('Started refreshing application (/) commands.');

    if (guildId) {
      await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: commands },
      );
      console.log('Successfully reloaded GUILD application (/) commands.');
    } else {
      await rest.put(
        Routes.applicationCommands(clientId),
        { body: commands },
      );
      console.log('Successfully reloaded GLOBAL application (/) commands.');
    }
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();