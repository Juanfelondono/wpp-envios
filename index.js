
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { placas, fechas, numbers } = require('./datos.js');


const client = new Client();

const fd = new Date();
const dI= fd.getDate();
if(dI != 16 ) {
  client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
  });
  
  
  client.on('ready', async () => {
    console.log('Cliente de WhatsApp está listo!');
  
    try {
    
      // Números de teléfono a los que se enviará el mensaje, fecha y placas los importo desde datos.js
      
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
      let index = 0
      for (const number of numbers) {
        const isRegistered = await client.isRegisteredUser(number);
        if (!isRegistered) {
          console.log(`El número ${number} no tiene WhatsApp. mensaje numero ${index+1} de ${numbers.length}`);
          index++
          continue; // Pasar al siguiente número si no tiene WhatsApp
        }
        const message = `Buen dia! te habla *NICOL YULIANA* asesora del *CDA CIUDAD BONITA*, te informamos el vencimiento de tu *REVISION TECNICOMECANICA* DEL VEHICULO DE PLACA *${placas[index]} EL ${fechas[index]}*\n\n*Financiamos tu SOAT y Revisión*\n\n*Estamos ubicados en la Carrera 15 No. 11-56 Barrio Gaitán*\n\n*Nuestro horario de atención*\n\nLunes a Viernes de 6:30 am A 6:00 pm\nSabados: 6:30 am a 4:30 pm\nDomingos y Festivos: 8:00am a 12:00 m\n\nTe Esperamos`;
  
        await client.sendMessage(`${number}@c.us`, message); // Envío del mensaje
        console.log(`Mensaje enviado correctamente al número ${number}, mensaje numero ${index+1} de ${numbers.length}`);
        await delay(2000); // Espera 2 segundos antes de enviar el siguiente mensaje
        index++;
      }
  
      await client.logout(); // Cerrar sesión después de enviar los mensajes
  
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    } finally {
      process.exit(); // Salir del programa después de enviar los mensajes
    }
  });
  
  client.initialize();
}else {
  console.log("Licencia vencida contacte a su provedor")
}

