import { HttpInterface } from '../core/interface/http-request.interface';
export declare class AxiosHttpService implements HttpInterface {
    private readonly axiosInstance;
    constructor();
    get<T = any>(url: string, options?: any): Promise<T>;
    post<T = any>(url: string, data?: any, options?: any): Promise<T>;
    put<T = any>(url: string, data?: any, options?: any): Promise<T>;
    delete<T = any>(url: string, options?: any): Promise<T>;
}
