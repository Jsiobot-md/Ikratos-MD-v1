let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}ββγ π΅π°Tag Allπ΅π° γ\n` + users.map(v => 'βπ΅π° @' + v.replace(/@.+/, '')).join`\n` + '\nβββββ', null, {
        mentions: users
    })
}

handler.help = ['o-tagall']
handler.tags = ['owner']
handler.command = ['o-tagall']
handler.owner = true
handler.group = true

export default handler
