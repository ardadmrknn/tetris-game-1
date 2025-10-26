# Tetris Game

This is a simple implementation of the classic Tetris game built with TypeScript. The game features a grid where Tetris pieces fall, and the player can control these pieces to create complete lines and score points.

## Project Structure

```
tetris-game
├── src
│   ├── main.ts          # Entry point of the game
│   ├── game.ts          # Game logic and state management
│   ├── board.ts         # Game board representation and line clearing
│   ├── pieces.ts        # Tetris pieces and their shapes
│   ├── input.ts         # User input handling
│   ├── renderer.ts      # Rendering the game on the screen
│   └── types
│       └── index.ts     # Type definitions and interfaces
├── public
│   ├── index.html       # Main HTML file for the game interface
│   └── styles.css       # Styles for the game layout and design
├── package.json         # npm configuration and dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Getting Started

To run the Tetris game locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd tetris-game
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the game**:
   You can use a local server to serve the `public/index.html` file. For example, you can use the `live-server` package:
   ```
   npx live-server public
   ```

4. **Open your browser**:
   Navigate to `http://localhost:8080` (or the port provided by your local server) to play the game.

## Features

- Classic Tetris gameplay with falling pieces.
- User controls to move and rotate pieces.
- Line clearing and scoring system.
- Responsive design for various screen sizes.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add!