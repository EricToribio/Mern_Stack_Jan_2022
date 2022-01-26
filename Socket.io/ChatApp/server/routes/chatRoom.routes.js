const ChatRoomController = require('../controllers/chatRooms.controller')

module.exports = app => {
    app.post("/api/chatroom/new", ChatRoomController.addChatRooms)
    app.get("/api/chatroom", ChatRoomController.showAllChatRooms)
    app.get("/api/chatroom/:id" , ChatRoomController.showOneChatRoom)
    app.put("/api/chatroom/update/:id" , ChatRoomController.updateExistingChatRoom)
    app.delete("/api/chatroom/delete/:id" , ChatRoomController.deleteChatRoom)
}