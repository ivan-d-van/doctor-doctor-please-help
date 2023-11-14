import { ErrorCode } from './errors.code';

export const ErrorMessage = {
    [ErrorCode.InternalError]: 'Internal error',

    [ErrorCode.IncorrectCredentials]: 'Incorrect credentials',
    [ErrorCode.UserAlreadyExists]: 'User with provided creden tials already exists',
    [ErrorCode.UserDeactivated]: 'This user was deactivated',

    [ErrorCode.EventReqShouldHaveEvents]: 'Body should have at least 1 event',
    [ErrorCode.BurningItemAlreadyExists]: 'Burning item with provided ID already exists',
    [ErrorCode.BurningItemNotFound]: 'Burning item with provided ID and operator operatorId not found',
    [ErrorCode.BurningItemAlreadyActivated]: 'Burning item already activated',
    [ErrorCode.BurningItemAlreadyDeactivated]: 'Burning item already deactivated',

    [ErrorCode.OperatorNotFound]: 'Operator with provided attribute haas not exist',
    [ErrorCode.ApiKeyRequired]: 'Api key required in headers',
    [ErrorCode.SignatureRequired]: 'Signature required in headers',
    [ErrorCode.OperatorHasNotSetAddress]: 'Operator with provided ID has not set his address',
    [ErrorCode.OperatorHasNotSetNotificationUrl]: 'Operator with provided ID has not set URL for notifications',
    [ErrorCode.CannotSetAddressInDevMode]: 'Cannot set address for unexisted user in Dev mode. Please, switch mode and sign your request',
    [ErrorCode.IncorrectSignature]: 'Incorrect signature',

    [ErrorCode.ClientNotFound]: 'Client with provided attribute has not found',
    [ErrorCode.AddressesNotEqual]: 'Signer address and provided address are diffenerent',
    [ErrorCode.WrongAction]: 'Wrong provided action',
    [ErrorCode.SidNotFound]: 'Session ID has not found',

    [ErrorCode.BatchNotFound]: 'Batch with provided ID not found',
    [ErrorCode.BatchShouldBeFailed]: 'Batch should be in FAILED status',

    [ErrorCode.ResourceNotFound]: 'Resource not found',
    [ErrorCode.ResourceAlreadyExists]: 'Resource already exists',
    [ErrorCode.GradeNotFound]: 'Grade not found',

    [ErrorCode.GradeAmountOutOfRange]: 'Grade mint or pool amount out of possible range',

    [ErrorCode.ValidationError]: 'Validation error. Please, check your input params'
};
