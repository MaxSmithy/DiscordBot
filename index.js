
const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

let GeorgeID = '351709491408142346'
let MaxID = '368508067072966663'
let JoshID = '487652046590181398'

client.on("messageCreate", message => {

if (message.content === "W") { //get user ID
  message.reply('ID - ' + message.author)
  

  }

if(message.content === "grr") { //insult 9000
  message.channel.send("STFU BITCH")
  message.channel.send("PROBS GOT CHLAMIDIA OR SOMETHING")
  message.channel.send("INCEST NOB")
  message.channel.send("FAMILY TREE PROBABLY A CIRCLE")
  }
  
if(message.content === "T") { //embed phil spoon
  let embed = new Discord.MessageEmbed()
.setColor("#b6d4be")
.setTitle("Click Me Right Now")
.setDescription("That link looking real clickable")
.setFooter("Nothing bad will happen ;)")
.setURL("https://i.ytimg.com/vi/dWKoTztkWiU/maxresdefault.jpg")
.setThumbnail("https://i2-prod.mirror.co.uk/incoming/article25355164.ece/ALTERNATES/s1200d/2_Gun-obsessed-schoolboy-16-pictured-with-AK-47-years-before-he-blasted-pal-in-face-with-shotgun.jpg")
//.setThumbnail('https://miro.medium.com/max/1400/1*mtGIfXRPG2FG_zbKJhwWzA.png')
message.channel.send({embeds: [embed]})

}

})

client.login(process.env.token)