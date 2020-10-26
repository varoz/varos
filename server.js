const Discord = require("discord.js");
const config = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
    console.log("BOT LISTO!");
});







//SIMIO//
client.on("message", (message) => {
    if(message.content.startsWith("simio")) {
        message.channel.send("El Rotivis");
    }

   
});


client.on("message", (message) => {
    if(message.content.startsWith("GG")) {
        message.channel.send("Normal, eres buenísimo.")
    }
});

client.on("message", (message) => {
    if(message.content.startsWith("pero")) { 
        message.channel.send("ni peros ni topos")
    }
});



client.on("message", (message) => {
    if(message.content.startsWith("topo")) {
        message.channel.send("cual de todos los topos que hay muchos xd")
    }
});


//aqui va escrito el prefix de información del servidor//
let prefix = config.prefix;
client.on("message", (message) => { 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(command === "servidor"){
    message.channel.send(`Nombre del servidor: ${message.guild.name}
    \nTotal de topos: ${message.guild.memberCount}`);
}
});

//aqui va escrito el prefix de la información de usuario//












client.login(config.token); 