module.exports = {
  event: 'demote',
  handle: async ({ api, event }) => {
    const demotedMembers = event.participants;
    console.log(event);
    for (const member of demotedMembers) {
      await api.sendMessage(event.id, {
        text: `😿 @${member.split('@')[0]} ɪss ᴘᴀᴋɴᴀᴍɪʀ ᴋᴀʀᴏɴᴇ ᴀᴅᴍɪɴ ᴛᴇᴋᴇ ʀᴇᴍᴏᴠᴇ ᴋᴀɪʟᴏ!`,
        mentions: [member]
      });
    }
  }
};
