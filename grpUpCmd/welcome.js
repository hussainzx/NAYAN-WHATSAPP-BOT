module.exports = {
  event: 'add',
  handle: async ({ api, event }) => {
    const newMembers = event.participants;
    for (const member of newMembers) {
      await api.sendMessage(event.id, {
        text: `🎉 『 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 』 🎉\n\n💠 𝗛𝗲𝘆 𝗦𝗶𝗿 / 𝗺𝗲𝗺!\n🔹 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗮𝗱𝗱𝗮 𝘇𝗼𝗻𝗲🌟🌷\n⏳ 𝗧𝗶𝗺𝗲 𝗳𝗼𝗿 𝘀𝗼𝗺𝗲 𝗳𝘂𝗻! 𝗛𝗮𝘃𝗲 𝗮 𝗻𝗶𝗰𝗲 𝗱𝗮𝘆 🎊\n\n⚠ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗳𝗼𝗹𝗹𝗼𝘄 𝗮𝗹𝗹 𝗴𝗿𝗼𝘂𝗽 𝗿𝘂𝗹𝗲𝘀! 🚀 𝗠𝗬 𝗖𝗥𝗘𝗔𝗧𝗜𝗥   🌊𝗛𝗨𝗦𝗦𝗔𝗜𝗡 7𝗫🌊`,
        mentions: [member]
      });
    }
  }
};
