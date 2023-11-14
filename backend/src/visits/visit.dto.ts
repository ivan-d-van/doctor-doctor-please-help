export class CreateVisitDto {
    readonly doctorId: string;
    readonly medicalCardId: string;
    readonly date: Date;
    readonly status: string;
    readonly name: string;
}
