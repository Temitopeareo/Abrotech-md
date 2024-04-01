const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="abrahamtemitope247@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Abraham:Abraham@cluster0.jg7exji.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Temitopeareo/Abrotech-md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Fmkh7WvnIaW4Cafa49jjDc";
global.website=process.env.GURL || "https://chat.whatsapp.com/Fmkh7WvnIaW4Cafa49jjDc" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/ps7QIot.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348100151048" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348100151048";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://imgur.com/ps7QIot.jpg,https://imgur.com/ps7QIot.jpg,https://imgur.com/ps7QIot.jpg,https://imgur.com/ps7QIot.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348100151048";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348100151048";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348100151048";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_12_04_01_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0hYclE3L3hEaU1SOW0wa2JDZEMzZjRJMXp6NFRKTnBWR0d2MnFFMGFIVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjZXMk1aWWFlVUpRWFhrdno0eVhqOW5PNWp2ZkFsaTk0bHdQRm5CZ3E2QWM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUt4eitTZXFvZTJmS3Rlakh6UG4zeUdmbVhBUUthYk5Ba1dmdmhmNlFuVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlUxbHNzbUR6QnpoRnowcWFEVmF5QnQxVE5VUExSazRqQTRGQmFaNy85MGc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0tianRKTVUvNXAwNCtUODZGbUZUQUFrSE9SRDZDTkNXR2FrVWNLdHhVOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk05bGtPWWZ5eG5WdmxrZUh5OUZyV3FnNjlsL09sOE9QSVhZMjNGb2pjWEU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzQktTUTNxQ2tPRHRLWlN5RGlLNWI3dDlrNzc4MXZsV0FuMGpKSkQ0MVdRPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidDBFcHA1NW9zT2F6dGpXMXZkRks4eWwxUmFQS2FjejdieUlyYUdmVUJ6OD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIzMVA1ODRNVXI5eUJoNGNLWjVIMVNwRU9uZmZ2V2xuTDZ4TmEySUZoT2pmMjhXY0dUemdIMFhlaXFHK05pTWg4M0QvWWhyTEs5V2UyVit1Q2JzTWVCQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTU1LFwiYWR2U2VjcmV0S2V5XCI6XCJIVjFCYWhHR0h0amhuaWRyVXYvbU1YeklXYWk1czJhdVpOQkxOY1cwbVlVPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwieUYtdlVqRW9Ra3FzUkc1c1VpbzB1QVwiLFwicGhvbmVJZFwiOlwiZTY2YTEyNDctNGY5My00MTdiLWEwMGMtMGViYmM2MWU4NWM1XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPU3ljd0ZSLzluM09yL2lobmdCaE5PM3hrQ0U9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkdQQlhxa3JSeW9rSzdyR3d3ODRQbXltdmdKbz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTnZsK05RTkVJNlJxckFHR0FNZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjhicmp0N1lERWtjVExSTFRrYXh6SHZMMCtPaFo0eW4vZCt6ZVhmSDFMQUk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJUM0JtbFFpblR0QmZ0YUtMaWlqL3NGZ0xKTklmOXNGNDIzM3BFa2IxZ2RUTmk0VTdIQVlaSWFaRE1VLytSYk5FR09SaTZzT0M2YTVwcTVNTG0weVNBQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInZCKzAwd01FN3pkNEFkcDBQbVdrdEh0d2lyR0xWamR3eHFOQ0NLMWIrWXplNUFUSHFDUitNMWVPU0Iwa2NRRzhwcGR5RXVRUmNEZ0VGQW9uY2t1TkRBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MTAwMTUxMDQ4OjZAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIvCdlpnwnZaK8J2WkvCdlo7wnZaZ8J2WlPCdlpXwnZaKXCIsXCJsaWRcIjpcIjE0Nzk3OTIyMjY1NTE3MDo2QGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgxMDAxNTEwNDg6NkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJmRzY0N2UyQXhKSEV5MFMwNUdzY3g3eTlQam9XZU1wLzNmczNsM3g5U3dDXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iaVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTk2NjM1NCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFJLytcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJX18rLmpzb24iOiAie1wia2V5RGF0YVwiOlwicStJWEhGZU91OVlJTjZLbm84UVZyTndTSnd1QmNQNm1nYTFIZUdmdjVpbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjY3ODAwNzk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEwNjUyNDc1MTNcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Abro-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©ABRO-MD" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ABRO-MD 』```", //* ABROTECH LOVES Y'ALL"),
 
  author : process.env.PACK_AUTHER|| "ABRO-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ABRO-MD",
  ownername:process.env.OWNER_NAME|| "It'x ABRO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
