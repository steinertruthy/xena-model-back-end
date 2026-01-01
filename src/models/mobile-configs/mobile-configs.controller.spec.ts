import { Test, TestingModule } from '@nestjs/testing';
import { MobileConfigsController } from './mobile-configs.controller';
import { MobileConfigsService } from './mobile-configs.service';

describe('MobileConfigsController', () => {
  let controller: MobileConfigsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobileConfigsController],
      providers: [MobileConfigsService],
    }).compile();

    controller = module.get<MobileConfigsController>(MobileConfigsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
