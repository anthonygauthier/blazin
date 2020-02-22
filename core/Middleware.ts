export class Middleware {
    private name: string;
    public function: (req: any) => any;

    constructor(middlewareName: string, implementation: (req: any) => any) {
        this.name = middlewareName;
        this.function = implementation;
    }

    public getName(): string {
        return this.name;
    }
}