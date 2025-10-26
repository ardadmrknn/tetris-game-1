export class Renderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d')!;
    }

    renderBoard(board: number[][]) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        board.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    this.context.fillStyle = this.getColor(value);
                    this.context.fillRect(x * 30, y * 30, 30, 30);
                }
            });
        });
    }

    renderPiece(piece: number[][], offsetX: number, offsetY: number) {
        piece.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    this.context.fillStyle = this.getColor(value);
                    this.context.fillRect((x + offsetX) * 30, (y + offsetY) * 30, 30, 30);
                }
            });
        });
    }

    private getColor(value: number): string {
        const colors = [
            '', // 0: empty
            'cyan', // 1: I piece
            'blue', // 2: J piece
            'orange', // 3: L piece
            'yellow', // 4: O piece
            'green', // 5: S piece
            'purple', // 6: T piece
            'red' // 7: Z piece
        ];
        return colors[value];
    }
}