import { Module } from '@nestjs/common';
import { SendEmailWithTweetsJob } from './send-mail-with-tweets-job';

@Module({
  providers: [SendEmailWithTweetsJob],
})
export class MailingModule {}
