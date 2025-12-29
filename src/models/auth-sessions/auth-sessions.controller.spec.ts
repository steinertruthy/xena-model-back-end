import { Test, TestingModule } from '@nestjs/testing';
import { AuthSessionsController } from './auth-sessions.controller';
import { AuthSessionsService } from './auth-sessions.service';

describe('AuthSessionsController', () => {
  let controller: AuthSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthSessionsController],
      providers: [AuthSessionsService],
    }).compile();

    controller = module.get<AuthSessionsController>(AuthSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
