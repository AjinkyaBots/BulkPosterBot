/*CMD
  command: /botadmin
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

//Message at @Botschats to get your Bot TelegramId

Api.getChatMember({
chat_id: ""+params+"",
user_id: 6221461075, //Message @BotsChats to get your bot Telegram id
on_result: "/check "+params+""
})
