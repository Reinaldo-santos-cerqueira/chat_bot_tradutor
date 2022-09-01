const venom = require('venom-bot');

const translate = require('node-google-translate-skidz');
 

venom.create().then((client) =>{

  start(client);

})

async function start(client) {
  client.onMessage( (message) => {

    let sliceMessage = message.body.slice(0, 8);
  
    if ( sliceMessage === 'Traduzir' && message.isGroupMsg === false) {

      let translateText = message.body.slice(8);

      translate({
        text: translateText,
        source: 'pt',
        target: 'en'
      }, async function(result) {
        
        await client.sendText(message.from ,result.translation);

      });
    }
  });
}