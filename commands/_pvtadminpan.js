/*CMD
  command: /pvtadminpan
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var ary = Bot.getProperty("channels", [])

var msg = '*🤗Your Added Channels Lists :\n*';
var prop;
for(var i in ary){
  msg = msg + "\n"+String( parseInt(i) + 1 )+". "+ ary[i].channel 
}

var button = [{title: "➕Add Channel", command: "/addchannel"}]
Bot.sendInlineKeyboard(button,msg)
