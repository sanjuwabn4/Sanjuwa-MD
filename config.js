const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG,|| "https://telegra.ph/file/c6c8452820c44d0b388eb.jpg",
ALIVE_MSG: process.env.ALIVE_MSG,|| "🚀•🎯 Hi I'am Online ♥️•🌐",
};
