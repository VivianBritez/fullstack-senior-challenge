import { HttpStatus } from '@nestjs/common';
export declare class HttpResponseService {
    successResponse(data: any, message?: string): {
        statusCode: HttpStatus;
        message: string;
        data: any;
    };
    errorResponse(statusCode?: HttpStatus): void;
    conflictResponse(errorMessage: string): void;
    notFoundResponse(errorMessage: string): void;
    forbiddenResponse(errorMessage: string): void;
}
