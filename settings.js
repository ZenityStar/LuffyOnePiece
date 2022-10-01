//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6285607831410']
global.premium = ['6285607831410']
global.ownernomer = '6285607831410'
global.ownername = 'Rull 𖤍'
global.botname = 'LuffyBot‡'
global.footer = '©Luffy Bot By Rull.'
global.ig = 'https://instagram.com'
global.region = 'Anime, Isekai, barat'
global.sc = 'https://github.com'
global.myweb = 'https://nekopoi.care'
global.packname = ''
global.author = 'LuffyBot 𖤍'
global.sessionName = 'luffy'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'Fitur Ini Hanya Untuk Admin!',
    botAdmin: 'Bot Harus Admin Dulu!',
    owner: 'Fitur Ini Hanya Untuk Owner!',
    group: 'Fitur Hanya Bisa Digunakan Di Grup!',
    private: 'Fitur Hanya Digunakan Untuk Obrolan Pribadi!',
    bot: 'Fitur Ini Hanya Untuk Bot',
    wait: 'Tunggu sebentar...',
    error: 'Kesalahan! Mungkin Api Key Sudah Kadaluarsa🤔!',
    endLimit: 'Batas Harian Anda Telah Kedaluwarsa, Batas Akan Direset Setiap 12 Jam',
}
    global.limitawal = {
    premium: "Infinity",
    free: 15,
    monayawal: 0
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
