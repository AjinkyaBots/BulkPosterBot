/*CMD
  command: /check
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

if(options.ok === "false"){
  Bot.sendMessage("🙄*This is Not an Channel*")
}else{
var user = options.result.status
User.setProperty("status", user, "string")
if (user == "administrator"){
  if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var ary = User.getProperty("mychannels")
var arr = ary ? ary : []
var json = {
    channel: params
  }
arr.push(json)
User.setProperty("mychannels",arr,"json")
  
  var chan = Bot.getProperty("channels")
  var qarr = chan ? chan : []
var json1 = {
    channel: params
  }
qarr.push(json1)
Bot.setProperty("channels",qarr,"json")

var qrtrs = Bot.getProperty("qrTrans")
var qrt = qrtrs?qrtrs:[]
if(!qrt.includes(params)){
qrt.push(params)
Bot.setProperty("qrTrans",qrt,"json")
  
  Bot.sendMessage("✅*Channel Added Successfully*")
}else{
Bot.sendMessage("Note: Ajinkya Ka Hai Bot")
}
}
if (user == "member") {
  Bot.sendMessage("*🙄Bot is not admin there!!*")
}

if (user == "left") {
  Bot.sendMessage("🙄*Bot is not admin there!!*")
}
}
