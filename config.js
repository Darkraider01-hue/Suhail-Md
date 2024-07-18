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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_14_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicE5TN2hLZE15NkptZ05yUmJ3M1N5aEM2OHR4YXl4UGU2d2tybGx2a2Izbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDczNzY2MDg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRUNFNzJEODNDMTAwQTlCODZGRDQ4NjFCQTRBMjZFMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNDQ0ODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDczNzY2MDg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNDE0ODA5RTc3NzQxREM4QUY3QUJCMkE5NjVFNjlBN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNDQ0ODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLUxZS1laT25TMTZBSDh6aW8yZTNlQVwiLFxuICBcInBob25lSWRcIjogXCIwZTQyNTg4Ni1mNjhjLTRlMjEtYTJiZS0zODQ2YThhNWQ4YTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMjEyLFxuICAgICAgNTMsXG4gICAgICAyMjUsXG4gICAgICA5NCxcbiAgICAgIDE2MSxcbiAgICAgIDEyMyxcbiAgICAgIDE0MSxcbiAgICAgIDU5LFxuICAgICAgNDQsXG4gICAgICAyNTIsXG4gICAgICAxMzUsXG4gICAgICAyMjIsXG4gICAgICAxMjksXG4gICAgICAxOTksXG4gICAgICAxNzQsXG4gICAgICAyOCxcbiAgICAgIDIxNyxcbiAgICAgIDEyOSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDIyOCxcbiAgICAgIDEzMCxcbiAgICAgIDExOCxcbiAgICAgIDEwMyxcbiAgICAgIDM2LFxuICAgICAgMTQsXG4gICAgICA3MyxcbiAgICAgIDE2OCxcbiAgICAgIDMsXG4gICAgICAxNjQsXG4gICAgICA2MCxcbiAgICAgIDEzLFxuICAgICAgMTc1LFxuICAgICAgMjI5LFxuICAgICAgOTMsXG4gICAgICAxMzEsXG4gICAgICA2NSxcbiAgICAgIDE0OCxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFMMVZSNUNYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDczNzY2MDg5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk2NTgyNzU0MTgxODY6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZUF3R29RM01QbXRBWVlDQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdGUnJZSStvR05Rdkw2bkNIekl2Qy9GbjV2STdEOXlsS2tncnZWZGpiVE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieEdlc3V0U2orcHF5SjNReDdkbkJSUzdqem94M0pwR0x4NnRqSzhiSmF4aDdDQzdydUd5NzdFVjh1NmFXclhWR0xMTkI1Rk9zbHFnaXJxZFVkRmtRQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnBUUzNkTGxEdXZuMFp2cWJacXFKenVHeEE3bGtmdnE3ZU1lc3diYTBtWlhWMGlVQWN2WXBQT3JPZVljVy9EN2kycVlkTkVaTTdXVUpTSlg5WmtYaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3Mzc2NjA4OToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM0NDQ4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBJS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUElLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMTcycnNGZVh6b3pZUXlTQ0dxdGlMbittUmlkSTFtdHYzSXBvbEx3b3Vkbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjMzNDY3OTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
