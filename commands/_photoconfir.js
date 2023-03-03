/*CMD
  command: /photoconfir
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

var ary = User.getProperty("mychannels", [])
var photo = User.getProperty("photo")
var caption = User.getProperty("caption")

var prop;
for(var i in ary){
Api.sendPhoto({
  chat_id: ary[i].channel,
    photo: photo,
    caption: caption
    })
  }
  
    if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
Bot.sendMessage("✅*Posted to all Channel*")
