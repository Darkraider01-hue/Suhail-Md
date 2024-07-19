const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_24_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMU9BdXU3TXdvbDRpaGVCTmR0VmV2M3NHRXJTN0VEV2dWb0cyeGJ4WHlHWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWGwyZmhPOVRTUm03dVFRaTRucU1pd1wiLFxuICBcInBob25lSWRcIjogXCJmMTMyNDA3Yy05ZmQwLTRiM2ItODFjOC0yZjZjY2JkYjgwMmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAyMzQsXG4gICAgICAxMzEsXG4gICAgICAzMyxcbiAgICAgIDI0NixcbiAgICAgIDI0NixcbiAgICAgIDkyLFxuICAgICAgNDksXG4gICAgICA1NixcbiAgICAgIDE2NCxcbiAgICAgIDE1OSxcbiAgICAgIDIxNyxcbiAgICAgIDMyLFxuICAgICAgMTcsXG4gICAgICAxODcsXG4gICAgICA1OCxcbiAgICAgIDIzMixcbiAgICAgIDUzLFxuICAgICAgMjEsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICA5MyxcbiAgICAgIDE2MSxcbiAgICAgIDIwOCxcbiAgICAgIDE1NSxcbiAgICAgIDQ2LFxuICAgICAgMTg0LFxuICAgICAgMjI1LFxuICAgICAgMTgsXG4gICAgICAxNDksXG4gICAgICAyMTYsXG4gICAgICAxODIsXG4gICAgICAyLFxuICAgICAgNCxcbiAgICAgIDI0OSxcbiAgICAgIDU5LFxuICAgICAgMTMsXG4gICAgICA3NSxcbiAgICAgIDk0LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldRQkxNS0M2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDczNzY2MDg5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk2NTgyNzU0MTgxODY6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT21Bd0dvUXdQM290QVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHRlJyWUkrb0dOUXZMNm5DSHpJdkMvRm41dkk3RDl5bEtrZ3J2VmRqYlRNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklZTXFEbkpPdVowL3RGK2dWMzdQWFdLR1hyeVJ2QkhMM1dwdnZtSUNMVGRqcEJCc3NTV1pDYUt3eEFtU01XTnJBNHVYZHdDbWxsV0crbnFjcUZ4bEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjR2YzFxeno2S285cnZuRlFLa2t0bTI1cjJpTHZ4M0R2RzNDUUlrays0eVZyV2VwNHUzcm1ka0doVXlhU28wK1NBMGpMV3NGMUY2Z0R6VUo5M3dqS2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzM3NjYwODk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODQ2NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQSUtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBJSy5qc29uIjogIntcImtleURhdGFcIjpcIjE3MnJzRmVYem96WVF5U0NHcXRpTG4rbVJpZEkxbXR2M0lwb2xMd291ZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIzMzQ2NzkxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
