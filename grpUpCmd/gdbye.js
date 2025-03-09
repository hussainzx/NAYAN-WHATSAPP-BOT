module.exports = {
  event: 'remove',
  handle: async ({ api, event }) => {
    const removedMembers = event.participants;
    for (const member of removedMembers) {
      await api.sendMessage(event.id, {
        text: `ɢᴏᴏᴅ ʙʏᴇ ʙᴇᴘ @${member.split('@')[0]}, ᴡᴇ'ʟʟ ᴍɪss ʏᴏᴜ ᴀʟʟᴀʜ ʜᴀғғᴇᴢ🤗🍂!`,
        mentions: [member]
      });
    }
  }
};
