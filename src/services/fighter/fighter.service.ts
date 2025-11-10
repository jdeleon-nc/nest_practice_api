import { Injectable } from '@nestjs/common';

@Injectable()
export class FighterService {
  getFighters(): string[] {
    const champions = ['Tom Aspinall, Illia Topuria, JDM, Alex Pereira'];
    return champions;
  }
}
