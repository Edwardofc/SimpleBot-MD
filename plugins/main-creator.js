let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Edward;;\nFN:Ian⁩\nORG:Edward⁩\nTITLE:\nitem1.TEL;waid=51997384622:51997384622\nitem1.X-ABLabel:\nX-WA-BIZ-DESCRIPTION:Creador Oficial\nX-WA-BIZ-NAME:Edward\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Edward⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['owner']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
