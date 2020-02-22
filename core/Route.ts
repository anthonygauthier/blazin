export class Route {
    private uri: string;
    private method: string;

    constructor(path: string, httpMethod: string) {
        this.uri = path;
        this.method = httpMethod;
    }

    getUri() {
        return this.uri;
    }

    getHttpMethod() {
        return this.method;
    }
}