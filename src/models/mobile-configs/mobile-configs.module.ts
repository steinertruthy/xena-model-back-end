import { Module } from '@nestjs/common';
import { MobileConfigsService } from './mobile-configs.service';
import { MobileConfigsController } from './mobile-configs.controller';

@Module({
  controllers: [MobileConfigsController],
  providers: [MobileConfigsService],
})
export class MobileConfigsModule {}
