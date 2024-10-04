import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/YpDfP.jpeg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `╰⊱☁≺ *${botname}* \n「 Bιҽɳʋҽɳιԃσ 」\n「  @${m.messageStubParameters[0].split`@`[0]}  」\n「 ${groupMetadata.subject} 」\n「 Dιʂϝɾυƚҽ ʂҽ ҽʂƚαԃια 」`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `╰⊱☁≺ *${botname}* \n「 Hαʂƚα ʅυҽɠσ 」\n「  @${m.messageStubParameters[0].split`@`[0]}  」\n「 ${groupMetadata.subject} 」\n「 Vυҽʅʋҽ ρɾσɳƚσ 」`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `╰⊱☁≺ *${botname}* \n「 Sҽ ҽʅιɱιɳσ 」\n「  @${m.messageStubParameters[0].split`@`[0]}  」\n「 ${groupMetadata.subject} 」\n「 Aԃισʂ 」`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
