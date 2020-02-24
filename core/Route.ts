export class Route {
    private uri: string;
    private method: string;
    public function: any;

    constructor(path: string, httpMethod: string, fn: any) {
        this.uri = path;
        this.method = httpMethod;
        this.function = fn;
    }

    getUri() {
        return this.uri;
    }

    getHttpMethod() {
        return this.method;
    }
}