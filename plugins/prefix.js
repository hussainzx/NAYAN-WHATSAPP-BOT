module.exports = {
  config: {
    name: "prefix",
    aliases: ["currentprefix"],
    permission: 0,
    prefix: 'both',
    categorie: "Utility",
    credit: "Developed by Mohammad Nayan",
    description: "Displays the bot's current prefix.",
    usages: [
      `${global.config.PREFIX}prefix - Shows the current bot prefix.`,
      `${global.config.PREFIX}currentprefix - Alias for displaying the bot prefix.`,
    ],
  },
  start: async ({ event, api }) => {
    const currentPrefix = global.config.PREFIX;
    const message = `🔰 ʜᴇʏ ʙᴇᴘ ɪ ᴀᴍ ɪᴛᴀᴄʜɪ ᴜᴄʜɪʜᴀ 🌟 ᴍʏ xʀᴇᴀᴛᴏʀ ᴍʀ ʜᴜssᴀɪɴ💀 ɪᴛᴀᴄʜɪ ᴄʜᴀᴛ ʙᴏᴛ ᴘʀᴇғɪx [ , ]👑: \`${currentPrefix}\``;
    await api.sendMessage(event.threadId, { text: message });
  },
};
