export class Pieces {
    private shapes: { [key: string]: number[][] } = {
        I: [
            [1, 1, 1, 1]
        ],
        J: [
            [1, 0, 0],
            [1, 1, 1]
        ],
        L: [
            [0, 0, 1],
            [1, 1, 1]
        ],
        O: [
            [1, 1],
            [1, 1]
        ],
        S: [
            [0, 1, 1],
            [1, 1, 0]
        ],
        T: [
            [0, 1, 0],
            [1, 1, 1]
        ],
        Z: [
            [1, 1, 0],
            [0, 1, 1]
        ]
    };

    private currentPiece: string;
    private currentRotation: number;

    constructor() {
        this.currentPiece = this.randomPiece();
        this.currentRotation = 0;
    }

    private randomPiece(): string {
        const pieces = Object.keys(this.shapes);
        return pieces[Math.floor(Math.random() * pieces.length)];
    }

    public rotate(): void {
        this.currentRotation = (this.currentRotation + 1) % 4;
    }

    public getCurrentShape(): number[][] {
        return this.shapes[this.currentPiece];
    }

    public getCurrentPiece(): string {
        return this.currentPiece;
    }
}