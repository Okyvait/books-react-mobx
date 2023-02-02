import { FetchClient } from './fetch-client';

export interface Client {
    get: (link: string, options?) => Promise<Record<never, never>>;
    post: (link: string, params: Record<never, never>, options?) => Promise<Record<never, never>>;
}

export class HttpService {
    private readonly client;
    
    constructor(client?: Client) {
        this.client = client || new FetchClient();
    }

    get(link: string) {
        return this.client.get(link);
    }
    
    post(link: string, params?) {
        return this.client.post(link, params);
    }
}

export default new HttpService();