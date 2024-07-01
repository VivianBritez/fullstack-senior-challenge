import { HttpService } from '../../../http-request/core/service/http-request.service';
export declare class ChangeRateInfoService {
    private http;
    constructor(http: HttpService);
    getChangeInfo(): Promise<{
        data: any;
    }>;
}
