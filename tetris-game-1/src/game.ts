class Game {
    private board: Board;
    private pieces: Pieces;
    private input: Input;
    private renderer: Renderer;
    private gameInterval: any;
    private isGameOver: boolean;

    constructor() {
        this.board = new Board();
        this.pieces = new Pieces();
        this.input = new Input();
        this.renderer = new Renderer();
        this.isGameOver = false;
    }

    public start(): void {
        this.isGameOver = false;
        this.gameLoop();
        this.input.listenForInput(this.handleInput.bind(this));
    }

    private gameLoop(): void {
        if (this.isGameOver) return;

        this.update();
        this.renderer.renderBoard(this.board);
        this.renderer.renderPiece(this.pieces.getCurrentPiece());

        this.gameInterval = setTimeout(() => this.gameLoop(), 1000);
    }

    private update(): void {
        if (this.board.placePiece(this.pieces.getCurrentPiece())) {
            this.pieces.nextPiece();
        } else {
            this.end();
        }
    }

    private handleInput(input: string): void {
        switch (input) {
            case 'left':
                this.pieces.moveLeft();
                break;
            case 'right':
                this.pieces.moveRight();
                break;
            case 'down':
                this.pieces.moveDown();
                break;
            case 'rotate':
                this.pieces.rotate();
                break;
        }
    }

    public end(): void {
        this.isGameOver = true;
        clearTimeout(this.gameInterval);
        console.log("Game Over");
    }
}