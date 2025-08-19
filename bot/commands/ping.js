const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    const reply = await interaction.reply({ content: 'Pong!', fetchReply: true });
    const latencyMs = reply.createdTimestamp - interaction.createdTimestamp;
    const websocketMs = Math.round(interaction.client.ws.ping);
    await interaction.followUp(`Latency: ${latencyMs}ms | WebSocket: ${websocketMs}ms`);
  },
};




