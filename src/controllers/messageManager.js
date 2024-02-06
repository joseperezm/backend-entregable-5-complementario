const Message = require('../dao/models/messageModel');

class MessageManager {
    async saveMessage(userData) {
        try {
            const message = new Message(userData);
            await message.save();
            return message;
        } catch (error) {
            throw error;
        }
    }

    async getAllMessages() {
        try {
            const messages = await Message.find({});
            return messages;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new MessageManager();
