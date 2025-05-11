# Auto Clicker Tools

A collection of automation tools built with Node.js, including an auto-clicker and other keyboard/mouse automation utilities.

## Features

### Warhammer Auto Clicker
- Toggle auto-clicking with Left Alt key
- Clicks every 0.1 seconds when active
- Global keyboard listener (works even when window is not focused)
- Easy to use with desktop shortcut

### Jokerman Tools
- Various keyboard and mouse automation functions
- Middle mouse click triggers on number keys 1-4
- Mouse movement recording and playback

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [repo-name]
```

2. Install dependencies:
```bash
npm install
```

3. Create desktop shortcut (optional):
```bash
npm run create-shortcut
```
This will create a shortcut on your desktop with the keyboard shortcut `Ctrl+Alt+W`

To remove the shortcut:
```bash
npm run remove-shortcut
```

## Usage

### Running the Auto Clicker

1. Using the desktop shortcut:
   - Double-click the "Warhammer Clicker" shortcut on your desktop
   - Or use the keyboard shortcut `Ctrl+Alt+W`

2. Using npm:
```bash
npm run warhammer
```

3. Controls:
   - Press `Left Alt` to start auto-clicking
   - Press `Left Alt` again to stop
   - Press `Ctrl+C` to exit the program

### Running Jokerman Tools

```bash
npm run hacks
```

## Development

- `src/warhammer.js` - Auto clicker implementation
- `src/jokerman.js` - Additional automation tools
- `run-warhammer.bat` - Batch file for running the auto clicker
- `package.json` - Project configuration and scripts

## Requirements

- Node.js
- Windows OS (for global keyboard listener)
- Administrator privileges (for keyboard/mouse control)

## Notes

- The auto clicker requires administrator privileges to control the mouse
- The global keyboard listener works even when the window is not focused
- Click interval is set to 0.1 seconds (100ms)

## License

ISC 

## Author

Ayoze Manuel Fernández Acosta