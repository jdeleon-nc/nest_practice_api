import { Injectable } from '@nestjs/common';
import { CreateFighterDto } from 'src/mma/dtos/create-fighter.dto';
import fs from 'fs';
import { StreamArray } from 'stream-json/streamers/StreamArray.js';

@Injectable()
export class FighterService {
  getFighters(): string[] {
    // const streamArray = StreamArray.withParser();
    const reader = fs.createReadStream('./src/db/fighters.json', { encoding: 'utf-8' });
    let fighters = reader.read().toString();
    fighters = JSON.parse(fighters);
    return fighters;
  }

  addFighter(createFighterDto: CreateFighterDto): CreateFighterDto {
    // console.log('Adding fighter:', JSON.stringify(createFighterDto, null, 2));
    const writer = fs.createWriteStream('./src/db/fighters.json', { flags: 'a'});
    console.log('Writer Stream:', writer);
    // writer.write(JSON.stringify(createFighterDto, null, 2));

    // const fighter = { ...createFighterDto };
    const fighter = new CreateFighterDto();
    return fighter;
  }
}
