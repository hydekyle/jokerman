const robot = require('robotjs');
const { GlobalKeyboardListener } = require("node-global-key-listener");

// Config
let isClicking = false;
let clickInterval = null;

// Initialize global keyboard listener
const keyboard = new GlobalKeyboardListener();

// Listen for key events
keyboard.addListener(function (e, down) {
    console.log('Key pressed:', e);
    
    // Check for ALT key
    if (e.name === 'LEFT ALT' && e.state === 'DOWN') {
        toggleClicking();
    }
});

// Function to start/stop clicking
const toggleClicking = () => {
    isClicking = !isClicking;
    console.log('Clicking:', isClicking ? 'ON' : 'OFF');
    
    if (isClicking) {
        // Start clicking every 0.1 seconds
        clickInterval = setInterval(() => {
            robot.mouseClick('left');
        }, 100);
    } else {
        // Stop clicking
        if (clickInterval) {
            clearInterval(clickInterval);
            clickInterval = null;
        }
    }
};

// Handle program exit
process.on('SIGINT', () => {
    if (clickInterval) {
        clearInterval(clickInterval);
    }
    keyboard.kill();
    process.exit();
});

console.log('Program started. Press ALT to toggle auto-clicking. Press Ctrl+C to exit.');
