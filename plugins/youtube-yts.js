import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'What are you looking for?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video š„', usedPrefix + 'ytv ' + v.url + ' yes', '\nā *Duration:* ' + v.durationH + '\nā²ļø *Uploaded:* ' + v.publishedTime + '\nšļø *Views:* ' + v.view + '\nš *Url:* ' + v.url],
          ['Audio š§', usedPrefix + 'yta ' + v.url + ' yes', '\nā *Duration:* ' + v.durationH + '\nā²ļø *Uploaded:* ' + v.publishedTime + '\nšļø *Views:* ' + v.view + '\nš *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*āāāć Youtube Search ćāāā*', `Please select the type below... \n*The text you requested:* ${text}\n\nRetype *${usedPrefix + command}* Your text to change the text again`, author, `YouTube Search š`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
