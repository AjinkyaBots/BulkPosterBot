/*CMD
  command: /bulkpost
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *📩Send Me Message For Post*

  <<KEYBOARD

  KEYBOARD
  aliases: 📑post message
CMD*/

if(request.photo.length > 0){
User.setProperty("photo",request.photo[0].file_id,"string")
User.setProperty("caption",request.caption,"string")

  var photo = User.getProperty("photo")
var caption = User.getProperty("caption")

Api.sendPhoto({
    photo: photo,
caption:""+caption+"\n\n----------------------------------------------------- \n⁉️Are you Sure to Post Message",reply_markup:{inline_keyboard : [[{text :"✅ Confirm",callback_data:"/photoconfir"}],[{text :"🚫 cancel",callback_data:"/cancel"}]]
}})

  
}else{

User.setProperty("post",message,"text")
var button = [[{title: "✅Confirm",command: "/confir"}],[{title: "🚫Cancel",command: "/cancel"}]]
var post = User.getProperty("post")

Bot.sendInlineKeyboard(button, ""+post+"\n\n--------------------------------------- \n⁉️Are you Sure to Post Message")
}
