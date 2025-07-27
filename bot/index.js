require('dotenv').config();
const { Client, GatewayIntentBits, Routes, REST } = require('discord.js');

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = process.env.DISCORD_TOKEN;

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

// Listen for interactions (slash commands)
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


// Login to Discord with your client's token
client.login(TOKEN);
