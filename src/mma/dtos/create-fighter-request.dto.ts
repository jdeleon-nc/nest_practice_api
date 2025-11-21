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

  @IsString()
  weightClass: string = '';

  constructor(partial: Partial<CreateFighterRequestDto>) {
    Object.assign(this, partial);
  }
}
