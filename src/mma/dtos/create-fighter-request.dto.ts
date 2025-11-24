import { IsNumber, IsString } from 'class-validator';

export class CreateFighterRequestDto {
  @IsNumber()
  id: number = 0;

  @IsString()
  firstName: string = '';

  @IsString()
  lastName: string = '';

  @IsNumber()
  age: number = 0;

  @IsNumber()
  weightClassId: number = 0;

  constructor(partial: Partial<CreateFighterRequestDto>) {
    Object.assign(this, partial);
  }
}
