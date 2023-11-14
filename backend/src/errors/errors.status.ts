import { ErrorCode } from './errors.code';

export const ErrorStatus = {
    [ErrorCode.EventReqShouldHaveEvents]: 400,
    [ErrorCode.AddressesNotEqual]: 400,
    [ErrorCode.WrongAction]: 400,

    [ErrorCode.IncorrectCredentials]: 401,
    [ErrorCode.UserDeactivated]: 401,
    [ErrorCode.IncorrectSignature]: 401,

    [ErrorCode.BatchNotFound]: 404,
    [ErrorCode.OperatorNotFound]: 404,
    [ErrorCode.ClientNotFound]: 404,
    [ErrorCode.BurningItemNotFound]: 404,
    [ErrorCode.ResourceNotFound]: 404,
    [ErrorCode.GradeNotFound]: 404,
    [ErrorCode.SidNotFound]: 404,

    [ErrorCode.BurningItemAlreadyExists]: 409,
    [ErrorCode.UserAlreadyExists]: 409,
    [ErrorCode.BatchShouldBeFailed]: 409,
    [ErrorCode.OperatorHasNotSetAddress]: 409,
    [ErrorCode.BurningItemAlreadyActivated]: 409,
    [ErrorCode.BurningItemAlreadyDeactivated]: 409,
    [ErrorCode.ResourceAlreadyExists]: 409,
    [ErrorCode.OperatorHasNotSetNotificationUrl]: 409,
    [ErrorCode.GradeAmountOutOfRange]: 409,
    [ErrorCode.CannotSetAddressInDevMode]: 409,
    [ErrorCode.ValidationError]: 409,

    [ErrorCode.InternalError]: 500
};
