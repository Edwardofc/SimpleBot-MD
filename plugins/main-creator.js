let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Ian;;\nFN:Ian⁩\nORG:Ian⁩\nTITLE:\nitem1.TEL;waid=5493405480284:5493405480284\nitem1.X-ABLabel:\nX-WA-BIZ-DESCRIPTION:Solo consultas sobre la bot\nX-WA-BIZ-NAME:Ian\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Ian⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
