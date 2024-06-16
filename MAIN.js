require('./CONFIG')
const {
    default: WADefault,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    makeCacheableSignalKeyStore, PHONENUMBER_MCC
} = global.baileys
const NodeCache = require("node-cache")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const pino = require('pino')
const chalk = require('chalk')
const figlet = require("figlet");
const pairingCode = true
const useMobile = false
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const {
    Boom
} = require('@hapi/boom')
const fs = require('fs')
const axios = require('axios')
const FileType = require('file-type')
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber')
const path = require('path')
const {
    smsg,
    getBuffer,
    fetchJson,
    TelegraPh
} = require('./LIB/simple')
const {
    isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome
} = require("./LIB/store")
const {
    toAudio,
    toPTT,
    toVideo
} = require('./LIB/converter')
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExif
} = require('./LIB/exif')
let setwelcomedb = JSON.parse(fs.readFileSync('./DATABASE/setwelcome.json'));
let setleftdb = JSON.parse(fs.readFileSync('./DATABASE/setleft.json'));
let welcome = JSON.parse(fs.readFileSync('./DATABASE/welcome.json'));
let left = JSON.parse(fs.readFileSync('./DATABASE/left.json'));
let setopen = JSON.parse(fs.readFileSync('./DATABASE/setopen.json'));
let setclose = JSON.parse(fs.readFileSync('./DATABASE/setclose.json'));
let antilinkgc = JSON.parse(fs.readFileSync('./DATABASE/antilinkgc.json'));

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')

nolan.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await nolan.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

function nocache(module, cb = () => {}) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        }
        catch (e) {
            reject(e)
        }
    })
}

async function Botstarted() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(`./${sessionName}`)
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const msgRetryCounterCache = new NodeCache()
    const nolan = WADefault({
        version,
        logger: pino({ level: "fatal" }).child({ level: "fatal" }),
        printQRInTerminal: !pairingCode,
        mobile: useMobile, 
        browser: ["Ubuntu","Chrome","20.0.04"],
        auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
	    generateHighQualityLinkPreview: true, 
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, 
      defaultQueryTimeoutMs: undefined,

    })
