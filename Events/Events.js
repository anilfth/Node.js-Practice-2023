const EventEmitter = require('events')
const event  = new EventEmitter();
//  event.on('sayMyName', () => {
//     console.log('Your name is Anil')
//  });

  // we can call multiple functions in using one events
//  event.on('sayMyName', () => {
//     console.log('Your college Name is Lovely Professional University')
//  });
//  event.on('sayMyName', () => {
//     console.log('Your  Department Computer Science and Engineering')
//  });
//   event.emit('sayMyName');

// Registering for the event with callback parameter
 event.on('checkPage', (sc, msg) => {
 console.log(`source code is ${sc} and page check is ${msg}`)
 })

 event.emit('checkPage', 200, 'ok');