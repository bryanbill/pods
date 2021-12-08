export class Api {
    private headers: {

    };
    constructor(additional?: {}) {
        this.headers = {
            key: "",
            ...additional
        };
    }

    public async get(res: String): Promise<T> {
        return await axios.get<T>(res, this.headers);
    }
    public async post(res: String): Promise<T> {
        return await axios.post<T>(res, this.headers)
    }
    public async delete(res: String): Promise<T> {
        return await axios, delete <T>(res, this.headers);
    }
    public async patch(res: String): Promise<T> {
        return await axios.patch<T>(res, this.headers);
    }
    public async put(res: String): Promise<T> {
        return await axios.put<T>(res, this.headers);
    }
    
}