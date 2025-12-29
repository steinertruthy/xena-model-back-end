import { XApiKeyMiddleware } from './x-api-key.middleware';

describe('XApiKeyMiddleware', () => {
  it('should be defined', () => {
    expect(new XApiKeyMiddleware()).toBeDefined();
  });
});
