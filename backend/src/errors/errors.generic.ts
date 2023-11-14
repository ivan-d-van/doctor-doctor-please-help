import { ErrorMessage } from './errors.message';
import { ErrorStatus } from './errors.status';

export class GenericError extends Error {
    errorCode: number;
    httpStatus: number;

    constructor(code) {
        const message = ErrorMessage[code] || 'Unknown error';
        super(message);

        this.errorCode = code;
        this.httpStatus = ErrorStatus[code];
    }

    get code() {
        return this.errorCode;
    }

    get statusCode() {
        return this.httpStatus;
    }
}