function _0x2b51() {
    const _0x57f1cb = [
        '6|2|4|1|7|',
        '4026532VMdXOd',
        '3XpqEiT',
        'match',
        'registered',
        'dYMzQ',
        'log',
        '11124420EpRYih',
        '\x20pairing\x20c',
        'kyhGZ',
        '350724qNLMHh',
        'join',
        'messages',
        'Masukkan\x20N',
        'textSync',
        'status@bro',
        'some',
        'fromMe',
        'exit',
        'startsWith',
        'requestPai',
        'adcast',
        'bgBlack',
        'replace',
        'psert',
        './NOLAN',
        'o\x20WhatsApp',
        'PQWEh',
        'wedjI',
        'remoteJid',
        'redBright',
        'key',
        'type',
        'eRrNs',
        '3|5|0',
        'length',
        '1184100wmhKlk',
        'creds',
        'Bqkgb',
        '5311430qboghH',
        'vLLSS',
        'Cannot\x20use',
        'Pairing\x20:\x20',
        'ephemeralM',
        'ringCode',
        '\x22\x20Telah\x20di',
        '14uEfBcE',
        'keys',
        '275580HVFrGX',
        'bold',
        'split',
        'obile\x20api',
        '429UcBhXs',
        'messages.u',
        'close',
        'update!',
        'green',
        '1FulmsN',
        'REREZ\x20HOSTING BO',
        'notify',
        'essage',
        'default',
        '\x20HOSTING:\x0a',
        'eEsOf',
        'ode\x20with\x20m',
        'ahMDe',
        'Standard',
        'authState',
        '56yymxEP',
        'Your\x20Code\x20',
        'bind',
        'BAE5',
        './CONFIG',
        'zjaji',
        'public',
        'message',
        '1954382UCplux'
    ];
    _0x2b51 = function () {
        return _0x57f1cb;
    };
    return _0x2b51();
}
const _0x14cc30 = _0x3cba;
(function (_0x391ed3, _0x1da354) {
    const _0x237113 = _0x3cba, _0x3e2607 = _0x391ed3();
    while (!![]) {
        try {
            const _0x3c4cb4 = -parseInt(_0x237113(0x1fd)) / (0x44b * -0x2 + -0x1 * 0x973 + 0x120a) * (-parseInt(_0x237113(0x210)) / (0xc86 + 0x163d + -0x22c1)) + -parseInt(_0x237113(0x213)) / (0xe58 + -0x2 * 0xc7d + 0xaa5) * (-parseInt(_0x237113(0x212)) / (0x20df + -0x3c6 + -0x5d1 * 0x5)) + parseInt(_0x237113(0x1eb)) / (0x1a05 + -0x237b + 0x97b * 0x1) + -parseInt(_0x237113(0x1e8)) / (0x1a86 + 0x5 * -0x21e + -0xfea) * (parseInt(_0x237113(0x1f2)) / (-0x102b + -0x8d6 + 0x1908)) + parseInt(_0x237113(0x208)) / (0x23df + 0x17d1 + -0x14c * 0x2e) * (parseInt(_0x237113(0x1f4)) / (-0x1ed8 + 0x7cd * -0x1 + 0x1 * 0x26ae)) + -parseInt(_0x237113(0x218)) / (0x17e * 0x17 + 0x1b38 + 0x3 * -0x1480) + parseInt(_0x237113(0x1f8)) / (-0x964 + -0x1505 + 0x1e74) * (-parseInt(_0x237113(0x21b)) / (-0x17e4 + 0x25d4 + -0xde4));
            if (_0x3c4cb4 === _0x1da354)
                break;
            else
                _0x3e2607['push'](_0x3e2607['shift']());
        } catch (_0x47441c) {
            _0x3e2607['push'](_0x3e2607['shift']());
        }
    }
}(_0x2b51, -0xd44cc * 0x1 + 0x10a9b8 + -0x1 * -0x5f763), require(_0x14cc30(0x1dd)), nocache(_0x14cc30(0x1dd), _0x8235d8 => console[_0x14cc30(0x217)]('\x20\x22' + _0x8235d8 + (_0x14cc30(0x1f1) + _0x14cc30(0x1fb)))), nocache(_0x14cc30(0x20c), _0xd4b82e => console[_0x14cc30(0x217)]('\x20\x22' + _0xd4b82e + (_0x14cc30(0x1f1) + _0x14cc30(0x1fb)))), console[_0x14cc30(0x217)](chalk[_0x14cc30(0x1f5)][_0x14cc30(0x1fc)](figlet[_0x14cc30(0x21f)](_0x14cc30(0x1fe) + 't', {
    'font': _0x14cc30(0x206),
    'horizontalLayout': _0x14cc30(0x201),
    'verticalLayout': _0x14cc30(0x201),
    'width': 0x50,
    'whitespaceBreak': ![]
}))), store[_0x14cc30(0x20a)](nolan['ev']), nolan['ev']['on'](_0x14cc30(0x1f9) + _0x14cc30(0x1dc), async _0x9f9a12 => {
    const _0x13276f = _0x14cc30, _0x5c661d = {
            'kyhGZ': _0x13276f(0x211) + _0x13276f(0x1e6),
            'PQWEh': function (_0x226139, _0x474952) {
                return _0x226139(_0x474952);
            },
            'dYMzQ': _0x13276f(0x1dd),
            'eEsOf': function (_0x1c74f3, _0x298124) {
                return _0x1c74f3 === _0x298124;
            },
            'vLLSS': _0x13276f(0x220) + _0x13276f(0x226),
            'wedjI': _0x13276f(0x20b),
            'zjaji': function (_0x30818e, _0x492f29) {
                return _0x30818e === _0x492f29;
            },
            'ahMDe': _0x13276f(0x1ef) + _0x13276f(0x200),
            'Bqkgb': function (_0x3caf2e, _0x3e6286, _0x2855ae, _0x45f51e) {
                return _0x3caf2e(_0x3e6286, _0x2855ae, _0x45f51e);
            },
            'eRrNs': _0x13276f(0x1ff)
        };
    try {
        const _0x4388de = _0x5c661d[_0x13276f(0x21a)][_0x13276f(0x1f6)]('|');
        let _0x39fec4 = -0xc38 + -0x1f6b + 0x2ba3;
        while (!![]) {
            switch (_0x4388de[_0x39fec4++]) {
            case '0':
                _0x5c661d[_0x13276f(0x1df)](require, _0x5c661d[_0x13276f(0x216)])(nolan, m, _0x9f9a12, store, antilinkgc, setwelcomedb, setleftdb, setopen, setclose, welcome, left);
                continue;
            case '1':
                if (mek[_0x13276f(0x1e3)] && _0x5c661d[_0x13276f(0x203)](mek[_0x13276f(0x1e3)][_0x13276f(0x1e1)], _0x5c661d[_0x13276f(0x1ec)]))
                    return;
                continue;
            case '2':
                if (!mek[_0x13276f(0x20f)])
                    return;
                continue;
            case '3':
                if (mek[_0x13276f(0x1e3)]['id'][_0x13276f(0x224)](_0x5c661d[_0x13276f(0x1e0)]) && _0x5c661d[_0x13276f(0x20d)](mek[_0x13276f(0x1e3)]['id'][_0x13276f(0x1e7)], -0x6ed * 0x5 + 0x4 * 0x290 + -0x1871 * -0x1))
                    return;
                continue;
            case '4':
                mek[_0x13276f(0x20f)] = _0x5c661d[_0x13276f(0x20d)](Object[_0x13276f(0x1f3)](mek[_0x13276f(0x20f)])[0x87a + 0x2405 + -0xed5 * 0x3], _0x5c661d[_0x13276f(0x205)]) ? mek[_0x13276f(0x20f)][_0x13276f(0x1ef) + _0x13276f(0x200)][_0x13276f(0x20f)] : mek[_0x13276f(0x20f)];
                continue;
            case '5':
                m = _0x5c661d[_0x13276f(0x1ea)](smsg, nolan, mek, store);
                continue;
            case '6':
                mek = _0x9f9a12[_0x13276f(0x21d)][0x233e + -0x9f8 * 0x1 + 0xa * -0x287];
                continue;
            case '7':
                if (!nolan[_0x13276f(0x20e)] && !mek[_0x13276f(0x1e3)][_0x13276f(0x222)] && _0x5c661d[_0x13276f(0x20d)](_0x9f9a12[_0x13276f(0x1e4)], _0x5c661d[_0x13276f(0x1e5)]))
                    return;
                continue;
            }
            break;
        }
    } catch (_0x3b6b01) {
        console[_0x13276f(0x217)](_0x3b6b01);
    }
}));
function _0x3cba(_0x3e9910, _0x53c6ee) {
    const _0x484db4 = _0x2b51();
    return _0x3cba = function (_0x32cd55, _0x3b4675) {
        _0x32cd55 = _0x32cd55 - (0x655 + -0x472 * -0x1 + -0x8ed);
        let _0x38d7dd = _0x484db4[_0x32cd55];
        return _0x38d7dd;
    }, _0x3cba(_0x3e9910, _0x53c6ee);
}
if (pairingCode && !nolan[_0x14cc30(0x207)][_0x14cc30(0x1e9)][_0x14cc30(0x215)]) {
    if (useMobile)
        throw new Error(_0x14cc30(0x1ed) + _0x14cc30(0x219) + _0x14cc30(0x204) + _0x14cc30(0x1f7));
    let phoneNumber;
    !!pairingNumber ? (phoneNumber = pairingNumber[_0x14cc30(0x1db)](/[^0-9]/g, ''), !Object[_0x14cc30(0x1f3)](PHONENUMBER_MCC)[_0x14cc30(0x221)](_0x2c3d8c => phoneNumber[_0x14cc30(0x224)](_0x2c3d8c)) && (console[_0x14cc30(0x217)](chalk[_0x14cc30(0x1da)](chalk[_0x14cc30(0x1e2)](_0x14cc30(0x21e) + _0x14cc30(0x1de) + _0x14cc30(0x202)))), process[_0x14cc30(0x223)](-0x1681 + -0x155d + 0x2bde))) : (phoneNumber = await question(_0x14cc30(0x21e) + _0x14cc30(0x1de) + _0x14cc30(0x202)), phoneNumber = phoneNumber[_0x14cc30(0x1db)](/[^0-9]/g, ''), !Object[_0x14cc30(0x1f3)](PHONENUMBER_MCC)[_0x14cc30(0x221)](_0x481f3b => phoneNumber[_0x14cc30(0x224)](_0x481f3b)) && (console[_0x14cc30(0x217)](chalk[_0x14cc30(0x1da)](chalk[_0x14cc30(0x1e2)](_0x14cc30(0x21e) + _0x14cc30(0x1de) + _0x14cc30(0x202)))), phoneNumber = await question(_0x14cc30(0x21e) + _0x14cc30(0x1de) + _0x14cc30(0x202)), phoneNumber = phoneNumber[_0x14cc30(0x1db)](/[^0-9]/g, ''), rl[_0x14cc30(0x1fa)]())), setTimeout(async () => {
        const _0x18f498 = _0x14cc30;
        let _0xe965a7 = await nolan[_0x18f498(0x225) + _0x18f498(0x1f0)](phoneNumber);
        _0xe965a7 = _0xe965a7?.[_0x18f498(0x214)](/.{1,4}/g)?.[_0x18f498(0x21c)]('-') || _0xe965a7, console[_0x18f498(0x217)](_0x18f498(0x209) + _0x18f498(0x1ee), _0xe965a7);
    }, 0x4 * 0x98b + 0xb37 + 0x1 * -0x25ab);
}
    nolan.ev.on('group-participants.update', async (anu) => {
        const isWelcome = welcome.includes(anu.id)
        const isLeft = left.includes(anu.id)
        try {
            let metadata = await nolan.groupMetadata(anu.id)
            let participants = anu.participants
            const groupName = metadata.subject
            const groupDesc = metadata.desc
            for (let num of participants) {
                try {
                    ppuser = await nolan.profilePictureUrl(num, 'image')
                }
                catch {
                    ppuser = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }

                try {
                    ppgroup = await nolan.profilePictureUrl(anu.id, 'image')
                }
                catch {
                    ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
                if (anu.action == 'add' && isWelcome) {
                    console.log(anu)
                    let welcome, ppu, ppgc;
                    let hmm = await getBuffer(ppuser)
                    let ff = await './MEDIA/ppuser-1.png'
                    await fs.writeFileSync(ff, hmm)
                    try {
                        ppu = await TelegraPh(ff)
                    }
                    catch {
                        ppu = "https://telegra.ph/file/0d50687b197cac991115e.jpg"
                    }
                    let hmm2 = await getBuffer(ppgroup)
                    let fff = await './MEDIA/ppgc-495.png'
                    await fs.writeFileSync(fff, hmm2)
                    try {
                        ppgc = await TelegraPh(fff)
                    }
                    catch {
                        ppgc = "https://telegra.ph/file/0d50687b197cac991115e.jpg"
                    }
                    let res = await fetch(`https://api.popcat.xyz/welcomecard?background=https://wallpapercave.com/wp/wp6897909.jpg&text1=Selamat+Datang&text2=${encodeURI(num.split("@")[0])}&text3=${metadata.subject}&avatar=${ppu}`)
                    try {
                        welcome = await res.buffer()
                    }
                    catch {
                        welcome = await getBuffer("https://telegra.ph/file/0d50687b197cac991115e.jpg")
                    }
                    if (isSetWelcome(anu.id, setwelcomedb)) {
                        var gettekswelcome = await getTextSetWelcome(anu.id, setwelcomedb)
                        var replace_pesan = (gettekswelcome.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                        nolan.sendMessage(anu.id, {image: welcome, caption: full_pesan, mentions: [num]}, {})
                    }
                    else {
                        nolan.sendMessage(anu.id, {image: welcome, caption: `Halo @${num.split("@")[0]}, Selamat datang di ${metadata.subject}`, mentions: [num]}, {})
                    }
                }
                else if (anu.action == 'remove' && isLeft) {
                    console.log(anu)
                    let goobye, ppu, ppgc;
                    let hmm = await getBuffer(ppuser)
                    let ff = await './MEDIA/ppuser-1.png'
                    await fs.writeFileSync(ff, hmm)
                    try {
                        ppu = await TelegraPh(ff)
                    }
                    catch {
                        ppu = "https://telegra.ph/file/0d50687b197cac991115e.jpg"
                    }
                    let hmm2 = await getBuffer(ppgroup)
                    let fff = await './MEDIA/ppgc-495.png'
                    await fs.writeFileSync(fff, hmm2)
                    try {
                        ppgc = await TelegraPh(fff)
                    }
                    catch {
                        ppgc = "https://telegra.ph/file/0d50687b197cac991115e.jpg"
                    }
                    let res = await fetch(`https://api.popcat.xyz/welcomecard?background=https://wallpapercave.com/wp/wp6897909.jpg&text1=Selamat+Tinggal&text2=${encodeURI(num.split("@")[0])}&text3=${metadata.subject}&avatar=${ppu}`)
                    try {
                        goobye = await res.buffer()
                    }
                    catch {
                        goobye = await getBuffer("https://telegra.ph/file/0d50687b197cac991115e.jpg")
                    }
                    if (isSetLeft(anu.id, setleftdb)) {
                        var getteksleft = await getTextSetLeft(anu.id, setleftdb)
                        var replace_pesan = (getteksleft.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                        nolan.sendMessage(anu.id, {image: goobye, caption: full_pesan, mentions: [num]}, {})
                    }
                    else {
                        nolan.sendMessage(anu.id, {image: goobye, caption: `Semoga betah ditempat lain yah @${num.split("@")[0]}`, mentions: [num]}, {})
                    }
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    })

    // Setting
    nolan.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        }
        else return jid
    }

    nolan.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = nolan.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    nolan.getName = (jid, withoutContact = false) => {
        id = nolan.decodeJid(jid)
        withoutContact = nolan.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = nolan.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === nolan.decodeJid(nolan.user.id) ?
            nolan.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    nolan.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
        for (let i of kon) {
            list.push({
                displayName: await nolan.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await nolan.getName(i + '@s.whatsapp.net')}\nFN:${await nolan.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            })
        }
        nolan.sendMessage(jid, {
            contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list
            },
            ...opts
        }, {
            quoted
        })
    }

    nolan.public = true

    nolan.serializeM = (m) => smsg(nolan, m, store)

    nolan.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                nolan.logout();
            }
            else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                Botstarted();
            }
            else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, reconnecting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Scan Again And Run.`);
                nolan.logout();
            }
            else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                Botstarted();
            }
            else if (reason === DisconnectReason.Multidevicemismatch) {
                console.log("Multi device mismatch, please scan again");
                nolan.logout();
            }
            else nolan.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
            console.log(`Connected to = ` + JSON.stringify(nolan.user, null, 2))
        }
    })

    nolan.ev.on('creds.update', saveCreds)

    nolan.sendText = (jid, text, quoted = '', options) => nolan.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })

    nolan.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }

    nolan.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {

        let quoted = message.msg ? message.msg : message

        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    nolan.sendTextWithMentions = async (jid, text, quoted, options = {}) => nolan.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    nolan.getFile = async (PATH, returnAsFilename) => {
        let res, filename
        const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        const type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './MEDIA/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
        return {
            res,
            filename,
            ...type,
            data,
            deleteFile() {
                return filename && fs.promises.unlink(filename)
            }
        }
    }

    nolan.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await nolan.getFile(path, true)
        let {
            res,
            data: file,
            filename: pathFile
        } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            }
            catch (e) {
                if (e.json) throw e.json
            }
        }
        let opt = {
            filename
        }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '',
            mimetype = type.mime,
            convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime))(
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: {
                url: pathFile
            },
            mimetype
        }
        let m
        try {
            m = await nolan.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        }
        catch (e) {
            //console.error(e)
            m = null
        }
        finally {
            if (!m) m = await nolan.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options
            })
            file = null
            return m
        }
    }
    nolan.sendMedia = async (jid, path, filename, quoted = '', options = {}) => {
        let {
            ext,
            mime,
            data
        } = await nolan.getFile(path)
        messageType = mime.split("/")[0]
        pase = messageType.replace('application', 'document') || messageType
        return await nolan.sendMessage(jid, {
            [`${pase}`]: data,
            mimetype: mime,
            fileName: filename + ext ? filename + ext : getRandom(ext),
            ...options
        }, {
            quoted
        })
    }
    nolan.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
      let {
         ext,
         mime,
         data
      } = await nolan.getFile(path)
      let media = {}
      let buffer
      media.data = data
      media.mimetype = mime
      if (options && (options.packname || options.author)) {
         buffer = await writeExif(media, options)
      } else {
         buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
      }
      await nolan.sendMessage(jid, {
         sticker: {
            url: buffer
         },
         ...options
      }, {
         quoted
      })
      return buffer
   }
    nolan.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        }
        else {
            buffer = await imageToWebp(buff)
        }

        await nolan.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    nolan.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        }
        else {
            buffer = await videoToWebp(buff)
        }

        await nolan.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    nolan.sendFakeLink = (jid, text, salam, footer_text, pp_bot, web, pushname, quoted) => nolan.sendMessage(jid, {
        text: text,
        contextInfo: {
            "externalAdReply": {
                "title": `Selamat ${salam} ${pushname}`,
                "body": footer_text,
                "previewType": "PHOTO",
                "thumbnailUrl": ``,
                "thumbnail": pp_bot,
                "sourceUrl": web
            }
        }
    }, {
        quoted
    })

    return nolan
}

Botstarted()
