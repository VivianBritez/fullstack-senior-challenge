import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class HttpResponseService {
  successResponse(data: any, message = 'Success') {
    return {
      statusCode: HttpStatus.OK,
      message,
      data,
    };
  }

  errorResponse(statusCode: HttpStatus = HttpStatus.BAD_REQUEST) {
    throw new HttpException(
      {
        statusCode,
        message: 'Internal server error',
      },
      statusCode,
    );
  }

  conflictResponse(errorMessage: string) {
    throw new HttpException(
      {
        statusCode: HttpStatus.CONFLICT,
        message: errorMessage,
      },
      HttpStatus.CONFLICT,
    );
  }

  notFoundResponse(errorMessage: string) {
    throw new HttpException(
      {
        statusCode: HttpStatus.NOT_FOUND,
        message: errorMessage,
      },
      HttpStatus.NOT_FOUND,
    );
  }

  forbiddenResponse(errorMessage: string) {
    throw new HttpException(
      {
        statusCode: HttpStatus.FORBIDDEN,
        message: errorMessage,
      },
      HttpStatus.FORBIDDEN,
    );
  }


}
