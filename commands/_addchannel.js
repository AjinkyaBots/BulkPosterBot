/*CMD
  command: /addchannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🌐Send Your Channel Username*

  <<KEYBOARD

  KEYBOARD
  aliases: ➕add channel
CMD*/

if(message.includes("@")){  
  var qrtrs = Bot.getProperty("qrTrans")
var qrt = qrtrs?qrtrs:[]
if(!qrt.includes(message)){
    var button = [{title: "✅ Done",command: "/botadmin "+message+""}]
Bot.sendInlineKeyboard(button, "*👨‍💻Make Bot Admin In Channel*")
}else{
Bot.sendMessage("*⁉️This channel already exists*")
}
}else{
Bot.sendMessage("*Invail Channel  Username*")
}
