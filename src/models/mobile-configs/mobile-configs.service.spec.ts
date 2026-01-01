import { Test, TestingModule } from '@nestjs/testing';
import { MobileConfigsService } from './mobile-configs.service';

describe('MobileConfigsService', () => {
  let service: MobileConfigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MobileConfigsService],
    }).compile();

    service = module.get<MobileConfigsService>(MobileConfigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
