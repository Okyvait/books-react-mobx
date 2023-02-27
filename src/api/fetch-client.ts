export class FetchClient {
    get(link, options?) {
        return fetch(link, options).then(this.toJson);
    }

    post(link, params?, options?) {
        return fetch(link, {
            method: 'POST',
            ...(params && { data: JSON.stringify(params) }),
            ...(options && options),
        }).then(this.toJson);
    }

    private toJson = (response) => response.json();
}
