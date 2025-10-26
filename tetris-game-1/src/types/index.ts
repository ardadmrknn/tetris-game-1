export type Piece = {
    shape: number[][];
    color: string;
};

export type Board = {
    grid: number[][];
    width: number;
    height: number;
};

export type GameState = 'playing' | 'paused' | 'gameover';