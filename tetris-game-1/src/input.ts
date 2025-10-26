export class Input {
    private keys: Set<string>;

    constructor() {
        this.keys = new Set();
        this.listenForInput();
    }

    private listenForInput(): void {
        window.addEventListener('keydown', (event) => {
            this.keys.add(event.key);
        });

        window.addEventListener('keyup', (event) => {
            this.keys.delete(event.key);
        });
    }

    public getInput(): Set<string> {
        return this.keys;
    }
}