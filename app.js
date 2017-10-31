var restify = require('restify'); 
var builder = require('botbuilder'); 

//========================================================= // Bot Setup //========================================================= 

// Setup Restify Server

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {    
    console.log('%s listening to %s', server.name, server.url); 
 });    
 
 // Create chat bot 
 var connector = new builder.ChatConnector({     
     appId: "b012f20a-edee-4a99-a55f-f48eb4197524",     
     appPassword: "mjnMSGAMO&@;[uutbU36758"
    }); 
    
var bot = new builder.UniversalBot(connector); 
server.post('/api/messages', connector.listen()); 

//========================================================= 
// Bots Dialogs //========================================================= 

bot.dialog('/', function (session) {     
    session.send("Hello World"); 
});