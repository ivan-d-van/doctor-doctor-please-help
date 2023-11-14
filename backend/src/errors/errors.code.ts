export const ErrorCode = {
    InternalError: 1000,
    IncorrectCredentials: 1010,
    UserAlreadyExists: 1011,
    UserDeactivated: 1012,

    EventReqShouldHaveEvents: 1090,

    BurningItemAlreadyExists: 1100,
    BurningItemNotFound: 1101,
    BurningItemAlreadyActivated: 1102,
    BurningItemAlreadyDeactivated: 1103,

    OperatorNotFound: 1110,
    ApiKeyRequired: 1111,
    SignatureRequired: 1112,
    OperatorHasNotSetAddress: 1113,
    OperatorHasNotSetNotificationUrl: 1114,
    CannotSetAddressInDevMode: 1115,
    IncorrectSignature: 1116,

    ClientNotFound: 1200,
    AddressesNotEqual: 1201,
    WrongAction: 1202,
    SidNotFound: 1203,

    BatchNotFound: 1300,
    BatchShouldBeFailed: 1301,

    ResourceNotFound: 1400,
    ResourceAlreadyExists: 1401,
    GradeNotFound: 1402,

    GradeAmountOutOfRange: 1500,

    ValidationError: 1600
};
