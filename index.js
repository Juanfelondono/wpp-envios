/*const { Client, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// equivalent to
const client = new Client({
    authStrategy: new NoAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('Cliente de WhatsApp está listo!');
  
   /* // Escuchamos los mensajes entrantes
    client.on('message', (message) => {
      if (message.body === 'Hola') {
        // Enviamos un mensaje de respuesta
        client.sendMessage(message.from, 'Hola desde mi bot de WhatsApp!');
      } else if (message.body === 'horario de atencion') {
        // Enviamos un mensaje de respuesta
        client.sendMessage(message.from, 'Nuestro horario de atención es de lunes a viernes, de 9:00 a.m. a 5:00 p.m.');
      } else {
        // Enviamos un mensaje de respuesta por defecto
        client.sendMessage(message.from, 'No entendí lo que quieres decir. Por favor, envía "Hola" o "horario de atencion".');
      }
    }); 
    client.sendMessage('+573167559457', 'Hola, este e sun ensayo de los envios automaticos');
  });
  
client.initialize();*/
/*'Buen día! le habla Stephanie asesora del CDA CALARCA, le informamos el vencimiento de su REVISION TECNICOMECANICA DEL VEHICULO DE PLACA HPA41E EL MARTES 21 DE FEBRERO\n\nVENTA DE SOAT, FINANCIAMOS SU REVISION TECNICOMECANICA\n\nEstamos ubicados frente al parador de camioneros, diagonal a la bascula Av. Centenario 6 200 Calarcá\n\nNuestro horario de atención \n\nLunes a Viernes de 6:30 am A 6:00 pm\nSábados: 6:30 am a 4:00 pm\nDomingos y Festivos: 7:30am a 12:30 pm\n\nLos esperamos!';*/

// const { Client, NoAuth } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// const client = new Client({
//     authStrategy: new NoAuth(),
// });

// client.on('qr', (qr) => {
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', async () => {
//   console.log('Cliente de WhatsApp está listo!');

//   try {
//     const message = 'Buen día! le habla Stephanie asesora del CDA CALARCA, le informamos el vencimiento de su REVISION TECNICOMECANICA DEL VEHICULO DE PLACA HPA41E EL MARTES 21 DE FEBRERO\n\nVENTA DE SOAT, FINANCIAMOS SU REVISION TECNICOMECANICA\n\nEstamos ubicados frente al parador de camioneros, diagonal a la bascula Av. Centenario 6 200 Calarcá\n\nNuestro horario de atención \n\nLunes a Viernes de 6:30 am A 6:00 pm\nSábados: 6:30 am a 4:00 pm\nDomingos y Festivos: 7:30am a 12:30 pm\n\nLos esperamos!';
//     const numbers = ['573107215513', '573107215513', '57']; // Números de teléfono a los que se enviará el mensaje

//     for (const number of numbers) {
//       await client.sendMessage(`${number}@c.us`, message); // Envío del mensaje
//       console.log(`Mensaje enviado correctamente al número ${number}`);
//     }

//   } catch (error) {
//     console.error('Error al enviar el mensaje:', error);
//   }
// });

// client.initialize();

const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});


client.on('ready', async () => {
  console.log('Cliente de WhatsApp está listo!');

  try {
    const message = 'Buen día! Este es un mensaje automático enviado desde WhatsApp.';
    const numbers = ['573107215513', '573107215513', '573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513','573107215513',]; // Números de teléfono a los que se enviará el mensaje

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (const number of numbers) {
      await client.sendMessage(`${number}@c.us`, message); // Envío del mensaje
      console.log(`Mensaje enviado correctamente al número ${number}`);
      await delay(2000); // Espera 2 segundos antes de enviar el siguiente mensaje
    }

    await client.logout(); // Cerrar sesión después de enviar los mensajes

  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
  } finally {
    process.exit(); // Salir del programa después de enviar los mensajes
  }
});

client.initialize();