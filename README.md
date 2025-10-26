# Tetris Game

This is a simple implementation of the classic Tetris game using TypeScript. The project is structured to separate concerns, making it easy to understand and extend.

## Project Structure

```
tetris-game
├── src
│   ├── main.ts        # Entry point of the game
│   ├── game.ts        # Game logic management
│   ├── board.ts       # Game board representation
│   ├── pieces.ts      # Tetris pieces and their rotations
│   ├── input.ts       # User input handling
│   ├── render.ts      # Rendering the game on the screen
│   └── types
│       └── index.ts   # Types and interfaces
├── public
│   ├── index.html     # Main HTML file
│   └── styles.css     # Styles for the game
├── package.json       # npm configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Getting Started

To run the game, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd tetris-game
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the game:
   ```
   npm start
   ```

## How to Play

- Use the arrow keys to move the pieces left, right, and down.
- Press the up arrow key to rotate the pieces.
- The goal is to fill complete lines to clear them and score points.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the game.

## License

This project is open-source and available under the MIT License.