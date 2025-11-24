export class CreateFighterResponseDto {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  weightClassId: number = 0;

  constructor(partial: Partial<CreateFighterResponseDto>) {
    Object.assign(this, partial);
  }
}
