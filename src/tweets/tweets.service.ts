import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet)
    private tweet: typeof Tweet,
  ) {}

  create(createTweetDto: CreateTweetDto) {
    return this.tweet.create({ text: createTweetDto.text });
  }

  findAll() {
    return this.tweet.findAll();
  }

  findOne(id: number) {
    return this.tweet.findOne({ where: { id } });
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return this.tweet.update(updateTweetDto, { where: { id } });
  }

  remove(id: number) {
    return this.tweet.destroy({ where: { id } });
  }
}
