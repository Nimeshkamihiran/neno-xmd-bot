const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "6HJTGBIA#pP1JLTigffcaTc9Sm0VIii9-KObV8gHpnmAqJc71Wy8",
  OWNER_NUM: process.env.OWNER_NUM || "263774499994",
  PREFIX: process.env.PREFIX || ".",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
  MODE : process.env.MODE || "public", 
  AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE || "true", 
  AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING || "false"), 
  ANTI_DELETE: convertToBool(process.env.ANTI_DELETE || "true"),
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  AUTO_CHAT_GF: process.env.AUTO_CHAT_GF || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "true",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ew4vew.jpg",
  AUTO_REACT: convertToBool(process.env.AUTO_REACT || "true"),
  AUTO_REACT: process.env.AUTO_REACT === "true" ? true : false,
  CUSTOM_REACT_EMOJIS:
    process.env.CUSTOM_REACT_EMOJIS || "🥲,😂,😐,🙂,😔",

  // Add this line for your status view control:

};
