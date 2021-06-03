require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const { multiply, add, sub } = require("./functions/calc");
const { prefix } = require("./config.json");
client.on("ready", async () => {
  console.log("The bot is online");
});

client.on("message", async (message) => {
  if (message.content.toLowerCase().startsWith(`${prefix}`)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if (cmd === "cal") {
      let ans;
      if (
        args.includes("+") ||
        args.includes("-") ||
        args.includes("x") ||
        args.includes("/")
      ) {
        for (let i = 0; i < args.length; ) {
          //DMAS

          const arg = args[i];
          const sign = args[i + 1];
          var secondnum = args[i + 2];

          if (arg && sign && secondnum) {
            if (
              !arg.includes("+") &&
              !arg.includes("-") &&
              !arg.includes("x") &&
              !arg.includes("/")
            ) {
              let arr = [arg, secondnum];
              try {
                if (ans) {
                  if (ans.toString().split("").includes(".")) {
                    ans = parseFloat(ans);
                  } else {
                    ans = parseInt(ans);
                  }
                }
                if (secondnum.toString().split("").includes(".")) {
                  secondnum = parseFloat(secondnum);
                } else {
                  secondnum = parseInt(secondnum);
                }
              } catch (error) {
                console.log(error);
              }

              //************************ADDITION************************* */
              if (sign === "+") {
                if (!ans) {
                  ans = add(arr);
                } else if (ans) {
                  ans = ans + secondnum;
                }
              }
              //************************SUBSTRACT************************* */
              else if (sign === "-") {
                if (!ans) {
                  ans = sub(arr);
                } else if (ans) {
                  ans = ans - secondnum;
                }
              }
              //************************MULTIPLY************************* */
              else if (sign === "x" || sign === "*") {
                if (!ans) {
                  ans = multiply(arr);
                } else if (ans) {
                  ans = ans * secondnum;
                }
              }
            }
          }
          i++;
          if (i === args.length) {
            if (isNaN(ans)) {
              return message.channel.send("Please Provide valid Numbers");
            } else {
              return message.channel.send(ans);
            }
          }
        }
      } else {
        if (args[0].toLowerCase() === "multiply") {
          args.shift();
          return message.channel.send(multiply(args));
        }
        if (args[0].toLowerCase() === "add") {
          args.shift();
          return message.channel.send(add(args));
        }
        if (args[0].toLowerCase() === "sub") {
          args.shift();
          return message.channel.send(sub(args));
        }
      }
    }
  }
});
client.login(process.env.token);
