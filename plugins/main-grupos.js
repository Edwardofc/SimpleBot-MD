import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/HSyrJ.jpeg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `GRUPOS OFICIALES

1-Grupo
Sιɱρʅҽ-Bσƚ
*✰* ${group}

-----------------------

Si el enlace no responde entre al canal.

2.-Canal :
Sιɱρʅҽ-Bσƚ
*✰* ${canal}

> ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
