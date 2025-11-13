export class CreateFighterDto {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    age: number = 0;

    constructor(partial: Partial<CreateFighterDto>) {
        Object.assign(this, partial);
    }
}