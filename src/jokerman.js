/// Old system, using warhammer.js now



// const ks = require('node-key-sender');
// const { GlobalKeyboardListener } = require("node-global-key-listener");
// const fs = require("fs");
// const player = require("node-wav-player");

// // Config
// let active = true;
// let recordMouse = true;
// let mouseHistory = [];

// // Initialize global keyboard listener
// const keyboard = new GlobalKeyboardListener();

// // Listen for key events
// keyboard.addListener(function (e, down) {
//     // Log the full event object to see its structure
//     console.log('Full event:', e);
    
//     doomHacks({ key: e.name });
// });

// // Handle program exit
// process.on('SIGINT', () => {
//     keyboard.kill();
//     process.exit();
// });


// doomHacks = event => {
//   console.log('DoomHacks received key:', event.key);
//   if (event.key === '1'){
//     ks.sendKey(['middle']);
//   }
//   if (event.key === '2'){
//     ks.sendCombination(['middle']);
//   }
//   if (event.key === '3'){
//     ks.sendCombination(['middle']);
//   }
//   if (event.key === '4'){
//     ks.sendCombination(['middle']);
//   }
// }

// // ioHook.on("mousemove", mouseEvent => {
// //     if (recordMouse) recordMouseHistory(mouseEvent)
// //     //console.log(event);
// // });

// const switchActiveHacks = () => {
//   active = !active;
//   console.log("Active is now: " + active);
// };

// let isUltimateOnCD = false;

// const shacoUltimateAlarm = () => {
//   if (isUltimateOnCD) return;
//   isUltimateOnCD = true;
//   setTimeout(() => {
//     player.play({
//       path: "./src/beep.wav",
//     });
//     setTimeout(() => {
//       player.play({
//         path: "./src/beep.wav",
//       });
//       setTimeout(() => {
//         player.play({
//           path: "./src/beep.wav",
//         });
//         isUltimateOnCD = false;
//       }, 1000);
//     }, 1000);
//   }, 15600);
// };

// const recordMouseHistory = (mouseEvent) => {
//   mouseHistory.push(mouseEvent);
// };

// const saveMouseHistory = (mouseHistory) => {
//   recordMouse = false;
//   loadMouseMovementList(mouseHistory);
//   fs.writeFile("./record.txt", JSON.stringify(mouseHistory), (err) => {
//     if (err === null) console.log("File written");
//     recordMouse = true;
//   });
// };

// const loadMouseMovementList = (mouseList) => {
//   let clicks = 0;
//   mouseList.forEach((mouseValue) => {
//     if (mouseValue.clicks > clicks) {
//       ks.sendCombination(['left']);
//       clicks++;
//     }
//     ks.sendCombination(['mouse_move', mouseValue.x, mouseValue.y]);
//   });
// };

// // Robotrrr

// // ks.setMouseDelay(1);
// // ks.setKeyboardDelay(1);

// // var screenSize = ks.getScreenSize();
// // var height = screenSize.height / 2 - 10;
// // var width = screenSize.width;

// const editAndShot = () => {
//   var pos = ks.getMousePosition();
//   ks.sendCombination(['z']);
//   ks.sendCombination(['right']);
//   ks.sendCombination(['down']);
//   ks.sendCombination(['mouse_move', pos.x + 1, pos.y + 1]);
//   ks.sendCombination(['up']);
//   ks.sendCombination(['mouse_move', pos.x, pos.y]);
//   ks.sendCombination(['2']);
// };

// const factorialTurn = () => {
//     ks.sendCombination(['1']);
//     ks.sendCombination(['0']);
//     ks.sendCombination(['0']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['1']);
//     ks.sendCombination(['6']);
//     ks.sendCombination(['0']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['space']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['space']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['2']);
//     ks.sendCombination(['0']);
//     ks.sendCombination(['0']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['2']);
//     ks.sendCombination(['2']);
//     ks.sendCombination(['0']);
//     ks.sendCombination(['tab']);
//     ks.sendCombination(['space']);
// }

// console.log('Program started. Press Ctrl+C to exit.');