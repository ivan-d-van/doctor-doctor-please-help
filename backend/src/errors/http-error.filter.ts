import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { ErrorCode } from './errors.code';
import { GenericError } from './errors.generic';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        Logger.error(exception.stack);

        if (exception instanceof GenericError) {
            response.status(exception.httpStatus).json({
                status: exception.httpStatus,
                code: exception.code,
                message: exception.message
            });
        } else if (exception.status) {
            response.status(exception.status).json({
                status: exception.status,
                code: exception.code,
                message: exception.message
            });
        } else {
            const error = new GenericError(ErrorCode.InternalError);
            response.status(error.httpStatus).json({
                status: error.httpStatus,
                code: error.code,
                message: error.message
            });
        }
    }
}
