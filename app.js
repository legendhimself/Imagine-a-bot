require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { multiply, add } = require("./functions/calc");
const { prefix } = require("./config.json");
client.on("ready", async () => {
  console.log("The bot is online");
});

client.on("message", async (message) => {
  if (message.content.toLowerCase().startsWith(`${prefix}`)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if (cmd === "cal") {
      if (args[0].toLowerCase() === "multiply") {
        args.shift();
        return message.channel.send(multiply(args));
      }
      if (args[0].toLowerCase() === "add") {
        args.shift();
        add(args);
        return message.channel.send(add(args));
      }
    }
    // return message.channel.send(ans);
  }
});
client.login(process.env.Token);
