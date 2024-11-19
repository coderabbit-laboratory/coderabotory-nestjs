import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  describe('getHello', () => {
    it('returns greering message', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });
});
