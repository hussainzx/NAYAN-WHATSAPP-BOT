module.exports = {
  event: 'promote',
  handle: async ({ api, event }) => {
    const promotedMembers = event.participants;
    console.log(event);
    for (const member of promotedMembers) {
      await api.sendMessage(event.id, {
        text: `🎉 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs @${member.split('@')[0]}! ʏᴏᴜ ᴀʀᴇ ɴᴏᴡ ᴛʜɪs ɢʀᴏᴜᴘᴇ ᴀᴅᴍɪɴ 🌟 ɪ ʜᴏᴘᴇ ʏᴏᴜ ғʟᴏᴡ ᴛʜɪs ɢʀᴏᴜᴘ ʀᴜʟʟs🌟😊`,
        mentions: [member]
      });
    }
  }
};
