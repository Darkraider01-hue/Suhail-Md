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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349013009229";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_00_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFaGRqSFFXWGNHZ1FZYkZpZExSbHFsbnRGbk5ZMDI5MXcwbU5oa0xPRVcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzM3NjYwODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCREJBN0Y4MjBEMkQyODZCNkQ2M0UzRjZFOEZDNDNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMwNzYyMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzM3NjYwODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY5MTc5Mjc0NTg5OTJEMTUxNUJFQzI3MDAyRThDNkM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMwNzYyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLaVJoNVptVlJweVpoOG9hdlE1OGpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3YWJjNTBjLThlMTQtNDM4YS05ZGQyLThkYzE3NWQwYWQ0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA1NyxcbiAgICAgIDYzLFxuICAgICAgNTQsXG4gICAgICAxNDYsXG4gICAgICAxODUsXG4gICAgICAyNDAsXG4gICAgICAxMTgsXG4gICAgICAxNTYsXG4gICAgICAyMDIsXG4gICAgICA2NyxcbiAgICAgIDI1MSxcbiAgICAgIDE5OSxcbiAgICAgIDIwMCxcbiAgICAgIDIwNyxcbiAgICAgIDM0LFxuICAgICAgNzEsXG4gICAgICA2OCxcbiAgICAgIDEzMixcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICA4OCxcbiAgICAgIDg4LFxuICAgICAgMjE1LFxuICAgICAgNTEsXG4gICAgICAyMzEsXG4gICAgICAxNjUsXG4gICAgICAxNTIsXG4gICAgICAxNjIsXG4gICAgICAxMTMsXG4gICAgICA1NCxcbiAgICAgIDE4NCxcbiAgICAgIDkzLFxuICAgICAgMjA0LFxuICAgICAgMTYxLFxuICAgICAgMTgsXG4gICAgICA4MSxcbiAgICAgIDE2NSxcbiAgICAgIDE4MSxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRTZXU1FZMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA3Mzc2NjA4OTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk2NTgyNzU0MTgxODY6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGY1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09lQXdHb1E0S1BrdEFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR0ZScllJK29HTlF2TDZuQ0h6SXZDL0ZuNXZJN0Q5eWxLa2dydlZkamJUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoZHFFUTBsOERBdVdYN3M3VnpYVjMxUWJDZjBYR1Jyd3A0bGIvaE1kc1E3WUsyT0N5VHpuODdmNU5GekhVRTZST296dnIxSjh1cFU2NjFJZ1R6NFJCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKZjNqRGNGako4OXZUdVFONk5oUEFoQmkwQ2F3VHB1NVVSZVc3WlIwNUVtalg0ZDBnVWQ5ZWdRNS9tZVhydU5BNUxSRUpSMnEyd0Q5cmZreWM4WWJCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDczNzY2MDg5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDc2MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQSUtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBJSy5qc29uIjogIntcImtleURhdGFcIjpcIjE3MnJzRmVYem96WVF5U0NHcXRpTG4rbVJpZEkxbXR2M0lwb2xMd291ZG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIzMzQ2NzkxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMDQ0ODAxNTlcIn0iCn0="  // PUT your SESSION_ID 


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
