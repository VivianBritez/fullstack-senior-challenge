import { AxiosHttpService } from '../../adpaters/http-axios.adapter';
export declare class HttpService {
    private readonly httpService;
    constructor(httpService: AxiosHttpService);
    getInfo<T>(url: string, options?: any): Promise<T>;
    post<T>(url: string, data: any, options?: any): Promise<T>;
    put<T>(url: string, data: any, options?: any): Promise<T>;
    delete<T>(url: string, options?: any): Promise<T>;
}
