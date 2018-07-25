module.exports = class Room {
    constructor(id, name) {
        if (!id) {
            throw ('room id required');
        }
        if (id.match(/^[a-z]+$/)) {
            this.id = id
            this.name = name || capitalize(id)
            
        }
        else {
            throw ('room id must contain only lowercase letters')
        }
        this.messages = []
    }
    messageCount(){
        //var message = new Message(); //here is my problem. Message is not defined. how does this file connect to message.js??
        return this.messages.length;
    }
    sendMessage(message){
        this.messages.push(message)
    }
    messagesSince(five){
        return this
        .messages
        .filter(
            message => message.when>five
        )
    }
}
function capitalize(string){
    let firstLetter = string.charAt(0).toUpperCase()
    let everythingElse = string.slice(1)
    return firstLetter + everythingElse
}

