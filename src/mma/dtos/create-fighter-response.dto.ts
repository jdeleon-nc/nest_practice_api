export class CreateFighterResponseDto {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  weightClass: string = '';

  constructor(partial: Partial<CreateFighterResponseDto>) {
    Object.assign(this, partial);
  }
}
