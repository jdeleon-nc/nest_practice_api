import { IsNumber, IsString } from 'class-validator';

export class CreateFighterDto {
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

  constructor(partial: Partial<CreateFighterDto>) {
    Object.assign(this, partial);
  }
}
